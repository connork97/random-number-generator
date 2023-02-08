let genBtn = document.getElementById('genBtn');

function randomNum() {
    let low = document.getElementById('low');
    let high = document.getElementById('high');
    let lowValue = Number(low.value);
    let highValue = Number(high.value);

    if (lowValue > highValue) {
        window.alert("Your Low Number is Larger than your High Number #SillyGoose");
    } else if (lowValue < 1 || highValue < 1) {
        window.alert("We are all about positive vibes here.  No negative numbers allowed.");
    } else if (lowValue <= highValue) {
        let num = Math.floor(Math.random() * (highValue - lowValue + 1)) + lowValue;
        document.getElementById('genNum').innerHTML = num;
    }
}

genBtn.addEventListener("click", randomNum);




/*

let lowNumber = document.getElementById('low').value;
let highNumber = document.getElementById('high').value;
let generatedNumber = document.getElementById('genNum');
let randomNumber;

document.getElementById('genBtn').onclick = function newGenNum() {
    if (lowNumber >= 1 && lowNumber < highNumber) {
        randomNumber = Math.floor(Math.random() * highNumber) + lowNumber;
        document.getElementById('genNum').innerHTML = randomNumber;
    }
}

//split between older work and newer work

/*
let lowNumber = document.getElementById('low-number').value;
let highNumber = document.getElementById('high-number').value;
let generateBtn = document.getElementById('generate-button');

let yourNumber = ['generated-number'];

//when submitBtn.ISCLICKED, run generateNumber function
generateBtn.onclick = function generateNumber() {
    //Parameters: if (both numbers are at least 1, AND highNumber is Greater than lowNumber)
    if (lowNumber >= 1 && lowNumber < highNumber) {
        //set newNumber to the value of the randomly generated number, AND replace the text "Your Number"
        Math.floor(Math.random() * `${highNumber}`) + `${lowNumber}`;
//let newNumber = document.getElementById('generated-number');
    }
    console.log(generatedNumber)
}

generateBtn.addEventListener('click', generateNumber)
*/