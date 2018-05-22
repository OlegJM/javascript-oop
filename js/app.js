export default class App {
    constructor({ canvas }) {
        this.canvas = canvas;

        this.context = null;
        this.isDrawing = false;

        this.clearButton = null;
        this.init();
    }

    init() {
        this.context = this.canvas.getContext('2d');

        this.canvas.addEventListener('mousedown', this.handleCanvasMousedown.bind(this));
        this.canvas.addEventListener('mousemove', this.handleCanvasMousemove.bind(this));
        this.canvas.addEventListener('mouseup', this.handleCanvasMouseup.bind(this));
        this.canvas.addEventListener('mouseleave', this.handleCanvasMouseleave.bind(this));

        this.clearButton = document.getElementById('clear-canvas-button');
        this.clearButton.addEventListener('click', this.handleCanvasClear.bind(this));
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
            this.context.strokeStyle = 'black';
            this.context.stroke();
            this.lastEvent = event;
        }
    }

    handleCanvasMouseup(event) {
        this.isDrawing = false;
    }

    handleCanvasMouseleave(event) {
        this.isDrawing = false;
    }

    handleCanvasClear(event) {
        this.context.fillStyle = 'white';
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    handleBrushSizeChange(event) {
        this.context.lineWidth = Number(event.target.value);
    }
}