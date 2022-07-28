window.onload = function (){

const formulario = document.getElementById('loginValidator');
const inputs = document.querySelectorAll('#loginValidator input');
const expresiones = {
	mail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,	
	// password: /^(?=.*[a-z0-9])(?=.*[A-Z0-9])(?=.*\d)([A-Za-z\d$@$!%*?&0-9]|[^ ]){8,40}$/
}

const campos = {
	mail: false,
	// password: false
}

const validarFormulario = (e) => {
    switch(e.target.name) {
        case "mail":
            validarCampo(expresiones.mail, e.target, 'mail')
        break;
        // case "password":
        //     validarCampo(expresiones.password, e.target, 'password')
        // break;
    }
}

const validarCampo = (expresion, input, campo) => {
    if(expresion.test(input.value)){
        document.getElementById(`grupo-${campo}`).classList.remove("divGrupo-incorrecto")
        document.getElementById(`grupo-${campo}`).classList.add("divGrupo-correcto")
        document.querySelector(`#grupo-${campo} i`).classList.add('fa-circle-check')
        document.querySelector(`#grupo-${campo} i`).classList.remove('fa-times-circle')
        document.querySelector(`#grupo-${campo} .loginError`).classList.remove('loginError-activo')
        campos[campo] = true;
    }else{
        document.getElementById(`grupo-${campo}`).classList.add("divGrupo-incorrecto")
        document.getElementById(`grupo-${campo}`).classList.remove("divGrupo-correcto")
        document.querySelector(`#grupo-${campo} i`).classList.remove('fa-circle-check')
        document.querySelector(`#grupo-${campo} i`).classList.add('fa-times-circle')
        document.querySelector(`#grupo-${campo} .loginError`).classList.add('loginError-activo')
        campos[campo] = false;
    }
}

inputs.forEach( (input) => {
    input.addEventListener('keyup', validarFormulario)
    input.addEventListener('blur', validarFormulario)
    })

}