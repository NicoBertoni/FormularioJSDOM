function validarFormulario() {
    let correoInput = document.getElementById("correo");
    let errorCorreo = document.getElementById("errorCorreo");
    let contraInput = document.getElementById("password");
    let errorContra = document.getElementById("errorPass");
    let confirmarInput = document.getElementById("confirmar");
    let errorConfirmar = document.getElementById("errorConfirmar");
    let erroresContainer = document.getElementById("errorContainer");
    let form = document.getElementById("f_registro");
    let contenido=document.getElementById('contenido')
  
    errorCorreo.innerHTML = "";
    errorContra.innerHTML = "";
    errorConfirmar.innerHTML = "";
    erroresContainer.innerHTML = "";
    correoInput.classList.remove("error");
    contraInput.classList.remove("error");
    confirmarInput.classList.remove("error");
  
    let errores = [];
    let aux = false;
  
    let correo = correoInput.value;
    if (!validarCorreo(correo)) {
      errores.push("Ingrese un correo electrónico válido");
      correoInput.classList.add("error");
      aux=true;
    }
  
    let contra = contraInput.value;
    if (!validarContrasena(contra)) {
      errores.push("La contraseña debe tener al menos 8 caracteres");
      contraInput.classList.add("error");
      aux=true;
    }
  
    let confirmar = confirmarInput.value;
    if (!validarConfirmacion(contra, confirmar)) {
      errores.push("Las contraseñas no coinciden");
      confirmarInput.classList.add("error");
      aux=true;
    }
  
    if (errores.length > 0) {
      for (let i = 0; i < errores.length; i++) {
        let errorItem = document.createElement("li");
        errorItem.innerText = errores[i];
        erroresContainer.appendChild(errorItem);
      }
      return false;
    }
  
    

    if(!aux){
      form.classList.add("todoOk")
      errorCorreo.innerHTML = "";
      errorContra.innerHTML = "";
      errorConfirmar.innerHTML = "";
      erroresContainer.innerHTML = "";
      correoInput.classList.remove("error");
      contraInput.classList.remove("error");
      confirmarInput.classList.remove("error");
      let usuario=correoInput.value;
      form.reset();
      form.classList.add("todoOk")
      let aviso= document.createElement('div')
      aviso.classList.add('aviso')
      let texto= document.createElement('h1')
      texto.innerHTML="Cuenta creada con exito"
      let cuenta= document.createElement('h3')
      cuenta.innerHTML=usuario
      let retorno= document.createElement('button')
      retorno.textContent="Volver a crear"
      aviso.appendChild(texto)
      aviso.appendChild(cuenta)
      aviso.appendChild(retorno)
      contenido.appendChild(aviso)
      retorno.addEventListener('click',()=>{
        aviso.classList.add('todoOk')
        form.classList.remove('todoOk')
        
        correoInput.focus()
       
      })
      
    }


    return false;
  }
  
  function validarCorreo(correo) {
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(correo);
  }
  
  function validarContrasena(contra) {
    return contra.length >= 8;
  }
  
  function validarConfirmacion(contra, confirmar) {
    return contra === confirmar;
  }
  