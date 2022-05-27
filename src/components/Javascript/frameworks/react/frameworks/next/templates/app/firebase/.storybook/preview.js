import "!style-loader!css-loader!postcss-loader!tailwindcss/tailwind.css"
import { DocsContainer } from "@storybook/addon-docs"
import React from "react"
import "tailwindcss/tailwind.css"
import Theme from "../src/settings/theme"
import System from "../src/systems"

const viewports = {
  "4k": {
    name: "4k Monitor",
    styles: {
      width: "4096px",
      height: "2160px"
    }
  },
  "2k": {
    name: "2k Monitor",
    styles: {
      width: "2048px",
      height: "1080px"
    }
  },
  fhd: {
    name: `FHD Monitor (13" Mac)`,
    styles: {
      width: "1920px",
      height: "1080px"
    }
  },
  hd: {
    name: "HD Monitor",
    styles: {
      width: "1366px",
      height: "768px"
    }
  },
  "wxga+": {
    name: "WXGA+ Monitor",
    styles: {
      width: "1440px",
      height: "900px"
    }
  },
  "mobile-xs": {
    name: "Mobile - XS",
    styles: {
      width: "320px",
      height: "533px"
    }
  },
  "mobile-sm": {
    name: "Mobile - SM",
    styles: {
      width: "360px",
      height: "640px"
    }
  },
  "mobile-md": {
    name: "Mobile - M",
    styles: {
      width: "320px",
      height: "658px"
    }
  },
  "mobile-lg": {
    name: "Mobile - M",
    styles: {
      width: "414px",
      height: "736px"
    }
  }
}

export const decorators = [
  Story => (
    <div className="w-[100vw] h-[100vh] bg-white">
      <System>
        <Theme>
          <Story />
        </Theme>
      </System>
    </div>
  )
]

export const parameters = {
  layout: "fullscreen",
  viewport: { viewports },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  options: {
    storySort: {
      order: ["Introduction", "Modifiers", "Atoms", "Molecules", "Organisms", "Universe", "Studies"]
    }
  },
  docs: {
    container: ({ children, context }) => <DocsContainer context={context}>{children}</DocsContainer>
  }
}
