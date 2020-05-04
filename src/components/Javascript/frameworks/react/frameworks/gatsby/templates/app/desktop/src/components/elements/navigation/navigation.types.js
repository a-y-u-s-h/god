import React from "react"
import store from "./navigation.store.js"
import { classes, components } from "./navigation.style.js"
import { Provider, Subscribe } from "unstated"
import { Pane, Tab, majorScale, Button, SearchInput, IconButton } from "evergreen-ui"

export default {
  default: () => {
    const styles = classes.default
    const Link = components.link
    return (
      <Provider>
        <Subscribe to={[store]}>
          {(store) => (
            <React.Fragment>
              <Pane {...styles.containers.main}>
                {/*
                  ====================================
                    Objects in tabs array, which have
                    a 'position' key unspecified or
                    specified as 'left' create tabs on left.
                  ====================================
                */}
                <Pane {...styles.containers.tabs.left}>
                  {store.state.default.tabs
                    .filter((tab) => !tab.name)
                    .filter((tab) => tab.position === "left" || !tab.position)
                    .map((tab, index) => (
                      <Link key={index} to={tab.link} {...styles.link} {...styles.tab}>
                        <IconButton icon={tab.icon} />
                      </Link>
                    ))}
                  {store.state.default.tabs
                    .filter((tab) => tab.name)
                    .filter((tab) => tab.position === "left" || !tab.position)
                    .map((tab, index) => (
                      <Link key={index} to={tab.link} {...styles.link} {...styles.tab}>
                        <Button iconBefore={tab.icon}>{tab.name}</Button>
                      </Link>
                    ))}
                </Pane>

                {/*
                  ====================================
                    Objects in tabs array, which have
                    a 'position' key specified and
                    specified as 'right' create tabs on right.
                  ====================================
                */}
                <Pane {...styles.containers.tabs.right}>
                  {store.state.default.tabs
                    .filter((tab) => tab.name)
                    .filter((tab) => tab.position === "right")
                    .map((tab, index) => (
                      <Link key={index} to={tab.link} {...styles.link} {...styles.tab}>
                        <Button iconBefore={tab.icon}>{tab.name}</Button>
                      </Link>
                    ))}
                </Pane>
                {/*
                  ====================================
                    If search's switch is true, then
                    it should show search input. You
                    can configure what this search input
                    does later. (todo)
                  ====================================
                */}
                {store.state.default.search.switch ? (
                  <Pane {...styles.containers.search}>
                    <SearchInput onChange={(e) => store.search(e)} value={store.state.default.search.value} />
                  </Pane>
                ) : (
                  ""
                )}
              </Pane>
            </React.Fragment>
          )}
        </Subscribe>
      </Provider>
    )
  }
}
