/*
  ======================================
    A utility script to suppress warnings
    that are out of our control - those
    that are due to a dependency.
  ======================================
*/
import { YellowBox as Warning } from "react-native"
import _ from "lodash"

/*
  ======================================
    Ignore all 'componentWillReceiveProps'
    has been renamed warnings. Annoying!
  ======================================
*/
Warning.ignoreWarnings(["componentWillReceiveProps"])
let _console = _.clone(console)
console.warn = message => {
  if (message.indexOf("componentWillReceiveProps") <= -1) {
    _console.warn(message)
  }
}

/*
  ======================================
    Ignore all 'Warning:'
    has been renamed warnings. Annoying!
  ======================================
*/
Warning.ignoreWarnings(["Warning:"])
console.warn = message => {
  if (message.indexOf("Warning:") <= -1) {
    _console.warn(message)
  }
}

/*
  ======================================
    This is a warning related to firebase
    package. Should also be ignored.
  ======================================
*/
Warning.ignoreWarnings(["Setting a timer"])
console.warn = message => {
  if (message.indexOf("Setting a timer") <= -1) {
    _console.warn(message)
  }
}

/*
  ======================================
    Only god knows why this "Remote Debugger"
    warning pops up. This needs to be suppressed
    as well.
  ======================================
*/
Warning.ignoreWarnings(["Remote debugger"])
console.warn = message => {
  if (message.indexOf("Remote debugger") <= -1) {
    _console.warn(message)
  }
}
