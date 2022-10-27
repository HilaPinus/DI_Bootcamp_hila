
const box = document.getElementById("box");
box.setAttribute("draggable","true");
box.addEventListener("dragstart", startDragging);

function startDragging(event){
    event.dataTransfer.setData("text/plain", event.target.id);
}
// 
function modifyDropZones () {
    const targetBox = document.getElementById("target");
    targetBox.addEventListener("dragover", draggingOver);
    targetBox.addEventListener("drop", dropOnTarget);
    }

modifyDropZones()

function draggingOver(event){
    event.preventDefault();
}

function dropOnTarget(event){
    event.preventDefault();
    const dataId = event.dataTransfer.getData("text/plain"); //id of the box
    const getBox = document.getElementById(dataId);
    event.target.appendChild(getBox)
}

