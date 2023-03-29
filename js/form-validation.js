// Example starter JavaScript for disabling form submissions if there are invalid fields

(function validation() {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')
  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
          document.getElementById('btnformatoPagoMultiple').setAttribute("disabled", ""); //Se agregó el else con esta sentencia para que si el usuario cambia un dato y no es válido, vuelve a desactivar la generación de cédula
        }else{
          document.getElementById('btnformatoPagoMultiple').removeAttribute('disabled'); //Quita el atributo disabled del botón para generar la cédula 0
        }
        form.classList.add('was-validated')
        
      }, false)
    })
})()
