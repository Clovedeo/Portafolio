$(document).ready(function(){
    pantalla()
})

window.addEventListener('resize', pantalla);

function pantalla(){
    let ancho = document.documentElement.clientWidth;
    console.log("ANCHO: "+ ancho)
    let circulos = document.querySelectorAll('circle');
    // console.log(circulos)
    if(ancho > 975){
        circulos.forEach((circulo) =>{
            circulo.setAttribute('cx', '80');
            circulo.setAttribute('cy', '80');
            circulo.setAttribute('r', '70');
        });
    } else if(ancho <= 975 && ancho > 750){
        circulos.forEach((circulo) =>{
            circulo.setAttribute('cx', '70');
            circulo.setAttribute('cy', '70');
            circulo.setAttribute('r', '60');
        });
    } else if(ancho <= 750 && ancho > 546){
        circulos.forEach((circulo) =>{
            circulo.setAttribute('cx', '64');
            circulo.setAttribute('cy', '64');
            circulo.setAttribute('r', '45');
        });
    } else if(ancho <= 546 && ancho > 422) {
        circulos.forEach((circulo) =>{
            circulo.setAttribute('cx', '49');
            circulo.setAttribute('cy', '49');
            circulo.setAttribute('r', '36');
        });
    } else if(ancho <= 422){
        circulos.forEach((circulo) =>{
            circulo.setAttribute('cx', '39');
            circulo.setAttribute('cy', '39');
            circulo.setAttribute('r', '26');
        });
    }
}
