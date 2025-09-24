const userNum = Number(prompt('Введите число'));
if (isNaN(userNum)) {
    console.log('Это не число')
} else if (userNum < 0) {
    console.log('Это отрицательное число')
} else if (userNum > 0) {
    console.log('Это положительное число')
} else {
    console.log('Число равно нулю')
}