//Business Logic

let userInput = "12" // or [5]
function subAlgo(number) {
    let userInputToArr = [];
    console.log(userInputToArr);
    for (let i = 0; i <= number; i++) {
        userInputToArr.push(i);
        // let filterArr = userInputToArr.slice(1,4); //needs to be dynamic to match input! [1, 2, 3] if at least 4 in inputted... maybe not?
        if (userInputToArr[i].toString().includes('2') === true){
            userInputToArr.splice(i, 1, "b")
        } 
        if (userInputToArr[i].toString().includes('1') === true){
            userInputToArr.splice(i, 1, "a")
        } 
        
        console.log(userInputToArr);
        

        // let stringArr = userInputToArr.toString(); // converts the array to a string.
        // let subStringOne = stringArr.replaceAll('1', 'a');
        // let subStringTwo = subStringOne.replaceAll('2', 'b');
        // let subStringThree = subStringTwo.replaceAll('3', 'c');
        // let finalResult = [];
        // if (subStringThree.includes('a') === true) {
        //     finalResult.push(subStringThree.replaceAll('a0', 'a').replace('aa','a'));
            
        //     console.log(finalResult);
        // } 


        // } else if (subStringThree.includes('aa') === true){
        //     finalResult.push(subStringThree.replaceAll('aa', 'a'));
        // } 


        // let newArr = subStringThree.replaceAll('a0', 'a');
        // let newArr2 = newArr.replaceAll('aa','a');
        // console.log(newArr2);


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
    
