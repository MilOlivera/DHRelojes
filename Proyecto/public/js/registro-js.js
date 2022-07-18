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
    } else {
      eName.innerHTML = "";
    }
    if (lastName.value === "") {
      e.preventDefault();
      eLastName.innerHTML = "Debes completar el campo con tu apellido";
    } else {
      eLastName.innerHTML = "";
    }
    if (mail.value === "") {
      e.preventDefault();
      eMail.innerHTML = "Debes completar el campo con tu mail";
    } else {
      eMail.innerHTML = "";
    }
    if (dni.value === "") {
      e.preventDefault();
      eDni.innerHTML = "Debes completar el campo con tu dni";
    } else {
      eDni.innerHTML = "";
    }
    if (address.value === "") {
      e.preventDefault();
      eAddress.innerHTML = "Debes completar el campo con direccón";
    } else {
      eAddress.innerHTML = "";
    }
    if (password.value === "") {
      e.preventDefault();
      ePassword.innerHTML = "Debes completar el campo con una password";
    } else {
      ePassword.innerHTML = "";
    }
  });
};
