console.log("Hello JavaScript!");

let firstName = "Tran";
let lastName = "Cao";
console.log("fullName =", firstName, lastName);

let fullName = firstName + " " + lastName;
console.log('fullName = ', fullName);

let check = true;
console.log("check =", check);

let checkNull = null;
console.log("checkNull =", checkNull);

let checkUndefined;
console.log("checkUndefined =", checkUndefined);

let checkNaN = 10 / "a";
console.log("checkNaN =", checkNaN);

let number_1 = 15;
let number_2 = 2;
var result = number_1 + number_2;
console.log('Cộng:', result);
var result = number_1 - number_2;
console.log('Trừ:', result);
var result = number_1 * number_2;
console.log('Nhân', result);
var result = number_1 / number_2;
console.log('Chia', result);
var result = number_1 % number_2;
console.log('Dư', result);
var result =  number_1 ** number_2;
console.log('Bình', result);

let number3 = 8;
let number4 = 3;
console.log("result =", number3 == number4);

console.log("Ket qua:", number3 == number4 && number3 > number4);

alert("Hello Javascript!!!");
console.log(prompt("Enter your name:"));

confirm("Are you sure?");

document.write('hi');