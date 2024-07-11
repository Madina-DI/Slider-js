const pointerRight = document.querySelector('.right-pointer');
const pointerLeft = document.querySelector('.left-pointer');
const fotoSlider = document.querySelector('.slider-foto');
const city = document.querySelector('.description-loc .caption-txt');
const time = document.querySelector('.description-time .caption-txt');
const area = document.querySelector('.description-details .caption-txt');
const circleDots = document.querySelectorAll('.circle');
const menu = document.querySelectorAll('.menuItem');

const entities = [
    {
        city:'Rostov-on-Don \n LCD admiral',
        time:'3.5 months',
        area:'81m2',
        img: "url('./images/image.png')"
    },
    {
        city:'Sochi \n Thieves',
        time:'4 months',
        area:'105 m2',
        img: "url('./images/img_sec.png')"
    },
    {
        city:'Rostov-on-Don \n Patriotic',
        time:'3 months',
        area:'93 m2',
        img: "url('./images/img_thrd.png')"
    }
]

let index = 0;

const setEntity = (index) => {
    if (index >= 0 && index < entities.length) {
        city.innerText = entities[index].city;
        time.innerText = entities[index].time;
        area.innerText = entities[index].area;
        fotoSlider.style.backgroundImage = entities[index].img;
        updateCircle(index);
        updateMenu(index);
    }

index += 1;
};

const updateCircle = (index) => {
    circleDots.forEach((circle, i) => {
        circle.classList.toggle('active', i === index);
    });
};

const updateMenu = (index) => {
    menu.forEach((menuItem, i) => {
        menuItem.classList.toggle('active', i === index);
    });
    menu.forEach((menuItem) => {
        menuItem.addEventListener("click", function () {
            const activeItem = fotoSlider.querySelector(".active");
    });
    });
};

let currentIndex = 0;

pointerRight.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : entities.length - 1;
    setEntity(currentIndex);
});

pointerLeft.addEventListener('click', () => {
    currentIndex = (currentIndex < entities.length - 1) ? currentIndex + 1 : 0;
    setEntity(currentIndex);
});

setEntity(currentIndex);



console.log(setEntity);




