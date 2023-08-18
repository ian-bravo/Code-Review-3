//Business Logic

let userInput = "5"
function subAlgo(number) {
    const splitArr = [];
    for (let i = 0; i <= number; i++) {
        
        splitArr.push(i);
    }
    console.log(splitArr); //array of 0 to N
    const stringSplitArr = splitArr.toString();
    console.log(stringSplitArr); //converts array into a string.

    // if 2 is present in the string, replace that value with "b". else if 1 replace with "a".


    
    //need to change string to array.
    const stringArr = stringSplitArr.split(','); //converts string to array with string data values
    console.log(stringArr);

    // stringArr.forEach(function(replaceNumber){
    //     if (replaceNumber === "1"){
    //         splitArr.push("a");
    //     }
    // });
    splitArr.splice(1, 1, "a"); //replaces the 1 index with a
    console.log(splitArr);
    // splitArr.splice(2, 2, "b");
//let's me save the splitArr as a new array as replaceArr
    // const replaceArr = number.split("");
    // console.log(replaceArr);

    // console.log(replaceArr);
    // return splitArr;
    // console.log(replaceArr);
    
}