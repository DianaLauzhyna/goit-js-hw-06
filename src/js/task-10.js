/*Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

<div id="controls">
  <input type="number" min="1" max="100" step="1" />
  <button type="button" data-create>Create</button>
  <button type="button" data-destroy>Destroy</button>
</div>

<div id="boxes"></div>
Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

Розміри найпершого <div> - 30px на 30px.
Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.*/

const boxInto = document.querySelector('#boxes');
const controlsBox = document.querySelector('#controls');
let amount = 0;

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const createBoxes = (amount) => {
  let color = [];
  for (let i = 0; i < amount; i++)
  {
    color.push(`
      <div style = "background-color: ${getRandomHexColor()}; width: 30px; height: 30px;"></div>
      `);
  }
  return color;
};
const destroyBoxes = () => {
    boxInto.innerHTML = '';
}
controlsBox.addEventListener('click', e => { 
  if (e.target.localName === 'input')
  {
    amount = e.target.value;
  }
  if (e.target.dataset.create === '')
  {
    boxInto.setAttribute("style", 'display: flex; flex-wrap: wrap');
    boxInto.insertAdjacentHTML('beforeend', createBoxes(amount));
  }
  if (e.target.dataset.destroy === '')
  {
    destroyBoxes();
  }
});
