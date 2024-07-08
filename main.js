const pointerRight = document.querySelector('.right-pointer');
const pointerLeft = document.querySelector('.left-pointer');
const fotoSlider = document.querySelector('.slider-foto');
const city = document.querySelector('.description-loc .caption-txt');
const time = document.querySelector('.description-time .caption-txt');
const area = document.querySelector('.description-details .caption-txt');

const entities = [
    {
        city:'Rostov-on-Don \n LCD admiral',
        time:'3.5 months',
        area:'81m2',
        // img:'./images/image.png',
        img: "url('./images/image.png')"
    },
    {
        city:'Sochi \n Thieves',
        time:'4 months',
        area:'105 m2',
        // img:'https://s3-alpha-sig.figma.com/img/2b61/d91d/0d504ae5ddf821a6b6600ee9bd6d98fa?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gqHUK4gtVFfjVgw7JCYPPyHayUDnvminzC5PgOYQ-XONk-M-GtK9ojGXkixSgjOoag4XoROFD0zSQzSBemnI1zRiJ9c7ar~5SlL0YoKgko50wt0aOOLjfdp6VuHUjUzvQpm6CnxujtNYRWhkG57zLX~Cr2m89lWkYiJAXOm8MY0oKAGn4w3lmYdFFcit~gT3iMAxeUf~anW3RSswNfooAyJkb8s-OVC44gCjG1YVoQslWMXeFwEUA2cUETNR1mvRZ79Vm2mdH~QQwyXw473RUhi8ZIbir2ex5~Rwg7xt7m8eGPadJXGv0amuKl98FofioZKlp6bbwoqVEMcbNPATkg__',
        img: "url('./images/img_sec.png')"
    },
    {
        city:'Rostov-on-Don \n Patriotic',
        time:'3 months',
        area:'93 m2',
        // img:'https://s3-alpha-sig.figma.com/img/2882/358d/e0332eab0ee26bbd0cebfe5592a469dc?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mFBfU2K6KlDif9x~oimnWyrD5LPDYXsza-B4Bx05S1PcsvHj5EzGZ-6uOft4Q4WPp0kfKCKL~1Jb3mXO4tDjvSNtJfSuUGMbeH639HkHudgVEBq7w8qdx6Xoq7V2P0-gm1NlUjcsrYF4Pzx53o1zNFFzfbW9cPqOImCfUpscILpFf-fNGg5X4eSpdUuhqe~UHlgIFEvRNeN3l4x45qyGtueotMKqLUfos6XqaIJvFj96Oo801O~TjE3qYXtIaXviLo0O~hMhdaKup7PEqv39spHv2cG9tDgQfspQKTfH1wyxhfU8cu4O5RviSxqZrUPdYYkII08ZNlG1YPg5hl9wqw__',
        img: "url('./images/img_thrd.png')"
    }
]

let index = 0;

// const setEntity = () => {
//     if (index === entities.length) index = 0;
//     if (index < 0) index = entities.length;
// if (index >= 0) {
//     city.innerText = entities[index].city;
//     time.innerText = entities[index].time;
//     area.innerText = entities[index].area;
//     fotoSlider.src = entities[index].img;
// }

const setEntity = (index) => {
    if (index >= 0 && index < entities.length) {
        city.innerText = entities[index].city;
        time.innerText = entities[index].time;
        area.innerText = entities[index].area;
        fotoSlider.style.backgroundImage = entities[index].img;
    }

index += 1;

};

let currentIndex = 0;

pointerLeft.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : entities.length - 1;
    setEntity(currentIndex);
});

pointerRight.addEventListener('click', () => {
    currentIndex = (currentIndex < entities.length - 1) ? currentIndex + 1 : 0;
    setEntity(currentIndex);
});

setEntity(currentIndex);

console.log(setEntity);