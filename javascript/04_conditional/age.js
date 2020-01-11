var age = prompt("What is your age?");
if (age < 0) {
    console.log("Please enter a valid age");
}
if (age == 21) {
    console.log("Happy 21st birthday");
}

if ((Math.abs(age) % 2)!=0) {
    console.log("Your age is odd!");
}

var sqrtNumber = Math.sqrt(age); 

if (Math.floor(sqrtNumber)==sqrtNumber) {
    console.log("Perfect squre!");
}