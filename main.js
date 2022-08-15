
    let resultado = document.querySelector("#resultado");
    let nueve = document.querySelector("#nueve");
    let ocho = document.querySelector("#ocho");
    let siete = document.querySelector("#siete");
    let seis = document.querySelector("#seis");
    let cinco = document.querySelector("#cinco");
    let cuatro = document.querySelector("#cuatro");
    let tres = document.querySelector("#tres");
    let dos = document.querySelector("#dos");
    let uno = document.querySelector("#uno");
    let sumar = document.querySelector("#sumar");
    let multiplicar = document.querySelector("#multiplicar");
    let dividir = document.querySelector("#dividir");
    let restar = document.querySelector("#restar");
    let reset = document.querySelector("#reset");
    let igual = document.querySelector("#igual");
    let num1 ;
    let num2 ;
    let operacion;
    let result =0;

    uno.addEventListener("click",(evento)=>{
    resultado.textContent =resultado.textContent + "1"});

    dos.addEventListener("click",(evento)=>{
    resultado.textContent =resultado.textContent + "2"}); 

    tres.addEventListener("click",(evento)=>{
    resultado.textContent =resultado.textContent + "3"}); 

    cuatro.addEventListener("click",(evento)=>{
    resultado.textContent =resultado.textContent + "4"});   

    cinco.addEventListener("click",(evento)=>{
    resultado.textContent =resultado.textContent + "5"});     

    seis.addEventListener("click",(evento)=>{
    resultado.textContent =resultado.textContent + "6"}); 

    siete.addEventListener("click",(evento)=>{
    resultado.textContent =resultado.textContent + "7"}); 

    ocho.addEventListener("click",(evento)=>{
    resultado.textContent =resultado.textContent + "8"}); 

    nueve.addEventListener("click",(evento)=>{
    resultado.textContent =resultado.textContent + "9"}); 

    cero.addEventListener("click",(evento)=>{
    resultado.textContent =resultado.textContent + "0"}); 

    reset.addEventListener("click",(evento)=>{
        resetear();
    }); 


    sumar.addEventListener("click",(evento)=>{
        num1= resultado.textContent;
        operacion = "+";
        limpiar();
    }); 

    restar.addEventListener("click",(evento)=>{
        num1= resultado.textContent;
        operacion = "-";
        limpiar();
    }); 

    dividir.addEventListener("click",(evento)=>{
        num1= resultado.textContent;
        operacion = "/";
        limpiar();
    }); 

    multiplicar.addEventListener("click",(evento)=>{
        num1= resultado.textContent;
        operacion = "*";
        limpiar();
    }); 

    igual.addEventListener("click",(evento)=>{
        num2= resultado.textContent;
        resolver();
    }); 

    function limpiar(){
    resultado.textContent = "";}; 

    function resetear(){
    resultado.textContent = "";
    num1= 0;
    num2= 0;
    operacion= "";
}; 

function resolver() {
switch (operacion) {
    case "+":
        result= parseFloat(num1)+ parseFloat(num2)
        break;
        case "-":
        result= parseFloat(num1)- parseFloat(num2)
        break;
        case "*":
        result= parseFloat(num1)* parseFloat(num2)
        break;
        case "/":
        result= parseFloat(num1)/ parseFloat(num2)
        break;
    default:
        break;
}
resetear();
resultado.textContent= result;
}
