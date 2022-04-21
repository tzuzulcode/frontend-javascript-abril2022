const container = document.querySelector("#container")

for (let i = 0; i < 25; i++) {
    const div = document.createElement("div")
    div.className = "boton"
    container.appendChild(div)

    div.onclick=()=>{
        div.classList.toggle("red")
    }

    // div.onmouseover=()=>{
    //     div.classList.toggle("red")
    // }
}