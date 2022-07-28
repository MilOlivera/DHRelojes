// window.onload = function (){
	
const formulario = document.getElementById('formValidacion');
const inputs = document.querySelectorAll('#formValidacion input');
const expresiones = {
	name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	lastName: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	mail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	dni: /^\d{0,8}$/, //
    address: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^[a-zA-Z0-9_.+-/]+$/,

}
console.log("funciona2")
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

const validarCampo = (expresion, input, campo) => {
    if(expresion.test(input.value)){
        document.getElementById(`grupo-${campo}`).classList.remove("divGrupo-incorrecto")
        document.getElementById(`grupo-${campo}`).classList.add("divGrupo-correcto")
        document.querySelector(`#grupo-${campo} i`).classList.add('fa-circle-check')
        document.querySelector(`#grupo-${campo} i`).classList.remove('fa-times-circle')
        document.querySelector(`#grupo-${campo} .formError`).classList.remove('formError-activo')
        campos[campo] = true;
    }else{
        document.getElementById(`grupo-${campo}`).classList.add("divGrupo-incorrecto")
        document.getElementById(`grupo-${campo}`).classList.remove("divGrupo-correcto")
        document.querySelector(`#grupo-${campo} i`).classList.remove('fa-circle-check')
        document.querySelector(`#grupo-${campo} i`).classList.add('fa-times-circle')
        document.querySelector(`#grupo-${campo} .formError`).classList.add('formError-activo')
        campos[campo] = false;
    }
}

// const validarPassword2 = () => {
//     const inputPassword1 = document.getElementById('password')
//     const inputPassword2 = document.getElementById('password2')


//     if(inputPassword1.value !== inputPassword2.value){
//         document.getElementById('grupo-password2').classList.add("divGrupo-incorrecto")
//         document.getElementById('grupo-password2').classList.remove("divGrupo-correcto")
//         document.querySelector('#grupo-password2 i').classList.remove('fa-check')
//         document.querySelector('#grupo-password2 i').classList.add('fa-exclamation')
//         document.querySelector('#grupo-password2 .formError').classList.add('formError-activo')
//         campos[password] = false;
//     }else{
//         document.getElementById('grupo-password2').classList.remove("divGrupo-incorrecto")
//         document.getElementById('grupo-password2').classList.add("divGrupo-correcto")
//         document.querySelector('#grupo-password2 i').classList.add('fa-check')
//         document.querySelector('#grupo-password2 i').classList.remove('fa-exclamation')
//         document.querySelector('#grupo-password2 .formError').classList.remove('formError-activo')
//         campos[password] = true;
//     }
// }

inputs.forEach( (input) => {
    input.addEventListener('keyup', validarFormulario)
    input.addEventListener('blur', validarFormulario)
    })

// formulario.addEventListener('submit', (e) => {
//     e.preventDefault();

//     if(campos.name && campos.lastName && campos.mail && campos.dni && campos.address && campos.password){

        // formulario.reset();
        // document.getElementById('formMensajeExito').classList.add('formMensajeExito-activo')
        // setTimeout(() => {
        // document.getElementById('formMensajeExito').classList.remove('formMensajeExito-activo')

        // }, 100)
//         document.querySelectorAll('divGrupo-correct').forEach((icono) => {
//             icono.classList.remove('divGrupo-correcto')
//         })
//     } else {
//         document.getElementById('formMensajeExito').classList.add('formMensaje-activo')
//     }
        
// })
// }