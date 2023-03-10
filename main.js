function result(equation){
    //add
    if(equation.includes("+")){
        array = equation.split("+");
        let a = array[0];
        let b = array[1];
        let  resultLen = (Number(a) + Number(b)).toString().length;
        if(resultLen>10){
            return "out of reach";
        }
        
        return Number(a) + Number(b);
    }

    //subtract
    if(equation.includes("-")){
        array = equation.split("-");
        let a = array[0];
        let b = array[1];
        let  resultLen = (Number(a) - Number(b)).toString().length;
        if(resultLen>10){
            return "out of reach";
        }
        return Number(a) - Number(b);
    }

    //multiply
    if(equation.includes("*")){
        array = equation.split("*");
        let a = array[0];
        let b = array[1];
        let  resultLen = (Number(a) * Number(b)).toString().length;
        if(resultLen>10){
            return "out of reach";
        }

        return Number(a) * Number(b);
    }

    //divide
    if(equation.includes("/")){
        array = equation.split("/");
        let a = array[0];
        let b = array[1];
        let  resultLen = (Number(a) / Number(b)).toString().length;
        if(resultLen>10){
            return "out of reach";
        }

        if(array[1]=="0"){
            return "error";
        }

        return Number(a) / Number(b);
    }
}

var numSelected = 0;
var operatorSelected = 0;
var isEvaluable = 0;
var isEvalued = 0;
var decimalSelected = 1; 


var outputScreen = document.querySelector(".row-0");
var zero = document.querySelector("#zero");
var one = document.querySelector("#one");
var two = document.querySelector("#two");
var three = document.querySelector("#three");
var four = document.querySelector("#four");
var five = document.querySelector("#five");
var six = document.querySelector("#six");
var seven = document.querySelector("#seven");
var eight = document.querySelector("#eight");
var nine = document.querySelector("#nine");
var clearButton = document.querySelector("#clear");
var decimalButton = document.querySelector("#decimal");

var add = document.querySelector("#add");
var subtract = document.querySelector("#subtract");
var divide = document.querySelector("#divide");
var equalTo = document.querySelector("#equalto");
var multiply = document.querySelector("#multiply");

zero.addEventListener("click", ()=>{
    //output
    if(isEvalued == 1){
        isEvalued = 0;
        outputScreen.innerHTML = '';
    }
    if(outputScreen.innerHTML.length<12){
        outputScreen.innerHTML+="0";
        console.log(outputScreen.innerHTML.length);
        numSelected +=1;
    }
    if(operatorSelected == 1){
        operatorSelected = 0;
        isEvaluable = 1; 
    }  

    
})

one.addEventListener("click", ()=>{
    //output
    if(isEvalued == 1){
        isEvalued = 0;
        outputScreen.innerHTML = '';
    }
    if(outputScreen.innerHTML.length<12){
        outputScreen.innerHTML+="1";
        console.log(outputScreen.innerHTML.length);
        numSelected +=1;
    }
    if(operatorSelected == 1){
        operatorSelected = 0;
        isEvaluable = 1; 
    }
    
})

two.addEventListener("click", ()=>{
    //output
    if(outputScreen.innerHTML.length<12){
        outputScreen.innerHTML+="2";
        console.log(outputScreen.innerHTML.length);
        numSelected +=1;
    }
    if(operatorSelected == 1){
        operatorSelected = 0;
        isEvaluable = 1; 
    }
    
})

three.addEventListener("click", ()=>{
    //output
    if(isEvalued == 1){
        isEvalued = 0;
        outputScreen.innerHTML = '';
    }
    if(outputScreen.innerHTML.length<12){
        outputScreen.innerHTML+="3";
        console.log(outputScreen.innerHTML.length);
        numSelected +=1;
    }
    if(operatorSelected == 1){
        operatorSelected = 0;
        isEvaluable = 1; 
    }
    
})

four.addEventListener("click", ()=>{
    //output
    if(isEvalued == 1){
        isEvalued = 0;
        outputScreen.innerHTML = '';
    }
    if(outputScreen.innerHTML.length<12){
        outputScreen.innerHTML+="4";
        console.log(outputScreen.innerHTML.length);
        numSelected +=1;
    }
    if(operatorSelected == 1){
        operatorSelected = 0;
        isEvaluable = 1; 
    }
    
})

five.addEventListener("click", ()=>{
    //output
    if(isEvalued == 1){
        isEvalued = 0;
        outputScreen.innerHTML = '';
    }
    if(outputScreen.innerHTML.length<12){
        outputScreen.innerHTML+="5";
        console.log(outputScreen.innerHTML.length);
        numSelected +=1;
    }
    if(operatorSelected == 1){
        operatorSelected = 0;
        isEvaluable = 1; 
    }
    
})

six.addEventListener("click", ()=>{
    //output
    if(isEvalued == 1){
        isEvalued = 0;
        outputScreen.innerHTML = '';
    }
    if(outputScreen.innerHTML.length<12){
        outputScreen.innerHTML+="6";
        console.log(outputScreen.innerHTML.length);
        numSelected +=1;
    }
    if(operatorSelected == 1){
        operatorSelected = 0;
        isEvaluable = 1; 
    }
    
})

seven.addEventListener("click", ()=>{
    //output
    if(isEvalued == 1){
        isEvalued = 0;
        outputScreen.innerHTML = '';
    }
    if(outputScreen.innerHTML.length<12){
        outputScreen.innerHTML+="7";
        console.log(outputScreen.innerHTML.length);
        numSelected +=1;
    }
    if(operatorSelected == 1){
        operatorSelected = 0;
        isEvaluable = 1; 
    }
    
})

eight.addEventListener("click", ()=>{
    //output
    if(isEvalued == 1){
        isEvalued = 0;
        outputScreen.innerHTML = '';
    }
    if(outputScreen.innerHTML.length<12){
        outputScreen.innerHTML+="8";
        console.log(outputScreen.innerHTML.length);
        numSelected +=1;
    }
    if(operatorSelected == 1){
        operatorSelected = 0;
        isEvaluable = 1; 
    }
    
})

nine.addEventListener("click", ()=>{
    //output
    if(isEvalued == 1){
        isEvalued = 0;
        outputScreen.innerHTML = '';
    }

    if(outputScreen.innerHTML.length<12){
        outputScreen.innerHTML+="9";
        console.log(outputScreen.innerHTML.length);
        numSelected +=1;
    }
    if(operatorSelected == 1){
        operatorSelected = 0;
        isEvaluable = 1; 
    }
    
})

decimalButton.addEventListener("click", ()=>{
    //output
    if(decimalSelected == 1){
        decimalSelected = 0;

        if(isEvalued == 1){
            isEvalued = 0;
            outputScreen.innerHTML = '';
        }
    
        if(outputScreen.innerHTML.length<12){
            outputScreen.innerHTML+=".";
            console.log(outputScreen.innerHTML.length);
            numSelected +=1;
        }
        if(operatorSelected == 1){
            operatorSelected = 0;
            isEvaluable = 1; 
        }
    }


    
})

//operators:
add.addEventListener("click", ()=>{
    if(outputScreen.innerHTML.length<12 && numSelected>0 && isEvaluable==0){
        isEvalued = 0;
        operatorSelected = 1;
        numSelected = 0;
        decimalSelected = 1;
        outputScreen.innerHTML+="+";
        console.log(outputScreen.innerHTML.length);
    } 

    if(isEvaluable == 1){
        isEvaluable = 0;
        isEvalued = 0;
        numSelected = 0;
        operatorSelected = 1;

        //output: 
        let calculate  = outputScreen.innerHTML.replace("x", "*");
        console.log(calculate);
        outputScreen.innerHTML= result(calculate) + "+";

    }

    
})

subtract.addEventListener("click", ()=>{
    if(outputScreen.innerHTML.length<12 && numSelected>0 && isEvaluable==0){
        isEvalued = 0;
        operatorSelected = 1;
        numSelected = 0;
        decimalSelected = 1;
        outputScreen.innerHTML+="-";
        console.log(outputScreen.innerHTML.length);
    }

    if(isEvaluable == 1){
        isEvaluable = 0;
        isEvalued = 0;
        numSelected = 0;
        operatorSelected = 1;

        //output: 
        let calculate  = outputScreen.innerHTML.replace("x", "*");
        console.log(calculate);
        outputScreen.innerHTML= result(calculate) + "-";

    }
        
})

divide.addEventListener("click", ()=>{
    if(outputScreen.innerHTML.length<12 && numSelected>0 && isEvaluable==0){
        isEvalued = 0;
        operatorSelected = 1;
        numSelected = 0;
        decimalSelected = 1;
        outputScreen.innerHTML+="/";
        console.log(outputScreen.innerHTML.length);
    }

    if(isEvaluable == 1){
        isEvaluable = 0;
        isEvalued = 0;
        numSelected = 0;
        operatorSelected = 1;

        //output: 
        let calculate  = outputScreen.innerHTML.replace("x", "*");
        console.log(calculate);
        outputScreen.innerHTML= result(calculate) + "/";

    }
        
})

multiply.addEventListener("click", ()=>{
    if(outputScreen.innerHTML.length<12 && numSelected>0 && isEvaluable==0){
        isEvalued = 0;
        operatorSelected = 1;
        numSelected = 0;
        decimalSelected = 1;
        outputScreen.innerHTML+="x";
        console.log(outputScreen.innerHTML.length);
    }

    if(isEvaluable == 1){
        isEvaluable = 0;
        isEvalued = 0;
        numSelected = 0;
        operatorSelected = 1;

        //output: 
        let calculate  = outputScreen.innerHTML.replace("x", "*");
        console.log(calculate);
        outputScreen.innerHTML= result(calculate) + "x";

    }
    
})

equalTo.addEventListener("click", ()=>{

    //if evaluable: 
    if(isEvaluable==1){
        isEvaluable = 0;
        operatorSelected = 0;
        isEvalued = 1;

        //function to calculate

        //output
        let calculate  = outputScreen.innerHTML.replace("x", "*");
        console.log(calculate);
        outputScreen.innerHTML= result(calculate);
        
    }
    
    
})

clearButton.addEventListener("click", ()=>{
    numSelected = 0;
    operatorSelected = 0;
    isEvaluable = 0;
    isEvalued = 0;
    outputScreen.innerHTML='';

})

