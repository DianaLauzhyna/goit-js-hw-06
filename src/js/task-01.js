/*Напиши скрипт, який:

Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
Для кожного элемента li.item у спику ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
В результаті, в консолі будуть виведені наступні повідомлення.

Number of categories: 3

Category: Animals
Elements: 4

Category: Products
Elements: 3

Category: Technologies
Elements: 5*/
//"use strict"

const refs = {
  item: document.querySelectorAll(".item"),
  heading: document.querySelectorAll(".item h2"),
};
const summ = `Number of categories: ${refs.item.length}`;
console.log(summ);

const categories = refs.heading.forEach((element) =>
  console.log(`Category: ${element.textContent}
  Elements: ${element.nextElementSibling.children.length}`)
);
