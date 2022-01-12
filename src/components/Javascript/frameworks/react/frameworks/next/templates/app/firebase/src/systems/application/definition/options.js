import * as X from "xstate"
import * as firebase from "firebase/app"
import * as fireauth from "firebase/auth"
import * as firestore from "firebase/firestore"

export const options = {
  actions: {
    "telemetry.log.errors": (c, e) => console.log(c, e),
    "firebase.initialize": X.assign({
      firebase: (c, e) => {
        try {
          const config = c?.firebase?.config
          const app = firebase?.initializeApp(config)
          const database = firestore.getFirestore(app)
          const auth = fireauth.getAuth(app)
          auth.providers = {
            google: new fireauth.GoogleAuthProvider(),
            facebook: new fireauth.FacebookAuthProvider(),
            twitter: new fireauth.TwitterAuthProvider(),
            github: new fireauth.GithubAuthProvider(),
            apple: new fireauth.OAuthProvider("apple.com")
          }
          return { config, app, database, auth }
        } catch (e) {}
      }
    }),
    "assign.user": X.assign({
      user: (c, e) => e?.data
    })
  },
  activities: {},
  services: {
    "authentication.observer": (c, e) => (send, listen) => {
      const { auth } = c?.firebase
      fireauth.onAuthStateChanged(auth, user => send({ type: "load.user", data: user }))
      return () => {}
    },
    "load.user": async (c, e) => {
      const { auth } = c?.firebase
      return auth.currentUser
    },
    "sign.in.social": async (c, e) => {
      const { auth } = c?.firebase
      const method = e?.payload?.method || "google"
      await fireauth.setPersistence(auth, fireauth.browserLocalPersistence)
      return await fireauth.signInWithPopup(auth, auth?.providers?.[method])
    },
    "sign.in.anonymous": async (c, e) => {
      const { auth } = c?.firebase
      return await fireauth.signInAnonymously(auth)
    },
    "sign.in": async (c, e) => {
      const { auth } = c?.firebase
      const { email, password } = e?.payload
      await fireauth.setPersistence(auth, fireauth.browserLocalPersistence)
      return await fireauth.signInWithEmailAndPassword(auth, email, password)
    },
    "sign.up": async (c, e) => {
      const { auth } = c?.firebase
      const { email, password } = e?.payload
      await fireauth.setPersistence(auth, fireauth.browserLocalPersistence)
      return await fireauth.createUserWithEmailAndPassword(auth, email, password)
    },
    "sign.out": async (c, e) => {
      const { auth } = c?.firebase
      return await fireauth.signOut(auth)
    }
  },
  guards: {
    "user.exists": (c, e) => e?.data
  }
}

export default options
