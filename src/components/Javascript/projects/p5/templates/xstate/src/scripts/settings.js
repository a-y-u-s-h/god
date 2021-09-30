var settings = {
  sketch: {
    parent: { id: `container` },
    background: "#49ABF7",
    dimensions: {
      width: 0,
      height: 0
    }
  },
  application: {
    tool: {
      selection: "rectangle",
      options: ["rectangle", "ellipse", "circle", "line"]
    }
  }
}

var controls = [
  {
    type: "panel",
    content: [
      {
        float: "left",
        fixed: true,
        label: "Prototype Controls"
      }
    ]
  },
  {
    type: "group",
    content: []
  },
  {
    type: "subgroup",
    content: [
      {
        label: "Sketch Controls"
      }
    ]
  },
  {
    type: "color",
    content: [
      settings.sketch,
      "background",
      {
        colorMode: "hex",
        label: "Background Color"
      }
    ]
  }
]

/*
  ======================================
    You don't have to do anything below
    this comment. The code below will
    just take the controls variable and create
    a User Interface out of it, which you can
    style in CSS file.
  ======================================
*/

var UI = new ControlKit()

for (let c of controls) {
  switch (c?.type) {
    case "panel":
      UI = UI.addPanel(...c?.content)
      break
    case "group":
      UI = UI.addGroup(...c?.content)
      break
    case "subgroup":
      UI = UI.addSubGroup(...c?.content)
      break
    case "number":
      UI = UI.addNumberInput(...c?.content)
      break
    case "checkbox":
      UI = UI.addCheckbox(...c?.content)
      break
    case "color":
      UI = UI.addColor(...c?.content)
      break
    case "number input":
      UI = UI.addNumberInput(...c?.content)
      break
    case "number output":
      UI = UI.addNumberOutput(...c?.content)
      break
    case "string input":
      UI = UI.addStringInput(...c?.content)
      break
    case "string output":
      UI = UI.addStringOutput(...c?.content)
      break
    case "slider":
      UI = UI.addSlider(...c?.content)
      break
    case "range":
      UI = UI.addRange(...c?.content)
      break
    case "button":
      UI = UI.addButton(...c?.content)
      break
    case "select":
      UI = UI.addSelect(...c?.content)
      break
    case "pad":
      UI = UI.addPad(...c?.content)
      break
    case "function plotter":
      UI = UI.addFunctionPlotter(...c?.content)
      break
    case "value plotter":
      UI = UI.addValuePlotter(...c?.content)
      break
  }
}
