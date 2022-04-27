// let dragElement

const addDragEventsToElement = (element)=>{

    element.draggable = true
    
    element.ondragstart = (event)=>{
        event.dataTransfer.setData("id",event.target.id)
        // dragElement = event.target
    }

    element.ondrag = ()=>{
        element.style.opacity = 0
    }
    element.ondragend = ()=>{
        element.style.opacity=1
    }
}
const addDragEventsToDropzone = (dropzone)=>{
    dropzone.ondragover = (event)=>{
        event.preventDefault()
    }
    dropzone.ondrop = (event)=>{
        // console.log(event)
        let id = event.dataTransfer.getData("id")
        let element = document.getElementById(id)
        // dropzone.appendChild(dragElement)
        dropzone.appendChild(element)
    }
   
}

export {addDragEventsToElement,addDragEventsToDropzone}