import React from "react"
import system from "./src/system"
import settings from "./src/settings"

export const Placeholder = props => {
  const service = system.isolate(props)
  const options = settings(service)
  return <></>
}

export default Placeholder
