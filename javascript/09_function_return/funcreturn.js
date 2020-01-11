function isEven(n) {
    return n%2===0;
    // if (n%2===0) {
    //     return true;
    // }
    // return false;
}

function factorial(n) {
    var answer = 1;
    for(i=2;i<=n;i++) {
    answer *= i;
    }
    return answer;
}
   
function kebabToSnake(str) {
    newString = "";
    for(i=0;i<str.length;i++) {
        if (str[i] === "-") {
            newString = newString + "_"
        }
        else {
            newString = newString + str[i];
        }
    }
    return newString;
}

// function kebabToSnake(str) {
//     return str.replace(/-/g,"_");
// }