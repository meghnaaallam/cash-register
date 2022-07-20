let billAmount=document.querySelector('#bill-amount');
let givenCash=document.querySelector('#cashgiven-input');
let checkRemainingAmount = document.querySelector('#checkNotes')
let returnOutput =document.querySelector('#return-output')
let noOfNotes=document.querySelectorAll('.no-of-notes');

checkRemainingAmount.addEventListener('click',billAmountIsValid)

const notes=[2000,500,100,20,10,5,1];


function billAmountIsValid() {
    let cashGiven=Number(givenCash.value)
    let billtotal = Number(billAmount.value)
    hideMessage();

if(billtotal>0) {

    if(cashGiven >= billtotal) {
    const amountToBeReturned = cashGiven-billtotal;
    calculateChange(amountToBeReturned);
    }
    else {
        showMessage("The cash provided should atleast be equal to the bill amount");
    }
}
    else {
        showMessage("Invalid amount");
    }
}

function calculateChange(amountToBeReturned) {
    for(let i=0;i<notes.length;i++){
    const noOfNotesofcurrent = Math.trunc(amountToBeReturned/notes[i]);
    amountToBeReturned = amountToBeReturned % notes[i];
    noOfNotes[i].innerText=noOfNotesofcurrent;
}
}

function hideMessage() {
    returnOutput.style.display="none";
}

function showMessage(message) {
    returnOutput.style.display="block";
    returnOutput.innerText = message;
}