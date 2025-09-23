const myName = 'Надежда Иванова';
const programmingLanguage = 'JavaScript';
const courseCreatorName = 'Чеботов Никита Михайлович';
const reasonText = 'эта сфера очень интересная и можно создавать крутые проекты';
const numberofMonth = '5';

let myInfoText = `Всем привет! Меня зовут ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}. Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучала ${programmingLanguage} ${numberofMonth} месяцев. Я уверена, что пройду данный курс до конца!`;
myInfoText = myInfoText.replaceAll('JavaScript', 'JavaScript'.toUpperCase())

console.log(myInfoText)
console.log(`Длина строки myInfoText ${myInfoText.length}`)
console.log(`Первый символ: ${myInfoText[0]}. Посл символ: ${myInfoText[myInfoText.length - 1]}`)

