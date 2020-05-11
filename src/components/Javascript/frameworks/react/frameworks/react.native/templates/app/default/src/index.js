import React from "react"
import Screens from "screens"
import * as Expo from "expo"
import "utilities/ignore.warnings"

const app = () => <Screens />

Expo.registerRootComponent(app)
