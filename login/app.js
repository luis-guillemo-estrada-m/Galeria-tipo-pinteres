// login part

function login(form){
    if (form.u.value=="memo") {
        if (form.c.value=="123") {
            location.href='../gallery/index.html';
        } else {
            alert("Contraseña Incorrecta");
        }
        
    } else {
        alert("Usuario No Registrado")
    }
}