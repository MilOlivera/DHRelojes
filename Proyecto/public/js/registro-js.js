window.onload = function () {
  let name = document.getElementById("name");
  let eName = document.getElementById("errores-name");
  let lastName = document.getElementById("lastName");
  let eLastName = document.getElementById("errores-lastName");
  let mail = document.getElementById("mail");
  let eMail = document.getElementById("errores-mail");
  let dni = document.getElementById("dni");
  let eDni = document.getElementById("errores-dni");
  let address = document.getElementById("address");
  let eAddress = document.getElementById("errores-address");
  let password = document.getElementById("password");
  let ePassword = document.getElementById("errores-password");
  let boton = document.getElementById("boton");

  boton.addEventListener("click", function (e) {
    if (name.value === "") {
      e.preventDefault();
      eName.innerHTML = "Debes completar el campo con tu nombre";
      eName.classList.add('text-danger1');
      name.classList.replace('inputBusqueda-register', 'register-error');
    } else {
      eName.innerHTML = "";
      eName.classList.remove('text-danger1');
      name.classList.replace('register-error', 'inputBusqueda-register')
    }

    if (lastName.value === "") {
      e.preventDefault();
      eLastName.innerHTML = "Debes completar el campo con tu apellido";
      eLastName.classList.add('text-danger1');
      lastName.classList.replace('inputBusqueda-register', 'register-error');
    } else {
      eLastName.innerHTML = "";
      eLastName.classList.remove('text-danger1');
      lastName.classList.replace('register-error', 'inputBusqueda-register')
    }

    if (mail.value === "") {
      e.preventDefault();
      eMail.innerHTML = "Debes completar el campo con tu mail";
      eMail.classList.add('text-danger1');
      mail.classList.replace('inputBusqueda-register', 'register-error');
    } else {
      eMail.innerHTML = "";
      eMail.classList.remove('text-danger1');
      mail.classList.replace('register-error', 'inputBusqueda-register')
    }

    if (dni.value === "") {
      e.preventDefault();
      eDni.innerHTML = "Debes completar el campo con tu dni";
      eDni.classList.add('text-danger1');
      dni.classList.replace('inputBusqueda-register', 'register-error');
    } else {
      eDni.innerHTML = "";
      eDni.classList.remove('text-danger1');
      dni.classList.replace('register-error', 'inputBusqueda-register')
    }

    if (address.value === "") {
      e.preventDefault();
      eAddress.innerHTML = "Debes completar el campo con direccón";
      eAddress.classList.add('text-danger1');
      address.classList.replace('inputBusqueda-register', 'register-error');
    } else {
      eAddress.innerHTML = "";
      eAddress.classList.remove('text-danger1');
      address.classList.replace('register-error', 'inputBusqueda-register')
    }

    if (password.value === "") {
      e.preventDefault();
      ePassword.innerHTML = "Debes completar el campo con una password";
      ePassword.classList.add('text-danger1');
      password.classList.replace('inputBusqueda-register', 'register-error');
    } else {
      ePassword.innerHTML = "";
      ePassword.classList.remove('text-danger1');
      password.classList.replace('register-error', 'inputBusqueda-register')
    }
  });
};
