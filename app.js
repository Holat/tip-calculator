const billInput = document.querySelector("#bill-input");
const noOfPeople = document.querySelector("#number_of_people");
const customInput = document.querySelector("#custom-tip");
const tips = document.querySelectorAll(".tip");
const resetBtn = document.querySelector("#reset");
const amountPerPerson = document.querySelector(".amount");
const total = document.querySelector(".total");
const inputs = document.querySelectorAll(".input");


window.addEventListener('DOMContentLoaded', emptyInput);
billInput.addEventListener('input', function(){
    customTip();
    emptyInput();
    fixedTip();
})
noOfPeople.addEventListener('input',function(){
    customTip();
    zeroInput();
    fixedTip();
})
resetBtn.addEventListener('click', function(){
    reset();
    emptyInput();
})
function emptyInput() {
    let tipContainer = document.querySelector(".tip-container");
    let results = document.querySelector(".results");
    if(billInput.value === "" || billInput.value == 0){
        tipContainer.classList.add("empty");
        results.classList.add("empty");
        zero()
    }
    else{
        tipContainer.classList.remove("empty");
        results.classList.remove("empty");
    }
};
function zeroInput(){
    let people = document.querySelector('.people')
    if(noOfPeople.value == 0 && noOfPeople.value !== ""){
        people.classList.add('error')
        zero()
    }else if(noOfPeople.value === ""){
        zero()
        people.classList.remove('error')
    }
    else{
        people.classList.remove('error')
    };
};
// tip calculator
function calculator(E){
    const x = parseFloat(billInput.value);
    const y = parseFloat(noOfPeople.value);
    let value = parseInt(E.value) ;
    let tipAmount =  x * (value/100) ;
    let tipAmountPerson = tipAmount/y;
    let totalAmount = x + tipAmount;
    let totalAmountPerson = totalAmount/y ;
    amountPerPerson.textContent = tipAmountPerson.toFixed(2);
    total.textContent = totalAmountPerson.toFixed(2) ;
}
// fixedTip function
function fixedTip(){
    tips.forEach(function(tip){
        tip.addEventListener('click',function(e){
            let E = e.currentTarget
            calculator(E);
            zeroInput(e);
            emptyInput(e)
        });
    });  
}
// custom tip function
function customTip(){
    customInput.addEventListener('input', function(){
        E = customInput;
        calculator(E);
        if(customInput.value === ""){
           zero()
        }else if(noOfPeople.value === ""){
            zero()
        }
    })
}
// reset function
function reset(){
    billInput.value = "";
    customInput.value = "";
    noOfPeople.value = "";
    amountPerPerson.textContent = "0.00"
    total.textContent = "0.00"
}
function zero(){
    amountPerPerson.textContent = "0.00";
    total.textContent = "0.00";
}


