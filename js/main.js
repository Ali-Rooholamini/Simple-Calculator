"use strict";
function AddToCalculator(value){
    if(document.getElementById("display").value === "cannot divide by zero"){
        document.getElementById("display").value = "";
    }
    if(value == "0" && document.getElementById("display").value == "0"){
        document.getElementById("display").value == "0";
    }
    else{
        document.getElementById("display").value += value;
    }
}
function ResetFunc(){
    document.getElementById("display").value = "";
}
function Initialize(){
    if(document.getElementById("display").value == ""){
        document.getElementById("display").value = "";
    }
    else{
        document.getElementById("display").value = (document.getElementById("display").value).replaceAll("^" , "**");
        document.getElementById("display").value = (document.getElementById("display").value).replaceAll("÷" , "/");
        document.getElementById("display").value = (document.getElementById("display").value).replaceAll("×" , "*");
        document.getElementById("display").value = eval(document.getElementById("display").value);
        if(document.getElementById("display").value === "Infinity"){
            document.getElementById("display").value = "cannot divide by zero";
        }
    }
}
function MathFunc(MathType){
    document.getElementById("display").value = Math[MathType](document.getElementById("display").value);
}