let url = "https://rickandmortyapi.com/api/character"
const charactersContainer = document.getElementById("characters")

const articles = document.getElementsByTagName("article")

const obverserCallback = (entries)=>{
    for(entry of entries){
        if(entry.isIntersecting && entry.intersectionRatio===1){
            fetchData()
            lastElementObserver.unobserve(entry.target)
        }
    }
}

const lastElementObserver = new IntersectionObserver(obverserCallback,{
    threshold: 1
})


const createElements = (character)=>{
    const article = document.createElement("article")
    const p = document.createElement("p")
    const img = document.createElement("img")

    p.innerText = character.name
    img.src = character.image

    article.appendChild(p)
    article.appendChild(img)
    
    return article
}

const renderCharacters = (characters)=>{
    characters.forEach(character=>{
        const element = createElements(character)

        charactersContainer.appendChild(element)
    })
}

const fetchData = async ()=>{
    try {
        const response = await fetch(url)
        const data = await response.json()
        url = data.info.next
        // characters = [...characters,...data.results]
        // characters = characters.concat()
        renderCharacters(data.results)
        const lastArticle = articles[articles.length-1]
        lastElementObserver.observe(lastArticle)
    } catch (error) {
        console.log(error)
    }
}


fetchData()



