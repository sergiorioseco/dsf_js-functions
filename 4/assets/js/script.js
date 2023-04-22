let color;
let selectedColor = document.querySelector('#selectedColor');

document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
    color = '#40F99B';
    }
    else if (event.key === 's') {
    color = '#F6C28B';
    }
    else if (event.key === 'd') {
    color = '#D7B9D5';
    }
    else if (event.key === 'w') {
    color = '#82DDF0';
    }
    selectedColor.style.backgroundColor = color;
    });

function paint(elementId) {
    let box = document.querySelector('#' + elementId);
    box.style.backgroundColor = color;
};