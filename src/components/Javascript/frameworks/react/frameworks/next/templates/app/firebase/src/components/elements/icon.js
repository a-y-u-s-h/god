import React from "react"
import * as FA from "react-icons/fa"
import * as HI from "react-icons/hi"
import * as CG from "react-icons/cg"
import * as WI from "react-icons/wi"
import * as TI from "react-icons/ti"
import * as SI from "react-icons/si"
import * as RI from "react-icons/ri"
import * as MD from "react-icons/md"
import * as IO from "react-icons/io"
import * as IM from "react-icons/im"
import * as GR from "react-icons/gr"
import * as GO from "react-icons/go"
import * as GI from "react-icons/gi"
import * as FC from "react-icons/fc"
import * as FI from "react-icons/fi"
import * as DI from "react-icons/di"
import * as BI from "react-icons/bi"
import * as BS from "react-icons/bs"
import * as AI from "react-icons/ai"
import * as IO5 from "react-icons/io5"
import * as VSC from "react-icons/vsc"

export const SVG = {
  example: ({ ...props }) => {
    return <></>
  }
}

export const Icons = {
  FA,
  HI,
  CG,
  TI,
  SI,
  RI,
  MD,
  IO,
  IM,
  GR,
  GO,
  GI,
  FC,
  FI,
  DI,
  BI,
  BS,
  AI,
  IO5,
  VSC,
  IMG
}

export const Icon = React.forwardRef(({ children, family, name, ...props }, ref) => {
  const Component = Icons?.[family]?.[name] ? Icons?.[family]?.[name] : null
  return <>{Component && <Component {...props} />}</>
})

export default Icon
