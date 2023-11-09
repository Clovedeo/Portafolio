$(document).ready(function(){
    $('#lang-kotlin').on('click', function(){
        console.log("kotlin")
        click_kotlin = !click_kotlin
        click_kotlin 
        ? this.setAttribute('src', './img/kotlin-logo-porc.png')
        :
        this.setAttribute('src', './img/kotlin-logo.png')
    })
    
    $('#lang-csharp').on('click', function(){
        console.log("csharp")
        click_sharp = !click_sharp
        click_sharp 
        ? this.setAttribute('src', './img/cdnlogo.com_c-sharp_porc.png')
        :
        this.setAttribute('src', './img/cdnlogo.com_c-sharp.png')
    })
    
    $('#lang-java').on('click', function(){
        console.log("java")
        click_java = !click_java
        click_java 
        ? this.setAttribute('src', './img/java-logo-porc.png')
        :
        this.setAttribute('src', './img/java-logo.png')
    })
    
    $('#lang-js').on('click', function(){
        console.log("js")
        click_js = !click_js
        click_js 
        ? this.setAttribute('src', './img/javascript-logo-porc.png')
        :
        this.setAttribute('src', './img/javascript-logo.png')
    })

    //$('#aprendiendo').on('click', press_aprendiendo)
})

function press_aprendiendo(){
    setTimeout(() => {
        $('#lang-kotlin').addClass('click')
        
        $('#lang-csharp').addClass('click')
        
        $('#lang-java').addClass('click')
        
        $('#lang-js').addClass('click')
    },
    5200);
}

let boton_aprendiendo = document.getElementById('aprendiendo');
let div_aprendiendo = document.getElementById('texto-aprendiendo');
let adio = document.getElementById('adio');

let kotlin = document.getElementById('lang-kotlin');
let sharp = document.getElementById('lang-csharp');
let java = document.getElementById('lang-java');
let js = document.getElementById('lang-js');

let aprendiendo = false;

let click_kotlin = false;
let click_sharp = false;
let click_java = false;
let click_js = false;

boton_aprendiendo.addEventListener('click', ()=>{
    if(aprendiendo){
        div_aprendiendo.classList.remove('abrir-cerrar')
        aprendiendo = false
        div_aprendiendo.style.visibility = 'hidden';
        adio.style.visibility = 'visible'
    } else {
        div_aprendiendo.classList.add('abrir-cerrar');

        kotlin.classList.add('lang');
        sharp.classList.add('lang');
        java.classList.add('lang');
        js.classList.add('lang');

        aprendiendo = true
        div_aprendiendo.style.visibility = 'visible';
        adio.style.visibility = 'hidden'
    }
});
