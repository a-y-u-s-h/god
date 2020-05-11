import React from "react"
import Placeholder from "./index"
import { createStackNavigator } from "@react-navigation/stack"
const Stack = createStackNavigator()

/*
  ======================================
    Define all type names here. Ordering
    them will let you debug faster. For
    example - the first element of this
    array is rendered at the top.
  ======================================
*/
const types = ["default"]

/*
  ======================================
    You don't have to look at this.
    As long as you understand the above
    comment, things should be clear.
  ======================================
*/
const Navigator = () => {
  return (
    <Stack.Navigator headerMode="none">
      {types.map((t, i) => (
        <Stack.Screen name={t} key={i}>
          {props => <Placeholder type={t} {...props} />}
        </Stack.Screen>
      ))}
    </Stack.Navigator>
  )
}

export default Navigator
