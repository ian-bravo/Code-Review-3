//Business Logic

let userInput = "5" // or [5]
const splitArr = [];
function subAlgo(number) {
    for (let i = 0; i <= number; i++) {
        splitArr.push(i); // puts the userInput as an array [0-N]
        if (splitArr[i] === 1) {
            splitArr[i] = 'a'
        }
        
    }console.log(splitArr.findIndex);
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
    
