let colorsSection = document.getElementById("first");
let drawingSection =document.getElementById("second");

function createColorBox () {
    for (let i=0; i<21; i++){
    let boxColor = document.createElement("div");
    boxColor.classList.add("colorBoxes");
    colorsSection.appendChild(boxColor);   
    }
}
createColorBox()

function createDrawingPage () {
    for (let i=0; i<1440; i++){
    let drawBoxes = document.createElement("div");
    drawBoxes.classList.add("drawingBoxes");
    drawingSection.appendChild(drawBoxes);
    }
}
createDrawingPage()

function ColorPalette () {
    const colorArray = ["red", "blue", "black", "yellow", "green", "pink"];
    const colorDivs = document.querySelectorAll(".colorBoxes");
    for (const colorDiv of colorDivs) {
        colorDiv.style.backgroundColor = colorArray[i];
    }
}
ColorPalette ()

