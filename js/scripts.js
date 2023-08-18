//Business Logic

let userInput = "5"
function subAlgo(number) {
    const splitArr = [];
    for (let i = 0; i <= number; i++) {
        
        splitArr.push(i);
    }
    console.log(splitArr);
    splitArr.splice(1, 1, "a");
    console.log(splitArr);
//let's me save the splitArr as a new array as replaceArr
    // const replaceArr = number.split("");
    // console.log(replaceArr);
    // splitArr.forEach(function(replaceNumber){
    //     if (replaceNumber === "1"){
    //         replaceArr.push("a");
    //     }
    // });
    // console.log(replaceArr);
    // return splitArr;
    // console.log(replaceArr);
    
}