
function guardar(){
    let cedula= document.getElementById('cedula').innerText;
    let nombre= document.getElementById('nombre').innerText;
    let apellido= document.getElementById('apellido').innerText;

    document.getElementById('textoJS').innerText= cedula;
    document.getElementById('textoJS').innerText= nombre;
    document.getElementById('textoJS').innerText= apellido;

}

function Json(){


}

JSON.stringify(objeto);

const objeto = JSON.parse(texto);