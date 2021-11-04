"strict mode";
function AddToCalculator(value){
    document.getElementById("display").value += value;
}
function ResetFunc(){
    document.getElementById("display").value = "";
}
function Initialize(){
    document.getElementById("display").value = (document.getElementById("display").value).replaceAll("^" , "**");
    document.getElementById("display").value = (document.getElementById("display").value).replaceAll("÷" , "/");
    document.getElementById("display").value = (document.getElementById("display").value).replaceAll("×" , "*");
    document.getElementById("display").value = eval(document.getElementById("display").value);
}
function MathFunc(MathType){
    document.getElementById("display").value = Math[MathType](document.getElementById("display").value);
}