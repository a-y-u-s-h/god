import { extendTheme } from "@chakra-ui/core"

export default extendTheme({
  components: {
    Accordion: {
      parts: ["container", "button", "panel"],
      baseStyle: {
        container: {
          borderTopWidth: "1px",
          borderColor: "inherit",
          _last: {
            borderBottomWidth: "1px"
          }
        },
        button: {
          fontSize: "1rem",
          _focus: {
            boxShadow: "outline"
          },
          _hover: {
            bg: "blackAlpha.50"
          },
          _disabled: {
            opacity: 0.4,
            cursor: "not-allowed"
          },
          px: 4,
          py: 2
        },
        panel: {
          pt: 2,
          px: 4,
          pb: 5
        }
      }
    },
    Alert: {
      parts: ["container", "title", "icon"],
      baseStyle: {
        container: {
          px: 4,
          py: 3
        },
        title: {
          fontWeight: "bold",
          lineHeight: "normal"
        },
        icon: {
          mr: 3,
          w: 5,
          h: 5
        }
      },
      variants: {},
      defaultProps: {
        variant: "subtle"
      }
    },
    Avatar: {
      parts: ["container", "excessLabel", "badge", "label"],
      sizes: {
        "2xs": {
          container: {
            width: "4",
            height: "4",
            fontSize: "calc(1rem / 2.5)"
          },
          excessLabel: {
            width: "4",
            height: "4"
          },
          label: {
            fontSize: "calc(1rem / 2.5)",
            lineHeight: "1rem"
          }
        },
        xs: {
          container: {
            width: "6",
            height: "6",
            fontSize: "calc(1.5rem / 2.5)"
          },
          excessLabel: {
            width: "6",
            height: "6"
          },
          label: {
            fontSize: "calc(1.5rem / 2.5)",
            lineHeight: "1.5rem"
          }
        },
        sm: {
          container: {
            width: "8",
            height: "8",
            fontSize: "calc(2rem / 2.5)"
          },
          excessLabel: {
            width: "8",
            height: "8"
          },
          label: {
            fontSize: "calc(2rem / 2.5)",
            lineHeight: "2rem"
          }
        },
        md: {
          container: {
            width: "12",
            height: "12",
            fontSize: "calc(3rem / 2.5)"
          },
          excessLabel: {
            width: "12",
            height: "12"
          },
          label: {
            fontSize: "calc(3rem / 2.5)",
            lineHeight: "3rem"
          }
        },
        lg: {
          container: {
            width: "16",
            height: "16",
            fontSize: "calc(4rem / 2.5)"
          },
          excessLabel: {
            width: "16",
            height: "16"
          },
          label: {
            fontSize: "calc(4rem / 2.5)",
            lineHeight: "4rem"
          }
        },
        xl: {
          container: {
            width: "24",
            height: "24",
            fontSize: "calc(6rem / 2.5)"
          },
          excessLabel: {
            width: "24",
            height: "24"
          },
          label: {
            fontSize: "calc(6rem / 2.5)",
            lineHeight: "6rem"
          }
        },
        "2xl": {
          container: {
            width: "32",
            height: "32",
            fontSize: "calc(8rem / 2.5)"
          },
          excessLabel: {
            width: "32",
            height: "32"
          },
          label: {
            fontSize: "calc(8rem / 2.5)",
            lineHeight: "8rem"
          }
        },
        full: {
          container: {
            width: "100%",
            height: "100%",
            fontSize: "calc(100% / 2.5)"
          },
          excessLabel: {
            width: "100%",
            height: "100%"
          },
          label: {
            fontSize: "calc(100% / 2.5)"
          }
        }
      },
      defaultProps: {
        size: "md"
      }
    },
    Badge: {
      baseStyle: {
        px: 1,
        textTransform: "uppercase",
        fontSize: "xs",
        borderRadius: "sm",
        fontWeight: "bold"
      },
      variants: {},
      defaultProps: {
        variant: "subtle",
        colorScheme: "gray"
      }
    },
    Breadcrumb: {
      parts: ["link", "separator"],
      baseStyle: {
        link: {
          transition: "all 0.15s ease-out",
          cursor: "pointer",
          textDecoration: "none",
          outline: "none",
          color: "inherit",
          _hover: {
            textDecoration: "underline"
          },
          _focus: {
            boxShadow: "outline"
          }
        }
      }
    },
    Button: {
      baseStyle: {
        lineHeight: "1.2",
        borderRadius: "md",
        fontWeight: "semibold",
        _focus: {
          boxShadow: "outline"
        },
        _disabled: {
          opacity: 0.4,
          cursor: "not-allowed",
          boxShadow: "none"
        }
      },
      variants: {
        unstyled: {
          bg: "none",
          color: "inherit",
          display: "inline",
          lineHeight: "inherit",
          m: 0,
          p: 0
        }
      },
      sizes: {
        lg: {
          h: 12,
          minW: 12,
          fontSize: "lg",
          px: 6
        },
        md: {
          h: 10,
          minW: 10,
          fontSize: "md",
          px: 4
        },
        sm: {
          h: 8,
          minW: 8,
          fontSize: "sm",
          px: 3
        },
        xs: {
          h: 6,
          minW: 6,
          fontSize: "xs",
          px: 2
        }
      },
      defaultProps: {
        variant: "solid",
        size: "md",
        colorScheme: "gray"
      }
    },
    Checkbox: {
      parts: ["control", "label", "description", "icon"],
      sizes: {
        sm: {
          control: {
            h: 3,
            w: 3
          },
          label: {
            fontSize: "sm"
          }
        },
        md: {
          control: {
            w: 4,
            h: 4
          },
          label: {
            fontSize: "md"
          }
        },
        lg: {
          control: {
            w: 5,
            h: 5
          },
          label: {
            fontSize: "lg"
          }
        }
      },
      defaultProps: {
        size: "md",
        colorScheme: "blue"
      }
    },
    CloseButton: {
      sizes: {
        lg: {
          w: "40px",
          h: "40px",
          fontSize: "16px"
        },
        md: {
          w: "32px",
          h: "32px",
          fontSize: "12px"
        },
        sm: {
          w: "24px",
          h: "24px",
          fontSize: "10px"
        }
      },
      defaultProps: {
        size: "md"
      }
    },
    Code: {
      baseStyle: {
        fontFamily: "mono",
        fontSize: "sm",
        px: "0.2em",
        borderRadius: "sm"
      },
      variants: {},
      defaultProps: {
        variant: "subtle",
        colorScheme: "gray"
      }
    },
    Drawer: {
      parts: ["overlay", "content", "header", "body", "footer"],
      sizes: {
        xs: {
          content: {
            maxW: "xs"
          }
        },
        sm: {
          content: {
            maxW: "md"
          }
        },
        md: {
          content: {
            maxW: "lg"
          }
        },
        lg: {
          content: {
            maxW: "2xl"
          }
        },
        xl: {
          content: {
            maxW: "4xl"
          }
        },
        full: {
          content: {
            maxW: "100vw",
            h: "100vh"
          }
        }
      },
      defaultProps: {
        size: "xs"
      }
    },
    Editable: {
      parts: ["preview", "input"],
      baseStyle: {
        preview: {
          borderRadius: "md",
          py: "3px",
          transition: "all 0.2s"
        },
        input: {
          borderRadius: "md",
          py: "3px",
          transition: "all 0.2s",
          width: "full",
          _focus: {
            boxShadow: "outline"
          },
          _placeholder: {
            opacity: 0.6
          }
        }
      }
    },
    Form: {
      parts: ["errorText", "errorIcon", "requiredIndicator", "helperText"]
    },
    FormLabel: {
      baseStyle: {
        fontSize: "md",
        mr: 3,
        mb: 2,
        fontWeight: "medium",
        transition: "all 0.2s",
        opacity: 1,
        _disabled: {
          opacity: 0.4
        }
      }
    },
    Heading: {
      baseStyle: {
        fontFamily: "heading",
        lineHeight: "shorter",
        fontWeight: "bold"
      },
      sizes: {
        "2xl": {
          fontSize: ["4xl", null, "5xl"]
        },
        xl: {
          fontSize: ["3xl", null, "4xl"]
        },
        lg: {
          fontSize: ["2xl", null, "3xl"]
        },
        md: {
          fontSize: "xl"
        },
        sm: {
          fontSize: "md"
        },
        xs: {
          fontSize: "sm"
        }
      },
      defaultProps: {
        size: "xl"
      }
    },
    Input: {
      parts: ["field", "addon"],
      baseStyle: {
        field: {
          width: "100%",
          outline: 0,
          position: "relative",
          appearance: "none",
          transition: "all 0.2s"
        }
      },
      sizes: {
        lg: {
          field: {
            fontSize: "lg",
            pl: 4,
            paddingRight: 4,
            h: 12,
            borderRadius: "md"
          },
          addon: {
            fontSize: "lg",
            pl: 4,
            paddingRight: 4,
            h: 12,
            borderRadius: "md"
          }
        },
        md: {
          field: {
            fontSize: "md",
            pl: 4,
            paddingRight: 4,
            h: 10,
            borderRadius: "md"
          },
          addon: {
            fontSize: "md",
            pl: 4,
            paddingRight: 4,
            h: 10,
            borderRadius: "md"
          }
        },
        sm: {
          field: {
            fontSize: "sm",
            pl: 3,
            paddingRight: 3,
            h: 8,
            borderRadius: "sm"
          },
          addon: {
            fontSize: "sm",
            pl: 3,
            paddingRight: 3,
            h: 8,
            borderRadius: "sm"
          }
        }
      },
      variants: {
        unstyled: {
          field: {
            bg: "transparent",
            paddingX: 0,
            height: "auto"
          },
          addon: {
            bg: "transparent",
            paddingX: 0,
            height: "auto"
          }
        }
      },
      defaultProps: {
        size: "md",
        variant: "outline"
      }
    },
    Kbd: {},
    Link: {
      baseStyle: {
        transition: "all 0.15s ease-out",
        cursor: "pointer",
        textDecoration: "none",
        outline: "none",
        color: "inherit",
        _hover: {
          textDecoration: "underline"
        },
        _focus: {
          boxShadow: "outline"
        },
        _disabled: {
          opacity: 0.4,
          cursor: "not-allowed",
          textDecoration: "none"
        }
      }
    },
    Menu: {
      parts: ["item", "command", "list", "button", "groupTitle"]
    },
    Modal: {
      parts: ["overlay", "content", "header", "body", "footer"],
      sizes: {
        xs: {
          content: {
            maxW: "xs"
          }
        },
        sm: {
          content: {
            maxW: "sm"
          }
        },
        md: {
          content: {
            maxW: "md"
          }
        },
        lg: {
          content: {
            maxW: "lg"
          }
        },
        xl: {
          content: {
            maxW: "xl"
          }
        },
        "2xl": {
          content: {
            maxW: "2xl"
          }
        },
        "3xl": {
          content: {
            maxW: "3xl"
          }
        },
        "4xl": {
          content: {
            maxW: "4xl"
          }
        },
        "5xl": {
          content: {
            maxW: "5xl"
          }
        },
        "6xl": {
          content: {
            maxW: "6xl"
          }
        },
        full: {
          content: {
            maxW: "100vw",
            h: "100vh"
          }
        }
      },
      defaultProps: {
        size: "md"
      }
    },
    NumberInput: {
      parts: ["field", "stepper", "stepperGroup"],
      sizes: {
        sm: {
          field: {
            fontSize: "sm",
            pl: 3,
            paddingRight: 3,
            h: 8,
            borderRadius: "sm"
          },
          stepper: {
            fontSize: "10px",
            _first: {
              borderTopRightRadius: "sm"
            },
            _last: {
              borderBottomRightRadius: "sm",
              mt: "-1px",
              borderTopWidth: 1
            }
          }
        },
        md: {
          field: {
            fontSize: "md",
            pl: 4,
            paddingRight: 4,
            h: 10,
            borderRadius: "md"
          },
          stepper: {
            fontSize: "10px",
            _first: {
              borderTopRightRadius: "md"
            },
            _last: {
              borderBottomRightRadius: "md",
              mt: "-1px",
              borderTopWidth: 1
            }
          }
        },
        lg: {
          field: {
            fontSize: "lg",
            pl: 4,
            paddingRight: 4,
            h: 12,
            borderRadius: "md"
          },
          stepper: {
            fontSize: "14px",
            _first: {
              borderTopRightRadius: "md"
            },
            _last: {
              borderBottomRightRadius: "md",
              mt: "-1px",
              borderTopWidth: 1
            }
          }
        }
      },
      variants: {
        unstyled: {
          field: {
            bg: "transparent",
            paddingX: 0,
            height: "auto"
          },
          addon: {
            bg: "transparent",
            paddingX: 0,
            height: "auto"
          }
        }
      },
      defaultProps: {
        size: "md",
        variant: "outline"
      }
    },
    PinInput: {
      baseStyle: {
        width: "100%",
        outline: 0,
        position: "relative",
        appearance: "none",
        transition: "all 0.2s",
        textAlign: "center"
      },
      sizes: {
        lg: {
          fontSize: "lg",
          w: 12,
          h: 12,
          borderRadius: "md"
        },
        md: {
          fontSize: "md",
          w: 10,
          h: 10,
          borderRadius: "md"
        },
        sm: {
          fontSize: "sm",
          w: 8,
          h: 8,
          borderRadius: "sm"
        }
      },
      variants: {
        unstyled: {
          bg: "transparent",
          paddingX: 0,
          height: "auto"
        }
      },
      defaultProps: {
        size: "md",
        variant: "outline"
      }
    },
    Popover: {
      parts: ["content", "header", "body", "footer"]
    },
    Progress: {
      parts: ["track", "filledTrack", "panel"],
      sizes: {
        xs: {
          track: {
            h: "0.25rem"
          }
        },
        sm: {
          track: {
            h: "0.5rem"
          }
        },
        md: {
          track: {
            h: "0.75rem"
          }
        },
        lg: {
          track: {
            h: "1rem"
          }
        }
      },
      defaultProps: {
        size: "md",
        colorScheme: "blue"
      }
    },
    Radio: {
      parts: ["control", "label"],
      sizes: {
        md: {
          control: {
            w: 4,
            h: 4
          },
          label: {
            fontSize: "md"
          }
        },
        lg: {
          control: {
            w: 5,
            h: 5
          },
          label: {
            fontSize: "lg"
          }
        },
        sm: {
          control: {
            width: 3,
            height: 3
          },
          label: {
            fontSize: "sm"
          }
        }
      },
      defaultProps: {
        size: "md",
        colorScheme: "blue"
      }
    },
    Select: {
      parts: ["field", "icon"],
      sizes: {
        lg: {
          field: {
            fontSize: "lg",
            pl: 4,
            paddingRight: 4,
            h: 12,
            borderRadius: "md"
          },
          addon: {
            fontSize: "lg",
            pl: 4,
            paddingRight: 4,
            h: 12,
            borderRadius: "md"
          }
        },
        md: {
          field: {
            fontSize: "md",
            pl: 4,
            paddingRight: 4,
            h: 10,
            borderRadius: "md"
          },
          addon: {
            fontSize: "md",
            pl: 4,
            paddingRight: 4,
            h: 10,
            borderRadius: "md"
          }
        },
        sm: {
          field: {
            fontSize: "sm",
            pl: 3,
            paddingRight: 3,
            h: 8,
            borderRadius: "sm"
          },
          addon: {
            fontSize: "sm",
            pl: 3,
            paddingRight: 3,
            h: 8,
            borderRadius: "sm"
          }
        }
      },
      variants: {
        unstyled: {
          field: {
            bg: "transparent",
            paddingX: 0,
            height: "auto"
          },
          addon: {
            bg: "transparent",
            paddingX: 0,
            height: "auto"
          }
        }
      },
      defaultProps: {
        size: "md",
        variant: "outline"
      }
    },
    Skeleton: {},
    SkipLink: {},
    Slider: {
      parts: ["container", "thumb", "track", "filledTrack"],
      sizes: {},
      defaultProps: {
        size: "md",
        colorScheme: "blue"
      }
    },
    Spinner: {
      sizes: {
        xs: {
          w: "0.75rem",
          h: "0.75rem"
        },
        sm: {
          w: "1rem",
          h: "1rem"
        },
        md: {
          w: "1.5rem",
          h: "1.5rem"
        },
        lg: {
          w: "2rem",
          h: "2rem"
        },
        xl: {
          w: "3rem",
          h: "3rem"
        }
      },
      defaultProps: {
        size: "md"
      }
    },
    Stat: {
      parts: ["label", "number", "icon", "helpText"],
      baseStyle: {
        label: {
          fontWeight: "medium"
        },
        helpText: {
          opacity: 0.8,
          marginBottom: 2
        },
        number: {
          verticalAlign: "baseline",
          fontWeight: "semibold"
        },
        icon: {
          mr: 1,
          w: "14px",
          h: "14px",
          verticalAlign: "middle"
        }
      },
      sizes: {
        md: {
          label: {
            fontSize: "sm"
          },
          helpText: {
            fontSize: "sm"
          },
          number: {
            fontSize: "2xl"
          }
        }
      },
      defaultProps: {
        size: "md"
      }
    },
    Switch: {
      parts: ["track", "thumb"],
      sizes: {
        sm: {
          track: {
            w: "1.375rem",
            h: "0.75rem"
          },
          thumb: {
            w: "0.75rem",
            h: "0.75rem",
            _checked: {
              transform: "translateX(0.625rem)"
            }
          }
        },
        md: {
          track: {
            w: "1.875rem",
            h: "1rem"
          },
          thumb: {
            w: "1rem",
            h: "1rem",
            _checked: {
              transform: "translateX(0.875rem)"
            }
          }
        },
        lg: {
          track: {
            w: "2.875rem",
            h: "1.5rem"
          },
          thumb: {
            w: "1.5rem",
            h: "1.5rem",
            _checked: {
              transform: "translateX(1.375rem)"
            }
          }
        }
      },
      defaultProps: {
        size: "md",
        colorScheme: "blue"
      }
    },
    Tabs: {
      parts: ["tablist", "tab", "tabpanel", "indicator"],
      sizes: {
        sm: {
          tab: {
            py: "0.25rem",
            px: "1rem",
            fontSize: "0.85rem"
          }
        },
        md: {
          tab: {
            fontSize: "1rem",
            py: "0.5rem",
            px: "1rem"
          }
        },
        lg: {
          tab: {
            fontSize: "1.15rem",
            py: "0.75rem",
            px: "1rem"
          }
        }
      },
      variants: {
        unstyled: {}
      },
      defaultProps: {
        size: "md",
        variant: "line",
        colorScheme: "primary"
      }
    },
    Tag: {
      parts: ["container", "label", "closeButton"],
      variants: {},
      baseStyle: {
        container: {
          fontWeight: "medium",
          lineHeight: 1.2,
          outline: 0,
          _focus: {
            boxShadow: "outline"
          }
        },
        label: {
          lineHeight: 1.2
        },
        closeButton: {
          fontSize: "18px",
          w: "1.25rem",
          h: "1.25rem",
          borderRadius: "sm",
          ml: "0.375rem",
          mr: "-1",
          opacity: 0.5,
          _disabled: {
            opacity: 0.4
          },
          _focus: {
            boxShadow: "outline",
            bg: "rgba(0, 0, 0, 0.14)"
          },
          _hover: {
            opacity: 0.8
          },
          _active: {
            opacity: 1
          }
        }
      },
      sizes: {
        sm: {
          container: {
            minH: "1.25rem",
            minW: "1.25rem",
            fontSize: "xs",
            px: 1,
            borderRadius: "sm"
          }
        },
        md: {
          container: {
            minH: "1.5rem",
            minW: "1.5rem",
            fontSize: "sm",
            borderRadius: "md",
            px: 2
          }
        },
        lg: {
          container: {
            minH: 8,
            minW: 8,
            fontSize: "md",
            borderRadius: "md",
            px: 3
          }
        }
      },
      defaultProps: {
        size: "md",
        variant: "subtle",
        colorScheme: "gray"
      }
    },
    Textarea: {
      baseStyle: {
        width: "100%",
        outline: 0,
        position: "relative",
        appearance: "none",
        transition: "all 0.2s",
        paddingY: "8px",
        minHeight: "80px",
        lineHeight: "short"
      },
      sizes: {
        sm: {
          fontSize: "sm",
          pl: 3,
          paddingRight: 3,
          h: 8,
          borderRadius: "sm"
        },
        md: {
          fontSize: "md",
          pl: 4,
          paddingRight: 4,
          h: 10,
          borderRadius: "md"
        },
        lg: {
          fontSize: "lg",
          pl: 4,
          paddingRight: 4,
          h: 12,
          borderRadius: "md"
        }
      },
      variants: {
        unstyled: {
          bg: "transparent",
          paddingX: 0,
          height: "auto"
        }
      },
      defaultProps: {
        size: "md",
        variant: "outline"
      }
    },
    Tooltip: {}
  }
})
