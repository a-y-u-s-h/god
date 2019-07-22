class Pixi {
  constructor (id, options) {
    this.id                  = id;
    document.body.innerHTML += `<div class="canvas" id="${id}">`;
    this.container           = document.getElementById(this.id);
    this.width               = this.container.offsetWidth;
    this.height              = this.container.offsetHeight;
    this.options             = {
      app: {
        width            : this.width,
        height           : this.height,
        antialias        : true,
        transparent      : false,
        resolution       : 1,
        backgroundColor  : 0x009B89
      },
      text: {
        heading: {      
          fontFamily       : 'Roboto',
          fontSize         : 30,
          fontStyle        : 'normal',
          fontWeight       : 'bold',
          fill             : ['#FFFFFF'],
          stroke           : '#000000',
          strokeThickness  : 7,
          dropShadow       : false,
          wordWrap         : true,
          wordWrapWidth    : 900
        },
        paragraph: {      
          fontFamily       : 'Roboto',
          fontSize         : 15,
          fontStyle        : 'normal',
          fontWeight       : 'normal',
          fill             : ['#000000'],
          stroke           : '#000000',
          strokeThickness  : 0,
          dropShadow       : false,
          wordWrap         : true,
          wordWrapWidth    : 900
        }
      }
    };
    this.init();
  }

  init () {
    this.app = new PIXI.Application(this.options.app);
    this.container.appendChild(this.app.view);
    this.setup();
  }

  setup () {}
  draw (dt = 0) {}

  run () {
    this.setup();
    this.app.ticker.add(this.draw);
  }

  add (element) {
    this.app.stage.addChild(element);
  }

  drag (element, f = () => {}) {
    element.interactive = true;
    element.buttonMode  = true;
    
    function onDragStart (e) {
      this.data     = e.data;
      this.dragging = true;
    };

    function onDragEnd () {
      this.dragging = false;
      this.data     = null;
    };

    function onDragMove () {
      if (this.dragging) {
        let position = this.data.getLocalPosition(this.parent);
        this.x = position.x;
        this.y = position.y;
        f()
      }
    }

    element
      .on('pointerdown',      onDragStart)
      .on('pointerup',        onDragEnd) 
      .on('pointerupoutside', onDragEnd)
      .on('pointermove',      onDragMove);
  }

  click (element, f = () => {}) {
    element.interactive = true;
    element.buttonMode  = true;
    element.on('pointerdown', f)    
  }
};