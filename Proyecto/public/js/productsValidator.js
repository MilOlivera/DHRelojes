window.onload = function (){

const formulario = document.getElementById('productsValidator');
const inputs = document.querySelectorAll('#productsValidator input');
const expresiones = {
	name: /^[a-zA-ZÀ-ÿ\s0-9]{2,100}$/, // Letras y espacios, pueden llevar acentos.
	description: /^[a-zA-ZÀ-ÿ\s0-9]{20,140}$/, // Letras y espacios, pueden llevar acentos.
    price: /^[0-9]+(.[0-9]+){0,1000000}$/, //
}

const campos = {
	name: false,
	description: false,
    price: false,
}

const validarFormulario = (e) => {
    switch(e.target.name) {
        case "name":
            validarCampo(expresiones.name, e.target, 'name')
        break;
        case "description":
            validarCampo(expresiones.description, e.target, 'description')
        break;
        case "price":
            validarCampo(expresiones.price, e.target, 'price')
        break;
    }
}

const validarCampo = (expresion, input, campo) => {
    if(expresion.test(input.value)){
        document.getElementById(`grupo-${campo}`).classList.remove("divGrupo-incorrecto")
        document.getElementById(`grupo-${campo}`).classList.add("divGrupo-correcto")
        document.querySelector(`#grupo-${campo} i`).classList.add('fa-circle-check')
        document.querySelector(`#grupo-${campo} i`).classList.remove('fa-times-circle')
        document.querySelector(`#grupo-${campo} .productError`).classList.remove('productError-activo')
        campos[campo] = true;
    }else{
        document.getElementById(`grupo-${campo}`).classList.add("divGrupo-incorrecto")
        document.getElementById(`grupo-${campo}`).classList.remove("divGrupo-correcto")
        document.querySelector(`#grupo-${campo} i`).classList.remove('fa-circle-check')
        document.querySelector(`#grupo-${campo} i`).classList.add('fa-times-circle')
        document.querySelector(`#grupo-${campo} .productError`).classList.add('productError-activo')
        campos[campo] = false;
    }
}

inputs.forEach( (input) => {
    input.addEventListener('keyup', validarFormulario)
    input.addEventListener('blur', validarFormulario)
    })

}