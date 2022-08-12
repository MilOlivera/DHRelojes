window.onload = function (){

const formulario = document.getElementById('formValidacion');
const inputs = document.querySelectorAll('#formValidacion input');
const expresiones = {
	name: /^[a-zA-ZÀ-ÿ\s]{2,100}$/, // Letras y espacios, pueden llevar acentos.
	lastName: /^[a-zA-ZÀ-ÿ\s]{2,100}$/, // Letras y espacios, pueden llevar acentos.
	mail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	dni: /^\d{7,8}$/, //
    address: /^[a-zA-ZÀ-ÿ\s]+\s[0-9]{1,100}$/, // Letras y espacios, pueden llevar acentos.
	password: /^(?=.*[a-z0-9])(?=.*[A-Z0-9])(?=.*\d)([A-Za-z\d$@$!%*?&0-9]|[^ ]){8,40}$/
	// ^[a-zA-Z0-9_.+-/]{8,100}$
}

const campos = {
	name: false,
	lastName: false,
	mail: false,
	dni: false,
	address: false,
	password: false
}

const validarFormulario = (e) => {
    switch(e.target.name) {
        case "name":
            validarCampo(expresiones.name, e.target, 'name')
        break;
        case "lastName":
            validarCampo(expresiones.lastName, e.target, 'lastName')
        break;
        case "mail":
            validarCampo(expresiones.mail, e.target, 'mail')
        break;
        case "dni":
            validarCampo(expresiones.dni, e.target, 'dni')
        break;
        case "address":
            validarCampo(expresiones.address, e.target, 'address')
        break;
        case "password":
            validarCampo(expresiones.password, e.target, 'password')
            validarPassword2()
        break;
        case "password2":
            validarPassword2()
        break;
    }
}

let validarcheck;
const validarCampo = (expresion, input, campo) => {
    if(expresion.test(input.value)){
        document.getElementById(`grupo-${campo}`).classList.remove("divGrupo-incorrecto")
        document.getElementById(`grupo-${campo}`).classList.add("divGrupo-correcto")
        document.querySelector(`#grupo-${campo} i`).classList.add('fa-circle-check')
        document.querySelector(`#grupo-${campo} i`).classList.remove('fa-times-circle')
        document.querySelector(`#grupo-${campo} .formError`).classList.remove('formError-activo')
        campos[campo] = true;
        validarcheck = true;
    }else{
        document.getElementById(`grupo-${campo}`).classList.add("divGrupo-incorrecto")
        document.getElementById(`grupo-${campo}`).classList.remove("divGrupo-correcto")
        document.querySelector(`#grupo-${campo} i`).classList.remove('fa-circle-check')
        document.querySelector(`#grupo-${campo} i`).classList.add('fa-times-circle')
        document.querySelector(`#grupo-${campo} .formError`).classList.add('formError-activo')
        campos[campo] = false;
        validarcheck = false;
    }
}

let validarcheck2;
const validarPassword2 = () => {
    const inputPassword1 = document.getElementById('password')
    const inputPassword2 = document.getElementById('password2')


    if(inputPassword1.value !== inputPassword2.value){
        document.getElementById('grupo-password2').classList.add("divGrupo-incorrecto")
        document.getElementById('grupo-password2').classList.remove("divGrupo-correcto")
        document.querySelector('#grupo-password2 i').classList.remove('fa-circle-check')
        document.querySelector('#grupo-password2 i').classList.add('fa-times-circle')
        document.querySelector('#grupo-password2 .formError').classList.add('formError-activo')
        campos[password] = false;
        validarcheck2 = false;
    }else{
        document.getElementById('grupo-password2').classList.remove("divGrupo-incorrecto")
        document.getElementById('grupo-password2').classList.add("divGrupo-correcto")
        document.querySelector('#grupo-password2 i').classList.add('fa-circle-check')
        document.querySelector('#grupo-password2 i').classList.remove('fa-times-circle')
        document.querySelector('#grupo-password2 .formError').classList.remove('formError-activo')
        campos[password] = true;
        validarcheck2 = true;
    }
}

inputs.forEach( (input) => {
    input.addEventListener('keyup', validarFormulario)
    input.addEventListener('blur', validarFormulario)
    })


formulario.addEventListener('submit', function(e) {
    if(!validarcheck || !validarcheck2) {
    e.preventDefault();
    }
})

}