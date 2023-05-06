const button = document.querySelector('.change__color'); 
const colorTxt = document.getElementsByClassName('color')[0];

let index = 0;


button.addEventListener('click', function(event) {
   let colors = ["red", "blue", "pink", "black", "orange", "green", "white"];

   const body = document.querySelector('.change');

   body.style.backgroundColor = colors[index++];

      if(index > colors.length -1) {
      index = 0;
      };

   colorTxt.innerHTML = `Цвет меняется: ` + index;
});


//  new

function changeColorHesh() {

   var heshColors = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F',];
   

   var hexCode = '';
   
   for(var i = 0; i < 6; i++) {
      var heshChange = Math.floor(Math.random() * heshColors.length);

      hexCode += heshColors[heshChange];
   }; 

   document.querySelector('.change__hesh').style.backgroundColor = "#" + hexCode;

   document.querySelector('.inner__button').innerHTML = '#' + hexCode;
};

var btnHesh = document.querySelector('.change__hesh__btn');

btnHesh.addEventListener('click', changeColorHesh);



// другое
const input = document.querySelector('.input__add');
const field = document.querySelector('.added');



input.addEventListener('keydown', function(e) {
   if(e.key == "Enter") {
      addItem();
   };
});


function addItem() {
   var h2 = document.createElement('h2');
   h2.innerHTML = '-' + input.value;


   field.insertAdjacentElement('beforeend', h2);

   input.value = "";
};


// 24.03.23

const resultCalc = document.querySelector('#calc__input');

var action = '';

function press(num){
   action += num;
   resultCalc.value = action;
};

function equal() {
   resultCalc.value = eval(action);
}

function erase() {
   action = '';
   resultCalc.value = action;
}


// 24.03.23



// slider 

let offset = 0;

const sliderLine = document.querySelector('.slider__line');

document.querySelector('.slider-next').addEventListener('click', function() {
   offset += 500;
   if(offset > 1500) {
      offset = 0;
   };
   sliderLine.style.left = -offset + 'px';
});

document.querySelector('.slider-prev').addEventListener('click', function() {
   offset -= 500;
   if(offset < 0) {
      offset = 1500;
   };
   sliderLine.style.left = -offset + 'px';
});

// slider 


window.addEventListener('onload', clock())

function clock() {
   var date = new Date();
   var day = date.getDay();
   var hours = date.getHours();
   var minutes = date.getMinutes();
   var seconds = date.getSeconds();
   var dayNames = ["","Mon", "Thu", "Wed", "Thu", "Fri", "Sat", "Sun",];

   document.getElementById('day').innerHTML = dayNames[day];
   document.getElementById('hour').innerHTML = hours;
   document.getElementById('minutes').innerHTML = minutes;
   document.getElementById('seconds').innerHTML = seconds;
   setTimeout(clock, 1000);
};


// input test

const inputFirst = document.querySelector('#first');
const inputSec = document.querySelector('#second');
const inputThird = document.querySelector('#third');

const inputBtn = document.querySelector('.result__input');

const inputResult = document.querySelector('#inputResult');

inputBtn.onclick = () => {
   let sum = +inputFirst.value + +inputSec.value + +inputThird.value;
   inputResult.value = sum;

   inputFirst.value = '';
   inputSec.value = '';
   inputThird.value = '';
}







const out = document.querySelector('.out');

// Таблица
let sum = '';

for (let i = 1; i <= 9; i++) {
   for (let k = 1; k <= 10; k++) {
      sum += i + ' * ' + k + ' = ' + i * k + '<br>';
   }
   sum += '<br>';
}

out.innerHTML += sum;

// input test