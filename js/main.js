"use strict";
function AddToCalculator(value){
    if(document.getElementById("display").value === "cannot divide by zero"){
        document.getElementById("display").value = "";
    }
    if(value == "0" && document.getElementById("display").value == "0"){
        document.getElementById("display").value == "0";
    }
    else{
        if((value == "+" || value == "-" || value == "^" || value == "×" || value == "÷") && document.getElementById("display").value == ""){
            document.getElementById("display").value = "";
        }
        else{
            if(value == "+" || value == "-" || value == "^" || value == "×" || value == "÷"){
                var numbers = Object.assign([], document.getElementById("display").value);
                for(let i = 0; i < numbers.length ; i++){
                    var last_index = numbers[i];
                }
                if(last_index == "+" || last_index == "-" || last_index == "^" || last_index == "×" || last_index == "÷"){
                    document.getElementById("display").value += "";
                }
                else{
                    document.getElementById("display").value += value;
                }
            }
            else{
                document.getElementById("display").value += value;
            }
        }
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