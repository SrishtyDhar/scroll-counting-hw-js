let body = document.querySelector('body')
let backToTop = document.querySelector('.backToTop');

const scrollProgress = (event) => {

let bodyHeight = body.clientHeight - window.innerHeight;
let scrollTop = window.scrollY;
let percentage = Math.round((100 / bodyHeight) * scrollTop);


backToTop.style.backgroundImage = `conic-gradient(blue 0% ${percentage}% ,white 0% ${percentage}%)`;

}

window.addEventListener('scroll', scrollProgress);




backToTop.addEventListener('click', () => {
    scroll({
        top: 0,
        behavior: 'smooth'
    })
})

// counter

let counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    let ending = counter.dataset.ending;
    let count = 0;
    let duration = 10


    let counting = setInterval( () => {
    count++;
    counter.innerHTML = count

    if(count >= ending) {
    clearInterval(counting)
    }

    },duration)
})