//Business Logic

let userInput = "5"
function subAlgo(number) {
    const splitArr = [];
    for (let i = 0; i <= number; i++) {
        
        splitArr.push(i);
    }
    console.log(splitArr);
    const stringSplitArr = splitArr.toString();
    console.log(stringSplitArr);
    const stringArr = stringSplitArr.split(',');
    console.log(stringArr);
    // stringArr.forEach(function(replaceNumber){
    //     if (replaceNumber === "1"){
    //         splitArr.push("a");
    //     }
    // });
    splitArr.splice(1, 1, "a");
    console.log(splitArr);
    // splitArr.splice(2, 2, "b");
//let's me save the splitArr as a new array as replaceArr
    // const replaceArr = number.split("");
    // console.log(replaceArr);

    // console.log(replaceArr);
    // return splitArr;
    // console.log(replaceArr);
    
}