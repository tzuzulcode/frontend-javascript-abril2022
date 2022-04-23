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
    texto.style.visibility="visible"

    setTimeout(()=>{
        dropzone.classList.remove("dropped")
    },1000)
}

dropzone2.ondragover = (event)=>{
    event.preventDefault()
}

dropzone2.ondrop = (event)=>{
    dropzone2.appendChild(element)
    texto.style.visibility=true
}

texto.ondragstart = (event)=>{
    console.log()
    element = texto
    texto.style.visibility = false
}

// texto.ondrag = (event)=>{
//     event.preventDefault()
    
//     texto.style.position = "absolute"
//     texto.style.left = event.pageX+'px'
//     texto.style.top = event.pageY+'px'
// }

// texto.ondragend = (event)=>{
//     texto.style.visibility="visible"
// }

texto.ontouchmove = (event)=>{
    let touchLocation = event.targetTouches[0]

    texto.style.position = "absolute"
    texto.style.left = touchLocation.pageX+'px'
    texto.style.top = touchLocation.pageY+'px'

}

texto.ontouchend = (event)=>{

}