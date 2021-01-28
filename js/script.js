let button = document.querySelector('.modal-button-search');
let modal = document.querySelector('.modal');

console.log(document.querySelector('.modal'));
console.log('Да здравствует марксистское мировоззрение!');
console.log(document.querySelector('.modal-button-search'));

button.onclick = function() {console.log('Кнопка нажата!');
modal.classList.toggle('modal-2');

};
