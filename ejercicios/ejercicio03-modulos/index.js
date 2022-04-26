const dropzones = [1,2,3,4,5]
const elements = [1,2,3,4,5]
const container = document.getElementById("app")


dropzones.forEach(id=>{
    const div = document.createElement("div")
    div.className = "dropzone"
    container.appendChild(div)
})

elements.forEach(id=>{
    const firstDiv = container.firstChild
    const p = document.createElement("p")
    p.innerText = id
    p.className = "element"
    firstDiv.appendChild(p)
})

// for(let i = 0;i<dropzones.length;i++){
//     let dropzone = dropzones[i]
// }

// hacer funcional los dropzones y elementos de forma dinámica