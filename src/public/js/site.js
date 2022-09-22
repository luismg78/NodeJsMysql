(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()
  
function iniciarSesion(e){
    e.preventDefault();
    $.ajax({
        url: '/iniciarSesion',
        method:'post',
        dataType: 'json',
        data:{
            CorreoElectronico: $('#CorreoElectronico').val(),
            Password: $('#Password').val(),
        },
        success: function(result){
            if(result.error){
                $('#mensajeLabel')[0].innerHTML = result.mensaje;
            }else{
                window.location.href = "/";
            }
        },
        error: function(result){
            alert(result);
        },
        cache: true
    });
}