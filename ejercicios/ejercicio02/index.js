const dropzone = document.getElementById("dropzone")
const dropzone2 = document.getElementById("dropzone2")
const texto = document.getElementById("texto")

let element = null

dropzone.ondragover = (event)=>{
    event.preventDefault()
    dropzone.classList.add("over")
}

dropzone.ondragleave=()=>{
    dropzone.classList.remove("over")
}

dropzone.ondrop = ()=>{
    dropzone.classList.add("dropped")

    dropzone.appendChild(element)
    // texto.style.position = "static"

    setTimeout(()=>{
        dropzone.classList.remove("dropped")
    },1000)
}

dropzone2.ondragover = (event)=>{
    event.preventDefault()
}

dropzone2.ondrop = (event)=>{
    dropzone2.appendChild(element)
    // texto.style.position = "static"
}

texto.ondragstart = (event)=>{
    element = texto
    texto.style.position = "absolute"
}

texto.ondrag = (event)=>{
    texto.style.opacity = 0
    texto.style.left = event.pageX+'px'
    texto.style.top = event.pageY+'px'
    
}

texto.ondragend = (event)=>{
    texto.style.opacity=1
    // texto.style.position = "static"
}

texto.ontouchmove = (event)=>{
    let touchLocation = event.targetTouches[0]

    texto.style.position = "absolute"
    texto.style.left = touchLocation.pageX+'px'
    texto.style.top = touchLocation.pageY+'px'

}