
//nested loops to create 16x16 grid
var subContainer = [];
var row = [] 
const container = document.querySelector('.container');
for (let i = 0; i < 16; i++) {
    subContainer[i] = document.createElement('div')
    subContainer[i].classList.add('subContainer');
    container.appendChild(subContainer[i]);
    for (let j = 0; j < 16; j++) {
        row[j] = document.createElement('div');
        row[j].classList.add('row')
        subContainer[i].appendChild(row[j]);
    }
}

const boxes = document.querySelectorAll('.row')
boxes.forEach((box) => {
    box.addEventListener('mouseover', () => {
        box.style.cssText = 'background: black';
    });
});