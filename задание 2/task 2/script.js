const userNum = Number(prompt('Введите число'));
if (isNaN(userNum)) {
    console.log('Это не число')
} else if (userNum < 100) {
    console.log('Число меньше 100')
} else if (userNum > 100) {
    console.log('Число больше 100')
} else {
    console.log('Число равно 100')
}