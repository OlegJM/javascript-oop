export default class App {
    constructor({ canvas, colorPalette, colorPicker }) {
        this.canvas = canvas;
        this.colorPalette = colorPalette;
        this.colorPicker = colorPicker;

        this.context = null;
        this.isDrawing = false;

        this.newColorButton = null;
        this.clearButton = null;
        this.brushSizeSlider = null;

        this.init();
    }

    init() {
        this.context = this.canvas.getContext('2d');

        this.canvas.addEventListener('mousedown', this.handleCanvasMousedown.bind(this));
        this.canvas.addEventListener('mousemove', this.handleCanvasMousemove.bind(this));
        this.canvas.addEventListener('mouseup', this.handleCanvasMouseup.bind(this));
        this.canvas.addEventListener('mouseleave', this.handleCanvasMouseleave.bind(this));

        this.newColorButton = document.getElementById('new-color-button');
        this.clearButton = document.getElementById('clear-canvas-button');
        this.brushSizeSlider = document.getElementById('brush-size-slider');

        this.newColorButton.addEventListener('click', this.handleOpenColorPicker.bind(this));
        this.clearButton.addEventListener('click', this.handleCanvasClear.bind(this));
        this.brushSizeSlider.addEventListener('input', this.handleBrushSizeChange.bind(this));

        this.colorPicker.handleAddColor = this.colorPalette.addNewColor;
    }

    handleCanvasMousedown(event) {
        this.lastEvent = event;
        this.isDrawing = true;
    }

    handleCanvasMousemove(event) {
        if (this.isDrawing) {
            this.context.beginPath();
            this.context.moveTo(this.lastEvent.offsetX, this.lastEvent.offsetY);
            this.context.lineTo(event.offsetX, event.offsetY);
            this.context.strokeStyle = this.colorPalette.currentColor;
            this.context.stroke();
            this.lastEvent = event;
        }
    }

    handleCanvasMouseup() {
        this.isDrawing = false;
    }

    handleCanvasMouseleave() {
        this.isDrawing = false;
    }

    handleOpenColorPicker() {
        this.colorPicker.open();
    }

    handleCanvasClear() {
        this.context.fillStyle = 'white';
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    handleBrushSizeChange(event) {
        this.context.lineWidth = Number(event.target.value);
    }

    handleChangeStrokeStyle() {
        console.log(this.colorPalette.currentColor);
        //this.strokeStyle = `$`
    }
}