let documentHeight = document.documentElement.offsetHeight
let viewportHeight = window.innerHeight

let goUpBtn = document.getElementById("goUpBtn")
let lastCard = document.getElementById("last")

console.log(documentHeight)
console.log(viewportHeight)

if(window.IntersectionObserver){
    alert("Intersection observer available")
}

// scrollTo()
// scrollTo(x,y)


// setTimeout(()=>{
//     scrollTo(0,documentHeight-viewportHeight)
// },10)

let cardsNumber = documentHeight/viewportHeight
let card = 1

const interval = setInterval(()=>{
    scrollBy({
        left:0,
        top:viewportHeight,
        behavior:"smooth"
    })
    card++
    if(card>=cardsNumber){
        clearInterval(interval)
    }
},2000)

goUpBtn.onclick = ()=>{
    scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
    })
}

function onIntersection(changes){
    console.log(changes)
    for(let change of changes){
        if(change.isIntersecting){
            goUpBtn.style.display = "block"
        }else{
            goUpBtn.style.display = "none"
        }
    }
}

const observer = new IntersectionObserver(onIntersection,{
    // root, //ELemento usado como viewport
    // rootMargin,
    threshold:[0.5,1],
    // trackVisibility,
    // delay
})

observer.observe(lastCard)


// Lazy loading de imagenes
// Controlar contenido de algo
// Infinite scrolling