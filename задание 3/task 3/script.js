const userString = prompt('Введите строку').toLowerCase();
const letters = ['a', 'e', 'i', 'o', 'u', 'а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я'];
let allLetters = 0;

for (i = 0; i <= userString.length; i++) {
    if (letters.includes(userString[i])) {
        allLetters++;
    }
}
console.log(`В вашей строке ${allLetters} гласных букв`)