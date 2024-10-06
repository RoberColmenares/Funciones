const amarillo = document.getElementById('Amarillo');
const azul = document.getElementById('Azul');
const rojo = document.getElementById('Rojo')
const verde = document.getElementById('Verde')



function cambiarColor() {

    amarillo.addEventListener('click', function(event) {
        event.target.style.backgroundColor = 'black';
    });
    
    azul.addEventListener('click', function(event) {
        event.target.style.backgroundColor = 'black';
    });
    
    rojo.addEventListener('click', function(event) {
        event.target.style.backgroundColor = 'black';
    });
    
    verde.addEventListener('click', function(event) {
        event.target.style.backgroundColor = 'black';
    });
}


cambiarColor();


const cubo = document.getElementById('cubo')

function cambioPorLetra (){


    addEventListener('keydown', function (event){
        if (event.key === 'a'){
            cubo.style.backgroundColor = 'pink';
        }
    });


    addEventListener('keydown', function (event){
        if (event.key === 's'){
            cubo.style.backgroundColor = 'orange';
        }
    });


    addEventListener('keydown', function (event){
        if (event.key === 'd'){
            cubo.style.backgroundColor = 'skyblue';
        }
    });
}

cambioPorLetra();