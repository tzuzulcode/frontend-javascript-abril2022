const formulario = document.getElementById("formulario")

const urlValidation = document.getElementById("url_validation")
const emailValidation = document.getElementById("email_validation")

const urlRegEx = /https?:\/\/[\w]*\.[\w]+[\.|\/]?[\w]*[\.|\/]?[\w|\/-]*/
const emailRegEx = new RegExp(/^[\w.]+@[\w]+\.{1}[\w]+(.{1}[\w]+)*$/)

function validation(){
    const url = formulario.url.value

    const email = formulario.email.value

    if(urlRegEx.test(url)){
        urlValidation.innerText="La url es valida 😀"
    }else{
        urlValidation.innerText="La url no es valida 🥲"
    }

    if(emailRegEx.test(email)){
        emailValidation.innerText = "El email es valido 👍"
    }else{
        emailValidation.innerText = "El email no es valido 👎"
    }
}

formulario.email.oninput = validation
formulario.url.oninput = validation

formulario.onsubmit = (event)=>{
    event.preventDefault()
    console.log(event.target.url)
    
    const urlInput = event.target.url

    const url = urlInput.value

    const emailInput = event.target.email

    const email = emailInput.value

    const urlRegEx = /https?:\/\/[\w]*\.[\w]*[\.|\/]?[\w]*[\.|\/]?[\w|\/-]*/
    const emailRegEx = new RegExp(/^[\w.]+@[\w]+\.{1}[\w]+(.{1}[\w]+)*$/)

    console.log(emailRegEx)


    if(urlRegEx.test(url)){
        urlValidation.innerText="La url es valida 😀"
    }else{
        urlValidation.innerText="La url no es valida 🥲"
    }

    if(emailRegEx.test(email)){
        emailValidation.innerText = "El email es valido 👍"
    }else{
        emailValidation.innerText = "El email no es valido 👎"
    }

}