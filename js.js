//Рандомизатор "кода" переменной "ключ"
function randomKeyNumber (min , max) {
    return Math.floor(Math.random()* (max - min +1)) + min;
}
// Массив с названием цвета и функцией рандма кода в указзанм диапазоне
const keyBox = {
    color: ['red', 'yellow', 'black', 'purplle'],
    number: randomKeyNumber(101, 999)
}
// Рандоомизация цвета
let randomKeyColor = Math.floor(Math.random() * keyBox.color.length)
let randomElementsKeyColor =keyBox.color[randomKeyColor]
// Конкатонация строк
const key = 'key_' + randomElementsKeyColor +'_'+ randomKeyNumber(101, 999)

//Просто рабта с сет интервалами и сет таймаутами
const id = setInterval(() => {
    console.log(key, id); 
}, 1000 );

setTimeout(() =>{
    clearInterval(id)
}, 3000)

// console.log(Array.isArray(keyBox.color))
//Массив объектов введеных руками. Далее сюда будут добавляться с инпута на сайте
let dogOwners = [
    {
        dogName: "Лекса",
        owner: 'Паша',
        poroda: 'Немецкая овчарка',
        status: 'Владелец',
    },
    {
        dogName: 'Ирма',
        owner: 'Настя',
        poroda: 'Востчно-Европейская овчарка',
        status: 'Владелец',
    },
    {
        dogName: 'Лана',
        owner:  undefined,
        poroda: 'Дворняга',
        status: 'Без владельца',
    }
]
// Поиск и отрисовка на странице сайта
 function test () {
    let div = document.querySelector('#renderCard');


        for (let i = 0; i < dogOwners.length; i++) {
            let dogElement = document.createElement('div');
            dogElement.innerHTML = ` <h3>
            ${i +1})
            ${dogOwners[i].dogName},<br>
            ${dogOwners[i].owner},<br>
            ${dogOwners[i].poroda},<br>
            ${dogOwners[i].status}<br>
            <h3>`;
            div.appendChild(dogElement);
            console.log('testing');
     }
    }

// document.querySelector('.Button').addEventListener('click',remove)/*не роибт*/
//Получение значения из инпута в строке => Создание массива с переменными => Прооверка на

function getInput () {
    
    let inputDogName = document.getElementById('uInfo-field').value;
    let inputOwner = document.getElementById('uInfo-field2').value;
    let inputPoroda = document.getElementById('uInfo-field3').value;
    let inputStatus = document.getElementById('uInfo-field4').value;

    let allInput = [inputDogName, inputOwner, inputPoroda, inputStatus]; 
// Прооверка на длинну строки какжого отдельной строки ввода с сайта
    let cheking = allInput.every(function(elem){
        if (elem.length > 2) {
            return true
        }   else {
            return false
        }})

// Если кажде (!) поле на сайте не меньше 3ех символов, то
// значение введенные в полях на сайте отправляются в массив на 27 строке
    if (cheking == true) {
        return  dogOwners.push ({
                dogName: inputDogName,
                owner: inputOwner,
                poroda: inputPoroda,
                status: inputStatus
        }), alert('Отправленно!')} else {
            return alert('Ошибка в плое')
        }
    }

// Поиск ид на странице, привязка события 
document.getElementById('send-btn').addEventListener('click', getInput);
document.getElementById("inputDogInfo").addEventListener('click', test);
