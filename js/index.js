let bienvenida = document.getElementById("bienvenida")
// let textos = document.getElementsByClassName("texto")
// let textos = document.querySelector(".texto") // Obtiene un solo elemento
let textos = document.querySelectorAll(".texto") //Todos los elementos que coinciden con la propiedad
let misTextos = document.getElementsByName("miTexto")



bienvenida.onclick = function(){
    alert("Has dado click")
}

console.log(textos)


// for (let i = 0; i < textos.length; i++) {
//     const element = textos[i];
//     if(i===2){
//         element.className = element.className + " otraClase"
//     }
//     element.onclick = function(){
//         alert("Has dado click")
//     }
// }

// Esto no funciona si tenemos un HTMLCollection
// textos.forEach(element=>{
//     element.onclick = ()=>{
//         alert("Has dado click")
//     }
// })
textos.forEach(function(element){
    element.onclick = function(){
        alert("Has dado click")
    }
})


console.log(misTextos)


//Obteniendo elementos con querySelector

const parrafos = document.querySelectorAll("p") // obtenemos todos los parrafos
const parrafosTexto = document.querySelectorAll("p.texto") // obtenemos todos los parrafos con la clase texto

const h1Bienvenida = document.querySelector("#bienvenida")

console.log(h1Bienvenida)