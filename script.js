
let screen = document.getElementById("screen");

let cutter = undefined // linits decimals to two numbers
let num1 = ""
let num2 = ""
let selector = 0 // switches logic from first imput to subsequents
let selectorSimbol = 0 //prevents crashing when clicking a simbol after having clicked a simbol - value 1 = only changes simbol content - value 0 ejecutescomplete function
let simbol 
let resultaiyon 


let numbers = document.querySelectorAll(".number")
numbers.forEach(number => {
    number.addEventListener("click", function(e){
           if (selector == 0) {
               if (cutter) {
                   
               num1 = num1 + number.value
               num1 = num1.substring(0, cutter)
               screen.innerHTML = num1;
               selectorSimbol = 0
               }

               else{
                num1 = num1 + number.value
                 screen.innerHTML = num1;
                selectorSimbol = 0
               }
           }
           else if (selector == 1){
               if (cutter) {
             num2=  num2 + number.value;
             num2 = num2.substring(0, cutter)
            screen.innerHTML = num2
            selectorSimbol = 0
           }

           else{
            num2 = num2 + number.value
            screen.innerHTML = num2;
           selectorSimbol = 0
           }
               
            console.log(num1, num2)
         
        }
        
        delet.removeAttribute("disabled")

    })
    
    
});

let operators = document.querySelectorAll(".operator")
operators.forEach(operator => {
    operator.addEventListener("click", function(e){
        if (selector == 0) {
            if (cutter){
        simbol = operator.value;
        num1 = num1.substring(0, num1.indexOf(".")+3)
        screen.innerHTML=num1
        selector = 1
        selectorSimbol = 1
        cutter = undefined
            }
        else{
            simbol = operator.value;
            
            screen.innerHTML=num1
            selector = 1
            selectorSimbol = 1
            cutter = undefined 
        }
        console.log(simbol);}
        else if (selector == 1) {
            if (selectorSimbol == 0) {
                if (cutter) {
        
        operate(num1, simbol, num2)
        num2=""
        num1 = resultaiyon.toString()
        num1 = num1.substring(0, num1.indexOf(".")+3)
        simbol = operator.value;
        screen.innerHTML=num1
        selectorSimbol = 1
            // last three lines makes variables avaiable to continue operating  after first result
        cutter = undefined
        }
               else {
            operate(num1, simbol, num2)
        num2=""
        num1 = resultaiyon.toString()
        
        simbol = operator.value;
        screen.innerHTML=num1
        selectorSimbol = 1
            // last three lines makes variables avaiable to continue operating  after first result
        cutter = undefined
        }}

        else if (selectorSimbol == 1) {
            simbol = operator.value
        }
    }
            
                
    
    delet.setAttribute("disabled", "disabled")
    point.removeAttribute("disabled")
        
    })
})

 let result = document.getElementById("equal")
 result.addEventListener("click", function(e){
    if (num1 && !num2){
        screen.innerHTML = num1
        cutter = undefined
    }
    else if (!num1 && !num2) {
      cClear()
    }
    else if (num1 && num2) {
        if (cutter) {
    operate(num1, simbol, num2);
    num2=""
    num1 = resultaiyon.toString()
    num1 = num1.substring(0, num1.indexOf(".")+3)    
    screen.innerHTML = num1
    selectorSimbol = 1
    cutter = undefined
        }
        
    else{
        operate(num1, simbol, num2);
    num2=""
    num1 = resultaiyon.toString()
    if (num1.includes(".")){
     num1 = num1.substring(0, num1.indexOf(".")+3)    
    screen.innerHTML = num1
    selectorSimbol = 1
    cutter = undefined
    }
    else{
        screen.innerHTML = num1
    selectorSimbol = 1
    cutter = undefined
    }
    }
    }
    delet.setAttribute("disabled", "disabled")
    point.removeAttribute("disabled")
})

let point = document.getElementById("point")
   point.removeAttribute("disabled") 
 
point.addEventListener("click", function(e){
      
    if (selector == 0) {
        num1 = num1 + point.value
        cutter = num1.length+2
        screen.innerHTML = num1;
        
        
    }
    else if (selector == 1){
     num2=  num2 + point.value;
     cutter = num2.length+2
     screen.innerHTML = num2
     
    }
     
     console.log(num1, num2)
   delet.removeAttribute("disabled")
point.setAttribute("disabled", "disabled")
 
 

})

function operate(num1, simbol, num2){
    if (simbol == "+") {
        parseFloat(num1)
        resultaiyon = parseFloat(num1, 10)+parseFloat(num2, 10);
        
        
    }
    if (simbol =="-") {
        parseFloat(num1)
        resultaiyon = parseFloat(num1, 10)-parseFloat(num2, 10);
        
        
    }
    if (simbol =="/") {
        parseFloat(num1)
        resultaiyon = parseFloat(num1, 10)/parseFloat(num2, 10);
        
        
    }
    if (simbol =="*") {
        parseFloat(num1)
        resultaiyon = parseFloat(num1, 10)*parseFloat(num2, 10);
        
        
    }
}

let clear = document.getElementById("clear")
clear.addEventListener("click", function(e){
cClear();
   

})

function cClear() {
    num1 = ""
    num2 = ""
    selector = 0
    selectorSimbol = 0
    simbol = undefined
    resultaiyon = undefined
    screen.innerHTML = ""
    cutter = undefined
    point.removeAttribute("disabled")
}

let delet = document.getElementById("delete")
delet.addEventListener("click", function(e){
    deletear()
    
    
})
function deletear(){
    if (selector == 0) {
        num1 = num1.substring(0, num1.length - 1)
        screen.innerHTML = num1
        num1.includes(".")? point.setAttribute("disabled", "disabled") : point.removeAttribute("disabled"), cutter = undefined;
    }
    else if (selector == 1) {
        num2 = num2.substring(0, num2.length - 1)
        screen.innerHTML = num2
        num2.includes(".")? point.setAttribute("disabled", "disabled") : point.removeAttribute("disabled"), cutter = undefined
        
    }
}





