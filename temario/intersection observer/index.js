let documentHeight = document.documentElement.offsetHeight
let viewportHeight = window.innerHeight

let scrollButton = document.getElementById("scroll")

console.log(documentHeight)
console.log(viewportHeight)

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
    if(card===cardsNumber){
        clearInterval(interval)
    }
},2000)