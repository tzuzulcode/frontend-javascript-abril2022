const main = document.getElementById("app")
const button = document.getElementById("button")

function renderCharacters(characters){
    main.innerHTML = ""
    for(let i = 0 ; i<characters.length ; i++){
        const article = document.createElement("article")
        const p = document.createElement("p")
        const img = document.createElement("img")

        p.innerText = characters[i].name
        img.src = characters[i].image

        article.appendChild(p)
        article.appendChild(img)

        main.appendChild(article)
    }
}

// fetch("https://rickandmortyapi.com/api/choracter") //Lanza un evento para iniciar la peticion
// .then((result)=>{ // Lanza el evento de completado
//     return result.json() // Conversion del readableStream a json. También es asíncrono
// })
// .then((data)=>{ // Lanza un evento de conversion_completada
//     if(data.error){
//         throw data.error
//     }
//     renderCharacters(data.results)
// })
// .catch((error)=>{ // Lanza el evento de error
//     console.log(error)
// })


// async/await
// 1. Tener una funcion con el modificador async
// 2. Tener instrucciones asíncronas y gestionarlas con await
// 3. Obtener el resultado

async function getData(){
    try{
        const result = await fetch("https://rickandmortyapi.com/api/character")
        const data = await result.json()

        if(data.error){
            throw data.error
        }
        renderCharacters(data.results)
    }catch(error){
        console.log(error)
    }
}


// getData()


button.onclick = getData