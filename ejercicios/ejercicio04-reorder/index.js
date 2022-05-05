const orderA = document.getElementById("orderA")
const orderZ = document.getElementById("orderZ")
const lista = document.getElementById("lista")
const items = lista.querySelectorAll("li")
const itemsArray = [...items] // Operador spread

let dragging
let draggedOver

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
    }
    item.ondrop=()=>{
        
        let index1 = itemsArray.findIndex((element)=>element==dragging)
        let index2 = itemsArray.findIndex((element)=>element==draggedOver)

        itemsArray[index1] = itemsArray[index2]
        itemsArray[index2] = dragging

        for (let item of itemsArray){
            lista.appendChild(item)
        }
    
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