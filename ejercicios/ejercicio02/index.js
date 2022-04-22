const dropzone = document.getElementById("dropzone")
const texto = document.getElementById("texto")

dropzone.ondragover = (event)=>{
    event.preventDefault()
    dropzone.classList.add("over")
}

dropzone.ondragleave=()=>{
    dropzone.classList.remove("over")
}

dropzone.ondrop = ()=>{
    dropzone.classList.add("dropped")

    setTimeout(()=>{
        dropzone.classList.remove("dropped")
    },1000)
}


texto.ontouchmove = (event)=>{
    console.log(event)
    alert("Hola")
}