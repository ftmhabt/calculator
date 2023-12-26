let firstOperand="";
let secondOperand="";
let operator="";

function operate(firstOperand,secondOperand,operator){
    if(secondOperand==0&&operator==='/'){
        return "error";
    }
    switch (operator) {
        case '+':
            return Number(firstOperand) + Number(secondOperand) ;
            break;
        case '-':
            return Number(firstOperand) - Number(secondOperand);
            break;
        case '*':
            return Number(firstOperand) * Number(secondOperand);
            break;
        case '/':
            return Number(firstOperand) / Number(secondOperand);
            break;        
        default:
            break;
    }
}

let keys=document.querySelectorAll('.key');
let display=document.querySelector('.display');
let firstFull=false;
keys.forEach(key=>{
    key.addEventListener('click',()=>{
        if(key.textContent>=0 && key.textContent<=9){
            display.textContent+=key.textContent;
            if(!firstFull){
                firstOperand+=key.textContent;
            }
            
            if(firstFull){
                secondOperand+=key.textContent;
            }
            
        }
        else if(key.textContent==='*'||key.textContent==='-'||key.textContent==='+'||key.textContent==='/'){
            if(firstOperand!==""&&operator===""){
                display.textContent+=key.textContent;
                operator=key.textContent;
                firstFull=true;
            }
            else if(operator!==""){
                if(secondOperand===""){secondOperand=firstOperand;}
                firstOperand= operate(firstOperand,secondOperand,operator).toFixed(2);
                display.textContent+= "="+firstOperand+key.textContent;
                operator=key.textContent;
                firstFull=true;
                secondOperand="";
                }

        }
        else if(key.textContent==='='){
            if(secondOperand!==""&&operator!==""&&firstOperand!==""){
               
            firstOperand= operate(firstOperand,secondOperand,operator).toFixed(2);
            display.textContent+= "="+firstOperand;
            secondOperand="";
            operator="";
             
        }
        }
        else if(key.textContent==="c"){
            display.textContent="";
            firstOperand="";
            secondOperand="";
            operator="";
            firstFull=false;
        }
            
    })
})
