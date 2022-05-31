//Resta los números en la matriz, comenzando desde el final:
const numbers = [175, 50, 25];
console.log(numbers.reduceRight(myFunc));

function myFunc(total, num) {
    return total - num;
}

//Resta los números, de derecha a izquierda, y muestra la suma:
const numbers = [2, 45, 30, 100];
console.log(numbers.reduceRight(getSum));

function getSum(total, num) {
    return total - num;
}