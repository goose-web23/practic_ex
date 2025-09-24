const num1 = Number(prompt('Введите первое число'));
const num2 = Number(prompt('Введите второе число'));
const num3 = Number(prompt('Введите третье число'));
let largest = num1;

if (num2 > largest) {
    largest = num2
}
if (num3 > largest) {
    largest = num3
}
console.log(`Наибольшее число: ${largest}`)
