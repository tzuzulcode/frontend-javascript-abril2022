const main = document.getElementById("app")


fetch("https://rickandmortyapi.com/api/character") //Lanza un evento para iniciar la peticion
.then((result)=>{ // Lanza el evento de completado
    return result.json() // Conversion del readableStream a json. También es asíncrono
})
.then((data)=>{ // Lanza un evento de conversion_completada
    console.log(data)
})
.catch((error)=>{ // Lanza el evento de error
    console.log(error)
})