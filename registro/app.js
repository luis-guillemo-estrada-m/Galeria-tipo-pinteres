function registro(form){
    if (form.u.value=="") {
        if (form.c.value=="") {
            location.href='../gallery/index.html';
        } else {
            alert("Contraseña Incorrecta");
        }
        
    } else {
        alert("Usuario No Registrado")
    }
}