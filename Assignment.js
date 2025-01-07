
let a = Number(prompt("Enter the first number"));
let b = Number(prompt("Enter the second number"));
let c = Number(prompt("Enter the third number"));

console.log(a);
console.log(b);
console.log(c);

// If Else Statement
if (a > b && a > c) {
    console.log("The greater number is " + a);
} else if (b > a && b > c) {
    console.log("The greater number is " + b);
} else if (c > a && c > b) {
    console.log("The greater number is " + c);
} else {
    console.log("Some numbers are equal.");
}

// Switch Case
switch (true) {
    case (a > b && a > c):
        console.log("The greater number is " + a);
        break;
    case (b > a && b > c):
        console.log("The greater number is " + b);
        break;
    case (c > a && c > b):
        console.log("The greater number is " + c);
        break;
    default:
        console.log("Some numbers are equal.");
        break;
}