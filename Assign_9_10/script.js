document.addEventListener("DOMContentLoaded", function () {
  // Get canvas and context
  var canvas = document.getElementById("main");
  var ctx = canvas.getContext("2d");

  // Set default brush color
  var currentColor = "#000000";

  // Set default brush size
  var brushSize = 5;

  // Function to draw on the canvas
  function draw(e) {
    if (!drawing) return;

    ctx.lineWidth = brushSize;
    ctx.lineCap = "round";
    ctx.strokeStyle = currentColor;

    ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
  }

  // Variables for drawing functionality
  var drawing = false;
  canvas.addEventListener("mousedown", function (e) {
    drawing = true;
    draw(e);
  });
  canvas.addEventListener("mouseup", function () {
    drawing = false;
    ctx.beginPath();
  });
  canvas.addEventListener("mousemove", draw);

  // Function to change brush color
  function changeColor(color) {
    currentColor = color;
    ctx.strokeStyle = currentColor;
  }

  // Button event listeners
  document.getElementById("black").addEventListener("click", function () {
    changeColor("#000000");
  });
  document.getElementById("pink").addEventListener("click", function () {
    changeColor("#F50057");
  });
  document.getElementById("blue").addEventListener("click", function () {
    changeColor("#2979FF");
  });
  document.getElementById("yellow").addEventListener("click", function () {
    changeColor("#FFD600");
  });

  // Button to clear the canvas
  document.getElementById("new").addEventListener("click", function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  });

  // Button to toggle eraser mode
  document.getElementById("erase").addEventListener("click", function () {
    changeColor("#ffffff");
  });

  // Slider event listener
  var slider = document.getElementById("slider");
  var brushSizeDisplay = document.getElementById("brushSize");
  slider.addEventListener("input", function () {
    brushSize = this.value;
    brushSizeDisplay.innerText = brushSize;
  });
});
