const visor = document.querySelector("#visor");

let numeros_calc = Array.from(document.querySelectorAll("button.num")).reverse();
let clear = document.querySelector("button.clear");
let result = document.querySelector("button.result");

function addInVisor(num){
    visor.value = visor.value + String(num);
}
function clearVisor(){ 
    visor.value = visor.value.slice(0 , visor.value.length-1);
}
function calcular(){
    visor.value = eval(visor.value);
}

numeros_calc.forEach((e,p,a)=>{
    e.addEventListener("click", ()=>{
        addInVisor(e.textContent);
    });
});

clear.addEventListener("click", ()=>{
    clearVisor();
});

result.addEventListener("click", ()=>{
    calcular();
});