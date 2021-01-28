let form = document.querySelector('.filter-form');
let button2 = document.querySelector('.button');
let inner = document.querySelector('.main-header-inner');

console.log(document.querySelector('.filter-form'));
console.log(button2);
console.log(document.querySelector('.main-header-inner'));

form.addEventListener("submit", function() {
  console.log("Отправляем форму!");
});
