
//nested loops to create 16x16 grid
let subContainer = [];
let row = [] 
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

const clear = document.querySelector('.clear');

//assigns gridboxes to variables
let boxes = document.querySelectorAll('.row')
let subs = document.querySelectorAll('.subContainer')

//change slider value
let slide = document.querySelector('.slider');
let gridSize = document.querySelector('.gridSize');
gridSize.textContent = `${slide.value} x ${slide.value}`;

//changes color of individual box in grid upon mouse hover
//dynamic adjustmend of box width and height (max-width/max-height = 480px)
boxes.forEach((box) => {
    box.style.cssText = `width: ${480/slide.value}px; height: ${480/slide.value}px`;

    box.addEventListener('mouseover', () => {
        box.style.cssText = `background: black; width: ${480/slide.value}px; height: ${480/slide.value}px`;
    });
    //resets color of all boxes back to white
    clear.addEventListener('click', ()=> {
        box.style.cssText = `background: white; width: ${480/slide.value}px; height: ${480/slide.value}px`;
    });

});

slide.addEventListener('change', () => {
    gridSize.textContent = `${slide.value} x ${slide.value}`;
    
    //clear array
    subContainer = []
    row = []

    //deletes old grid
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }

    //creates grid of new size
    for (let i = 0; i < slide.value; i++) {
        subContainer[i] = document.createElement('div')
        subContainer[i].classList.add('subContainer');
        container.appendChild(subContainer[i]);
        for (let j = 0; j < slide.value; j++) {
            row[j] = document.createElement('div');
            row[j].classList.add('row')
            subContainer[i].appendChild(row[j]);
        }
    }

    //reassigns variables to new box
    boxes = document.querySelectorAll('.row')
    subs = document.querySelectorAll('.subContainer')

    //changes color of individual box in grid upon mouse hover
    //dynamic adjustmend of box width and height (max-width/max-height = 480px)
    boxes.forEach((box) => {

        box.style.cssText = `width: ${480/slide.value}px; height: ${480/slide.value}px`;
        box.addEventListener('mouseover', () => {
            box.style.cssText = `background: black; width: ${480/slide.value}px; height: ${480/slide.value}px`;
        });
        //resets color of all boxes back to white
        clear.addEventListener('click', ()=> {
            box.style.cssText = `background: white; width: ${480/slide.value}px; height: ${480/slide.value}px`;
        });
    });
});


