import { extendTheme } from "@chakra-ui/core"
import components from "./components"
import foundations from "./foundations"

export default extendTheme({ ...components, ...foundations })
