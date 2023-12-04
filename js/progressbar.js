let numberJS = document.getElementById('numberJS');
let counterJS = 0;
setInterval(() =>{
    if(counterJS == 65){
        clearInterval();
    } else {
        counterJS += 1;
        numberJS.innerHTML = counterJS + "%\nJavaScript";
    }
}, 25);

let numberJava = document.getElementById('numberJava');
let counterJava = 0;
setInterval(() =>{
    if(counterJava == 25){
        clearInterval();
    } else {
        counterJava += 1;
        numberJava.innerHTML = counterJava + "%\nJava";
    }
}, 105);

let numberCS = document.getElementById('numberCS');
let counterCS = 0;
setInterval(() =>{
    if(counterCS == 70){
        clearInterval();
    } else {
        counterCS += 1;
        numberCS.innerHTML = counterCS + "%\nC Sharp";
    }
}, 17);

let numberKotlin = document.getElementById('numberKotlin');
let counterKotlin = 0;
setInterval(() =>{
    if(counterJava == 25){
        clearInterval();
    } else {
        counterKotlin += 1;
        numberKotlin.innerHTML = counterKotlin + "%\nKotlin";
    }
}, 85);