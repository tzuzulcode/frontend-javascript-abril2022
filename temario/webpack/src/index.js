import {saludar} from "./saludar"
// import lib from "../static/css/lib.css"
import index from "./static/sass/index.scss"

const nombre = "Juanito"
console.log(`Hola, mi nombre es: ${nombre}`)

saludar()

// Lazy loading
if(document.getElementById("scene")){
    import("three").then((Three)=>{
        const scene = new Three.Scene()

    })
}