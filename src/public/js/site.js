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
                $('#mensajeLabel')[0].innerHTML = 'Si pasó';
            }
        },
        error: function(result){
            alert(result);
        },
        cache: true
    });
}