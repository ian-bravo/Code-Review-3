//Business Logic
function subAlgo(number) {
    let userInputToArr = [];
    for (let i = 0; i <= number; i++) { //increases array to match userInput [0-N]
        userInputToArr.push(i); //adds 1 number to the string but splices depending on the if statements below.
        if (userInputToArr[i].toString().includes('3') === true){
            userInputToArr.splice(i, 1, " 'Won't you be my neighbor?'")
        } //if 3 is found in the non-destructive string, then you replace a single element with the new string "Won't..." at that location (i). same for the 2 below.
        if (userInputToArr[i].toString().includes('2') === true){
            userInputToArr.splice(i, 1, " 'Boop!'")
        } 
        if (userInputToArr[i].toString().includes('1') === true){
            userInputToArr.splice(i, 1, " 'Beep!'")
        } 
    }    
    return userInputToArr.toString();
}
    
// User Interface Logic

function userSubmitResponse (event) {
    event.preventDefault();
    const userNumber = document.getElementById("userInputNumber").value;
    let showResults = subAlgo(userNumber);
    document.getElementById("entered-number").innerText = "Input: " + userNumber;
    document.getElementById("answer-reveal").innerText = "Output: " + showResults;
    document.getElementById("results").removeAttribute("class");
}

function loadForm () {
    let userInputNumber = document.querySelector("#form-input")
    userInputNumber.addEventListener("submit", userSubmitResponse);
}

window.addEventListener("load", loadForm);
