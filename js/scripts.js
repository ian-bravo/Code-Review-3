//Business Logic
let userInput = "15"
function subAlgo(number) {
    let userInputToArr = [];
    for (let i = 0; i <= number; i++) { //increases array to match userInput [0-N]
        userInputToArr.push(i);  
        if (userInputToArr[i].toString().includes('3') === true){
            userInputToArr.splice(i, 1, "Won't you be my neighbor?")
        } //if 3 is found in the short-term converted string, then you replace 1 element with the new string "Won't..." at that location (i). same for the 2 below.
        if (userInputToArr[i].toString().includes('2') === true){
            userInputToArr.splice(i, 1, "Boop!")
        } 
        if (userInputToArr[i].toString().includes('1') === true){
            userInputToArr.splice(i, 1, "Beep!")
        }
    }    
}
    
