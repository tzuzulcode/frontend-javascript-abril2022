import { addDragEventsToElement,addDragEventsToDropzone } from "./dragAndDrop.js"

function createDropzones(dropzones,container){
    dropzones.forEach(id=>{
        const div = document.createElement("div")
        div.className = "dropzone"
        container.appendChild(div)

        addDragEventsToDropzone(div)
    })


    // for(let i = 0;i<dropzones.length;i++){
    //     let dropzone = dropzones[i]
    // }
}


function createElements(elements,container){
    elements.forEach(id=>{
        const firstDiv = container.firstChild
        const p = document.createElement("p")
        p.innerText = id
        p.className = "element"
        p.id = "element-"+id
        firstDiv.appendChild(p)

        addDragEventsToElement(p)
    })
}

export {createDropzones,createElements}