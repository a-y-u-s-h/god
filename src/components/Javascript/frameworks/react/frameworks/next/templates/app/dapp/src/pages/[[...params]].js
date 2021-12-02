import React from "react"
import System from "@/systems/application"
import { useRouter } from "next/router"
import { useHotkeys } from "react-hotkeys-hook"

export const Application = React.forwardRef(({ children, ...props }, ref) => {
  const router = useRouter()
  const system = System.use()
  const { params } = router.query
  const { state, events, styles, content } = system
  return <></>
})

export default Application
