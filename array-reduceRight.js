//Resta los números en la matriz, comenzando desde el final:
const numbers = [175, 50, 25];

document.getElementById("demo").innerHTML = numbers.reduceRight(myFunc);

function myFunc(total, num) {
    return total - num;
}

//Resta los números, de derecha a izquierda, y muestra la suma:
const numbers = [2, 45, 30, 100];
document.getElementById("demo").innerHTML = numbers.reduceRight(getSum);

function getSum(total, num) {
    return total - num;
}