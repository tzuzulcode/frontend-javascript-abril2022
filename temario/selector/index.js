// const selector = document.querySelectorAll("div")
// const selector = document.querySelectorAll(".navbar")
// const selector = document.querySelector("#navbar")
// const selector = document.querySelectorAll('p[name="parrafo"]')
const selector = document.querySelectorAll('*[name="parrafo"]')

// #log span -> los span descendientes del elemento con el id="log"
// #log>span -> los span hijos del elemento con el id="log"
// body>h1:first-child -> El primer h1 hijo del body
// img + p.caption -> parrafo con la clase caption inmediatamente despues de una img
// h2 ~ p -> Cualquier parrafo que venga despues de un h2 y sea hermano de h2


console.log(selector)


const navbar = document.getElementById("navbar")

console.log(navbar)

const firstUl = navbar.children[0].firstElementChild
const lastUl = navbar.children[0].lastElementChild

function iterateListOfElements(element){
    for(let child of element.children){
        console.log(child)
    }
    // for(let index in element.children){
    //     console.log(element.children[index])
    // }

    let child = element.firstElementChild
    while(child!=null){
        console.log(child)
        child = child.nextElementSibling
    }


    // firstElementChild y firstChild
    // nextElementSibling y nextSibling
    // previousElementSibling y previousSibling
}


iterateListOfElements(navbar.children[0])