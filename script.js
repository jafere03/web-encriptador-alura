
function codificacion(x){
    let input = document.getElementById("input-texarea").value;
    let codificar =  input.replace(/e/img, "enter");
    codificar =  codificar.replace(/i/img, "imes");
    codificar =  codificar.replace(/a/img, "ai");
    codificar =  codificar.replace(/o/img, "ober");
    codificar =  codificar.replace(/u/img, "ufat");
    document.getElementById('resultado').innerHTML = codificar;
    document.querySelector('.contenedor1-resultado').style.display = 'none';
    document.querySelector('.contenedor2-resultado').style.display = 'block';
};
function decodificacion(){
    let input = document.getElementById("input-texarea").value;
    let decodificar =  input.replace(/enter/img, "e");
    decodificar =  decodificar.replace(/imes/img, "i");
    decodificar =  decodificar.replace(/ai/img, "a");
    decodificar =  decodificar.replace(/ober/img, "o");
    decodificar =  decodificar.replace(/ufat/img, "u");
    document.getElementById('resultado').innerHTML = decodificar;
    document.querySelector('.contenedor1-resultado').style.display = 'none';
    document.querySelector('.contenedor2-resultado').style.display = 'block';
};
function copiar(){
    let contenido = document.getElementById('resultado');
    contenido.select();
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
}
document.getElementById("encriptar-id").onclick = codificacion;
document.getElementById("desencriptar-id").onclick = decodificacion;
document.getElementById('copiar-id').onclick = copiar;

