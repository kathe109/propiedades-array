//Resta todos los números en una matriz:
const numbers = [175, 50, 25];
console.log(numbers.reduce(myFunc));

function myFunc(total, num) {
    return total - num;
}


//Redondea todos los números y muestra la suma:
const numbers = [15.5, 2.3, 1.1, 4.7];
console.log(numbers.reduce(getSum, 0));

function getSum(total, num) {
    return total + Math.round(num);
}