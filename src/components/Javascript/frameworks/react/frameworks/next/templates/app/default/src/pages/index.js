import React from "react"
import styles from "@/assets/styles/pages/index.yaml"
import layout from "@/systems/layout"
import { useMachine } from "@xstate/react"
import { Box } from "@chakra-ui/core"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/core"

const Home = () => {
  layout.hook = useMachine(layout.machine)
  return (
    <>
      <Box {...styles.container}>
        <Box {...styles.content}>
          <Box {...styles.input.container}>
            <Box
              border="3px dashed #FFFFFF90"
              backgroundColor="#FFFFF20"
              width="100%"
              height="30%"
              _hover={{ backgroundColor: "#FFFFFF30" }}
            ></Box>
          </Box>
          <Box {...styles.widget}>
            <Tabs>
              <TabList {...styles.tabs.menu}>
                <Tab {...styles.tabs.tab}>Analysis</Tab>
                <Tab {...styles.tabs.tab}>Modify</Tab>
                <Tab {...styles.tabs.tab}>Export</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <p>Analysis</p>
                </TabPanel>
                <TabPanel>
                  <p>Modify</p>
                </TabPanel>
                <TabPanel>
                  <p>Export</p>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Home
