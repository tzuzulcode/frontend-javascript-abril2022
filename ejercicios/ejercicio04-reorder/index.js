const orderA = document.getElementById("orderA")
const orderZ = document.getElementById("orderZ")
const lista = document.getElementById("lista")
const items = lista.querySelectorAll("li")
const itemsArray = [...items] // Operador spread

let dragging
let draggingIndex
let draggedOver
let draggedOverIndex

itemsArray.forEach((item,index)=>{
    item.draggable = true
    // item.id = "item-"+index
    item.ondrag = ()=>{
        dragging = item
        draggingIndex = index
        console.log(index)
    }
    item.ondragover=(e)=>{
        e.preventDefault()
        draggedOver = e.target
        draggedOverIndex = index
        console.log(index)
    }
    item.ondrop=()=>{
        
        const reordered = [...itemsArray]
        reordered[draggedOverIndex] = dragging
        reordered[draggingIndex] = draggedOver


        for (let item of reordered){
            lista.appendChild(item)
        }

        // Solicionar el problema con el index
    
    }
})

const reorderAtoZ = ()=>{
    const sortedArray = itemsArray.sort(function(itemA,itemB){
        const contentA = itemA.innerText
        const contentB = itemB.innerText

        return contentA<contentB?-1:1
    })


    for (let item of sortedArray){
        lista.appendChild(item)
    }

}
const reorderZtoA = ()=>{
    const sortedArray = itemsArray.sort(function(itemA,itemB){
        const contentA = itemA.innerText
        const contentB = itemB.innerText

        return contentA<contentB?1:-1
    })


    for (let item of sortedArray){
        lista.appendChild(item)
    }

}

orderA.onclick = reorderAtoZ
orderZ.onclick = reorderZtoA