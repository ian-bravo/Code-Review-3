//Business Logic

let userInput = "5"
function subAlgo(number) {
    const splitArr = [];
    for (let i = 0; i <= number; i++) {
        splitArr.push(i);
    }
    console.log(splitArr);
    
    const replaceArr = splitArr.splice(" ");
    splitArr.forEach(function(replaceNumber){
        if (replaceNumber === 1){
            replaceArr.push("a");
        }
        console.log(replaceArr);
    });
    // return splitArr;
    // console.log(replaceArr);
    
}