// Define the numbers and the operation here
//..
const num1=prompt("Enter first number");
const num2=prompt("Enter second number");
const opt=prompt("Enter the operation");
// Write if-statements here
if (opt==="+"){
console.log(`Result: ${num1+num2}`);
}
else if (opt==="-"){
console.log(`Result: ${num1-num2}`);
}
else if (opt==="*"){
console.log(`Result: ${num1*num2}`);
}
else {
console.log(`Result: ${num1/num2}`);
}
