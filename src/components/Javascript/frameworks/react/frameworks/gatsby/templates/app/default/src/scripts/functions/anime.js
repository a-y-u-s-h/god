import anime from "animejs/lib/anime.min.js"

export default {
  scale: {
    up: e => {
      anime({
        targets: e.currentTarget,
        backgroundPositionX: "1rem",
        scale: {
          value: 1.1,
          delay: 0,
          duration: 300,
        },
      })
    },

    down: e => {
      anime({
        targets: e.currentTarget,
        backgroundPositionX: "0",
        scale: {
          value: 1,
          delay: 0,
          duration: 300,
        },
      })
    },
  },
}
