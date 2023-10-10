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
let dogOwners = [];

// Поиск и отрисовка на странице сайта

function SendHtml() {
    let i = 0

    if (i < dogOwners.length) {

        let div = document.getElementById("OutCount")
        let dogElement = document.createElement("div")
        dogElement.setAttribute('class', 'className');
        div.appendChild(dogElement)

        let lastInx = dogOwners.length -1;
        dogElement.innerHTML = ` <h3 class= 'textOut'>
        ${lastInx + 1}) 
        ${dogOwners[lastInx].dogName},<br>
        &nbsp${dogOwners[lastInx].owner},<br>
        &nbsp${dogOwners[lastInx].poroda},<br>
        &nbsp${dogOwners[lastInx].status}<br>
        </h3>`;
        console.log("Отработанно!")
    } else {
        console.log("Ошибка!")
    }
    console.log(dogOwners)
    let deleteButon = document.getElementById('send-btn')
    deleteButon.parentNode.removeChild(deleteButon);
}


// Получение значения из инпута в строке => Создание массива с переменными
function getInput() {
  let inputDogName = document.getElementById('uInfo-field').value;
  let inputOwner = document.getElementById('uInfo-field2').value;
  let inputPoroda = document.getElementById('uInfo-field3').value;
  let inputStatus = document.getElementById('uInfo-field4').value;

  let allInput = [inputDogName, inputOwner, inputPoroda, inputStatus];
  // Проверка на длину каждой строки ввода с сайта (валидация формы)
  let checking = allInput.every(function(elem) {
    return elem.length > 2;
  });

  // Если каждое поле на сайте не меньше трех символов, то
  // значения, введенные в полях на сайте, отправляются в массив dogOwners
  if (checking) {
    dogOwners.push({
      dogName: inputDogName,
      owner: inputOwner,
      poroda: inputPoroda,
      status: inputStatus
    });
    alert('Отправлено!');
  } else {
    alert('Ошибка в поле');
  }
}

// Привязка событий к кнопкам
document.getElementById('send-btn').addEventListener('click', getInput);
document.getElementById('inputDogInfo').addEventListener('click', SendHtml);

