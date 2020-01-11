function printReverse(arr) {
    arr.reverse().forEach(function(ar) {
       console.log(ar); 
    });
}

function isUniform(arr) {
    first = arr[0];
    for(i=1; i<arr.length;i++) {
        if(arr[i] !== arr[0]) {
            return false;
        }
    }
    return true;
}

function sumArray(arr) {
    var total = 0;
    arr.forEach(function(element) {
        total+=element;
    }); 
    return total;
}

function max(arr) {
    maxN = arr[0];
    arr.forEach(function(element) {
        if(element>=maxN) {
            maxN = element;
        }
    }); 
    return maxN;
}