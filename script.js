
/*let numbers = document.querySelectorAll(".number")
numbers.forEach(number => {
    number.addEventListener("click", function(e){
        valor = number.value;
        valorPantalla = number.innerHTML
        screen.innerHTML = screen.innerHTML + valorPantalla;
        return valor;

    })
    
});

let operators = document.querySelectorAll(".operator")
operators.forEach(operator => {
    operator.addEventListener("click", function(e){
        screen.innerHTML != ""? screen.innerHTML = operator.innerHTML : "";
        let toOperate = operator.value;
        return toOperate
    })
})
*/
let num1 =  0
let num2 = 0
let total = 0


let buttons = document.querySelectorAll("button");
 buttons.forEach(button =>  {button.addEventListener("click", function(e){
        if (isNaN(button.value)){
            
            if (button.value == "+"){
                num1 += num2;
                screen.innerHTML = num1

               
            }
            else if (button.value == "-"){
                num1 = num1 - num2;
                screen.innerHTML = num1

               
            }
            else if (button.value == "*"){
                num1 *= num2;
                screen.innerHTML = num1

               
            }
            else if (button.value == "/"){
                num1 /= num2;
                screen.innerHTML = num1

               
            }
            
        }
      
        else {
              if (screen.innerHTML == num1 )     
              screen.innerHTML= "";     
            screen.innerHTML = screen.innerHTML + button.value;

            num2 = parseInt(screen.innerHTML)
               
            
            
        }
    })
})



function sum(num1, num2){

return num1+num2;

}

function rest(num1,num2){
    return num1-num2;
}

function multi(num1,num2){
    return num1*num2;
}

function divi(num1,num2){
    return num1/num2;
}

let screen = document.getElementById("screen");
screen.innerHTML = num1



