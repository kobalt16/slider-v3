const image = document.querySelectorAll('.slider .slider-line .img');
const sliderLine = document.querySelector('.slider-line');
const dots = document.querySelectorAll('.dot');
let count = 0;
let width;
let dotIndex = 0;


function init() {
    console.log('resize');
    width = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = width * image.length + 'px';
    image.forEach( item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    });
    rollSlider();
}

window.addEventListener('resize', init);
init();

document.querySelector('.slider-prev').addEventListener('click', function() {
    count--;
    dotIndex -= 1;
    if (count < 0) {
        count = image.length -1;
        dotIndex = (dots.length - 1)
    }
    rollSlider();
    thisSlide(dotIndex);
});
document.querySelector('.slider-next').addEventListener('click', function() {
    count++;
    dotIndex += 1;
    if (count >= image.length) {
        count = 0;
        dotIndex = 0;
    }
    rollSlider();
    thisSlide(dotIndex);
});

function rollSlider() {
    sliderLine.style.transform = 'translate(-' + count * width + 'px)';
}

const thisSlide = (index) => {
    for (let dot of dots) {
        dot.classList.remove('active')
    }
    dots[index].classList.add('active')
}
// function 
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        count = index
        rollSlider()
        dotIndex = index
        thisSlide(dotIndex)
    })
})
