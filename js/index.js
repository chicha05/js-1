// первое задание

// function umnoj(num, num2){
//     let result = num*num2
//     return result
// }
// let num = prompt('Введите первое число', '')
// let num2 = prompt('Введите второе число', '')
// alert(umnoj(num, num2))


// второе задание

// function fio(name, surname, age){
//     return 'Привет ' + name + ' ' + surname + ' c возрастом ' + age + ' лет'
// }
// let name = prompt('Введите свое имя', '')
// let surname = prompt('Введите свою фамилию', '')
// let age = prompt('Введите свой возраст', '')
// alert(fio(name, surname, age))


// третье задание

// function gender(gend){
//     if(gend == 'M' ){
//         return 'Ваш пол мужской'
//     }
//     else if(gend == 'F'){
//         return 'Ваш пол женский'
//     }
//     else{
//         return 'Ваш пол не определен'
//     }
// }
// let gend = prompt('Введите ваш пол', '')
// alert(gender(gend))


// четвертое задание

// function week(day){
//     switch (day){
//         case 1:
//             return 'Понедельник'
//         case 2:
//             return 'Вторник'
//         case 3:
//             return 'Среда'
//         case 4:
//             return 'Четверг'
//         case 5:
//             return 'Пятница'
//         case 6:
//             return 'Суббота'
//         case 7:
//             return 'Воскресенье'
//         default:
//             return 'Введите число от 1 до 7'
//     }
// }
// let day =Number(prompt('Введите число от 1 до 7', ''))
// alert(week(day))


// пятое задание

// function printAge(age) {
//     let title = "ребенок";
//     if (age > 0 && age < 18) {
//         title = " ребенок ";
//     } else if (age > 17 && age < 31) {
//         title = " молодой ";
//     } else if (age > 30 && age < 56) {
//         title = " зрелый ";
//     } else {
//         title = " старый ";
//     }
//     document.write(age + ' - ' + title);
//   }
//   for (let i = 0; i < 101; i++) {
//     printAge(i);
//   }


// шестое задание

// function printAge(age) {
//     let title = "ребенок";
//     if (age > 0 && age < 18) {
//         title = " ребенок ";
//     } else if (age > 17 && age < 31) {
//         title = " молодой ";
//     } else if (age > 30 && age < 56) {
//         title = " зрелый ";
//     } else {
//         title = " старый ";
//     }
//     return title
//   }
// function AgeName(name,age){
//     return name + ' имеет возраст ' + age + ' и он' + printAge(age)
// }
// let name =prompt('Введите свое имя', '')
// let age =prompt('Введите свой возраст', '')
// alert(AgeName(name,age))


// седьмое задание
// function echo(){
//     alert("Привет мир!")
// }


// восьмое задание
// function fill(){
//     let input = document.getElementById("input")
//     input.value = 'test@mail.ru'
// }


// девятое задание
// function text(){
//     let input = document.getElementById("input")
//     if(input.value == ''){
//         alert('Вы ничего не ввели')
//     }
//     else{
//         alert('Вы ввели ' + input.value)
//     }
// }


// десятое задание
// function disabledInp(){
//     document.getElementById("input").disabled = true
// }
// function enableInp(){
//     document.getElementById("input").disabled = false
// }


// одиннадцатое задание
// const square = document.getElementById('square');
// const toggleButton = document.getElementById('toggleButton');
// toggleButton.addEventListener('click', function() {
//     if (square.style.display === 'none') {
//         square.style.display = 'block';
//         toggleButton.textContent = 'Скрыть квадрат';
//     } else {
//         square.style.display = 'none';
//         toggleButton.textContent = 'Показать квадрат';
//     }
// });


// двенадцатое
// let square = document.getElementById("square")
// square.onmouseover = function (event) {
//     event.target.style.backgroundColor = "green"
//   }
//   square.onmouseout = function (event) {
//     event.target.style.backgroundColor = "red"
//   }