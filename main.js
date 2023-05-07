function encriptar(){
    
    var texto = document.getElementById('texto1').value.toLowerCase();
    
    var cifrado = texto.replace(/e/img,'enter');
    var cifrado = cifrado.replace(/i/img,'imes');
    var cifrado = cifrado.replace(/a/img,'ai');
    var cifrado = cifrado.replace(/o/img,'ober');
    var cifrado = cifrado.replace(/u/img,'ufat');

    document.getElementById('texto2').innerHTML = `${cifrado}`;
    document.getElementById('texto1').value = '';
    
    
}


function desEncriptar(){
    
    var texto = document.getElementById('texto1').value.toLowerCase();
    
    var desCifrado = texto.replace(/enter/img,'e');
    var desCifrado = desCifrado.replace(/imes/img,'i');
    var desCifrado = desCifrado.replace(/ai/img,'a');
    var desCifrado = desCifrado.replace(/ober/img,'o');
    var desCifrado = desCifrado.replace(/ufat/img,'u');

    document.getElementById('texto2').innerHTML = `${desCifrado}`;
    document.getElementById('texto1').value = '';
    
    
}

function copiar(){
    var aCopiar = document.querySelector('#texto2');
    aCopiar.select();
    document.execCommand('copy');

}

function welcom(){
    var nombre = prompt('bienvenido, cual es tu nombre?');
    document.getElementById('user').innerHTML = `Bienvenid@ ${nombre} al encriptador de Erick Sillas, este encriptador solo reconoce minusculas y no acepta simbolos`;
    

}
welcom();

var boton = document.querySelector('#btn');
boton.onclick = encriptar;

var boton2 = document.querySelector('#btn2');
boton2.onclick = desEncriptar;

var copy = document.querySelector('#copiar');
copy.onclick = copiar;




