let userName = prompt('Введите своё имя: ');
userName = userName.toLowerCase().trim();
let userAge = (prompt('Введите свой возраст: '));
userAge = Number(userAge.trim());
alert(`Вас зовут ${userName} и вам ${userAge} лет`);
