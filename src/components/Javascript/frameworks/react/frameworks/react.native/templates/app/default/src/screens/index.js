/*
  ======================================

      /$$$$$$$  /$$$$$$$  /$$$$$$   /$$$$$$   /$$$$$$  /$$$$$$$   /$$$$$$$
     /$$_____/ /$$_____/ /$$__  $$ /$$__  $$ /$$__  $$| $$__  $$ /$$_____/
    |  $$$$$$ | $$      | $$  \__/| $$$$$$$$| $$$$$$$$| $$  \ $$|  $$$$$$
     \____  $$| $$      | $$      | $$_____/| $$_____/| $$  | $$ \____  $$
     /$$$$$$$/|  $$$$$$$| $$      |  $$$$$$$|  $$$$$$$| $$  | $$ /$$$$$$$/
    |_______/  \_______/|__/       \_______/ \_______/|__/  |__/|_______/


     This file would usually be called 'app.navigator',
     which comprises of every navigator of every screen
     encapsulated. Naming it `index` and putting it inside
     `screens` folder allows us developers to import all screens
     as: import Screens from "screens", which is more intuitive
     that importing a navigation file (at least for web developers).

     Note: Individual Screen themselves do have a navigation file,
     because their folder import, by semantics should return the screen
     component and not any engangled logic related to React Native itself.

  ======================================
*/

import React from "react"
import Theme from "assets/styles/theme.js"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

const Stack = createStackNavigator()

import Home from "screens/home/home.navigation"

export default () => (
  <Theme>
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  </Theme>
)
