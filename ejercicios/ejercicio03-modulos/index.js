import { createDropzones, createElements } from "./js/createElements.js"

const dropzones = [1,2,3]
const elements = [1,2,3,4,5,6,7,8]
const container = document.getElementById("app")

createDropzones(dropzones,container)

createElements(elements,container)


// RETO: Investigar como reordenar elementos de html