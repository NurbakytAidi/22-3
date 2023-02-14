const box = document.querySelector('.box')

let positionX = 0
let positionY = 0

const move = () => {
    if (positionX <= 449 && positionY <= 0) {
        positionX++
        box.style.left = `${positionX}px`
        setTimeout(move, 1)
    } else if (positionX >= 449 && positionY <= 449) {
        positionY++
        box.style.top = `${positionY}px`
        setTimeout(move, 1)
    } else if (positionX >= 0 && positionY >= 449) {
        positionX--
        box.style.left = `${positionX}px`
        setTimeout(move, 1)
    } else if (positionX <= 0 && positionY >= 0) {
        positionY--
        box.style.top = `${positionY}px`
        setTimeout(move, 1)
    }
}

move()





// DZ_2

const buttonStop = document.querySelector('#buttonStop');

const buttonStart = document.querySelector('#buttonStart');

const counter = document.querySelector('#result');
counter.innerHTML = '0';

let timerId = setInterval(function() {
    counter.innerHTML = parseInt(counter.innerHTML) + 1;
}, 1000);
buttonStop.addEventListener('click', function() {
    clearInterval(timerId);
});
buttonStart.addEventListener('click', function() {
    timerId = setInterval(function() {
        counter.innerHTML = parseInt(counter.innerHTML) + 1;
    }, 1000);
});




