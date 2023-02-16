let button = document.querySelector('.button');
let sidebar = document.querySelector('.sidebar');
let content = document.querySelector('.content');
let line1 = document.querySelector('.line1');
let line2 = document.querySelector('.line2');
let line3 = document.querySelector('.line3');
button.addEventListener('click', function() {
console.log('click');
line1.classList.toggle('rotate_anticlockwise');
line2.classList.toggle('hide');
line3.classList.toggle('rotate_clockwise');
sidebar.classList.toggle('sidebar_add_width');

})