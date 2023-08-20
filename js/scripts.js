//Business Logic

let userInput = "10" // or [5]
function subAlgo(number) {
    let userInputToArr = [];
    for (let i = 0; i <= number; i++) {
        userInputToArr.push(i);// sets the userInput as an array [0-N]
        // console.log(userInputToArr);
        let stringArr = userInputToArr.toString(); // converts the array to a string.
        let subStringOne = stringArr.replaceAll('1', 'a');
        let subStringTwo = subStringOne.replaceAll('2', 'b');
        let subStringThree = subStringTwo.replaceAll('3', 'c');
        
        let finalResult = [];
        if (subStringThree.includes('a0') === true) {
            finalResult.push(subStringThree.replaceAll('a0', 'a'));
            console.log(finalResult);
        } 
        // workingSubArray = stringArr.split(" ");
        // console.log(workingSubArray);
        // if (workingSubArray.charAt(1) === 1){
        //     workingSubArray.charAt(1) = 'a'
        //     console.log(workingSubArray);
        // }
        // debugger;
        
        // stringArr.forEach(function(element){

        // });
        //write if else here, to grab 3 > 2, 1, from double digits?
        // stringArr.forEach(function(element){
        //     //if === 1 
        //     // = a
        // });
        // if (splitArr[i] === 1) {
        //     splitArr[i] = 'a'
        // }
        
    // } function stringConvert(string) {
    //     let stringArr = splitArr.
    }

    
}


// if (workingArr === 1) { //looks at the index value that matches 1
    // workingArr[i] = "a"; //replaces matching index value with "a"



    // console.log(splitArr); //array of 0 to N
    // const stringSplitArr = splitArr.toString();
    // console.log(stringSplitArr); //converts array into a string.

    // if 2 is present in the string, replace that value with "b". else if 1 replace with "a".



    //need to change string to array.
    // const stringArr = stringSplitArr.split(','); //converts string to array with string data values
    // console.log(stringArr);

    // stringArr.forEach(function(replaceNumber){
    //     if (replaceNumber === "1"){
    //         splitArr.push("a");
    //     }
    // });
    // splitArr.splice(1, 1, "a"); //replaces the 1 index with a
   
    // splitArr.splice(2, 2, "b");
//let's me save the splitArr as a new array as replaceArr
    // const replaceArr = number.split("");
    // console.log(replaceArr);

    // console.log(replaceArr);
    // return splitArr;
    // console.log(replaceArr);
    
