let userText = prompt('Введите текст: ').trim();
let wordFromtext = prompt('Введите слово из текста: ').trim();
const indexOfWord = userText.indexOf(wordFromtext);
alert(`Результат: ${userText.slice(0, indexOfWord)}`);


