let sum = 0;
let input = Number(prompt('Введите число: '));
while (input !== 0) {
    sum += input;
    input = Number(prompt('Введите число: '));
}
console.log(`Получившаяся сумма: ${sum}`)