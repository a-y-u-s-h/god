/*
  ======================================

                                  /$$                       /$$     /$$
                                 |__/                      | $$    |__/
   /$$$$$$$   /$$$$$$  /$$    /$$ /$$  /$$$$$$   /$$$$$$  /$$$$$$   /$$  /$$$$$$  /$$$$$$$
  | $$__  $$ |____  $$|  $$  /$$/| $$ /$$__  $$ |____  $$|_  $$_/  | $$ /$$__  $$| $$__  $$
  | $$  \ $$  /$$$$$$$ \  $$/$$/ | $$| $$  \ $$  /$$$$$$$  | $$    | $$| $$  \ $$| $$  \ $$
  | $$  | $$ /$$__  $$  \  $$$/  | $$| $$  | $$ /$$__  $$  | $$ /$$| $$| $$  | $$| $$  | $$
  | $$  | $$|  $$$$$$$   \  $/   | $$|  $$$$$$$|  $$$$$$$  |  $$$$/| $$|  $$$$$$/| $$  | $$
  |__/  |__/ \_______/    \_/    |__/ \____  $$ \_______/   \___/  |__/ \______/ |__/  |__/
                                      /$$  \ $$
                                     |  $$$$$$/
                                      \______/
  
  This file contains navigator, that's supposed to be imported manually
  in index.js file of screens folder, this way: 
  
  import { Placeholder } from "./placeholder/placeholder.navigation.js"

  ======================================
*/
import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
const Stack = createStackNavigator()

import Placeholder from "./index.js"

/*
  ======================================
    'extract' is a helper utility
    function that extracts various
    types from the screen as their own
    component.
  ======================================
*/
const extract = type => Screen => {
  return ({ children, ...props }) => (
    <Screen type={type} {...props}>
      {children}
    </Screen>
  )
}

const Navigator = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Placeholder" component={Placeholder} />
    </Stack.Navigator>
  )
}

export default Navigator
