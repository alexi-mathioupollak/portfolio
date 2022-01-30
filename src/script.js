let colors = ['#007D59', '#EBC238', '#A2536A']

function colorChange() {
    let e = document.getElementById('pf');
    let line = document.querySelector('.yellow_line');

    let id = Math.floor(Math.random() * 3);

    /*line[0].style.transition = 'color 500ms ease';
    line[0].style.color = colors[id];
    line.forEach(function (y) {
        y.style.color = 'red'
    })*/

    e.style.transition = 'color 500ms ease';
    e.style.color = colors[id];
}

function nextInt(n) {
    if (Number(n) == 3) {
        return 0;
    } else {
        return Number(n)+1;
    }
}

const ratio = 0
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
}

const handleIntersect = function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
            if (entry.target === document.querySelector('.lastname')) {
                entry.target.style.transitionDelay = '.4s'
            }
            if (entry.target === document.querySelector('.portfolio')) {
                entry.target.style.transitionDelay = '.6s'
                entry.target.style.transform = 'translateY(30px)'
            } else if (entry.target === document.querySelector('.text_aboutme')) {
                entry.target.style.transitionDelay = '.4s';
            }
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
        } else {
            console.log('invisible')
        }
        console.log(entry.intersectionRatio)
    })
    console.log('handleIntersect')
}

const animate = document.querySelectorAll('.reveal')
console.log(animate)
const observer = new IntersectionObserver(handleIntersect, options)

animate.forEach(function (r) {
    observer.observe(r)
})

function reduceMenu() {
    let menu = document.getElementById('navbar')
    if (window.offsetTop > 10) {
        menu.classList.remove('navbar')
        menu.classList.add('navbar_scroll')
    } else {
        console.log('non')
    }
}

let interval = setInterval(colorChange, 1000);