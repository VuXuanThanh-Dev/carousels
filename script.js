const pre = document.getElementById('pre');
const images = document.querySelectorAll('img');
const next = document.getElementById('next');

const group = document.querySelector('.group-img');

let currentIndex = 0;
var id = setInterval(changeImage, 3000);


pre.addEventListener('click', () => {
    clearInterval(id);
    currentIndex--;
    console.log(currentIndex);
    if(currentIndex <= 0) {
        currentIndex =0;
    }
    id = setInterval(changeImage, 3000);
    group.setAttribute('style', `transform: translateX(${-currentIndex * 450}px)`);

});

next.addEventListener('click', () => {
    clearInterval(id);
    id = setInterval(changeImage, 3000);
    currentIndex++;
    console.log(currentIndex);
    if(currentIndex > 3) { 
        currentIndex = 1;
    }
    group.setAttribute('style', `transform: translateX(${-currentIndex * 450}px)`);

});




function changeImage() {
    currentIndex++;
    if(currentIndex > 3){
        currentIndex = 0;
    }
    group.setAttribute('style', `transform: translateX(${-currentIndex * 450}px)`);
}
