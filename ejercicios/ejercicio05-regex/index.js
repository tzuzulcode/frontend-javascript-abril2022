const formulario = document.getElementById("formulario")

const urlValidation = document.getElementById("url_validation")

formulario.onsubmit = (event)=>{
    event.preventDefault()
    console.log(event.target.url)
    
    const input = event.target.url

    const url = input.value

    const urlRegEx = /https?:\/\/[\w]*\.[\w]*[\.|\/]?[\w]*[\.|\/]?[\w|\/-]*/

    if(urlRegEx.test(url)){
        urlValidation.innerText="La url es valida 😀"
    }else{
        urlValidation.innerText="La url no es valida 🥲"
    }

    // Reto: Crear una regex para validar el email
    // Reto: Implementar la regex en el formulario con JS

}