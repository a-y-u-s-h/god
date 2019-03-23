class Pixi {
  constructor (id, options) {
    this.id                 = id;
    document.body.innerHTML += `<div class="canvas" id="${id}">`;
    this.container           = document.getElementById(this.id);
    this.width               = this.container.offsetWidth;
    this.height              = this.container.offsetHeight;
    this.options             = {
      width            : this.width,
      height           : this.height,
      antialias        : true,
      transparent      : false,
      resolution       : 1,
      backgroundColor  : 0x009B89
    };
    this.init();
  }

  init () {
    this.app = new PIXI.Application(this.options);
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

  draggable (element) {
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
      }
    }

    element
      .on('pointerdown',      onDragStart)
      .on('pointerup',        onDragEnd) 
      .on('pointerupoutside', onDragEnd)
      .on('pointermove',      onDragMove);
  }
};