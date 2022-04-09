


var car = document.getElementById('car')

let position = 50
let positionUp = 40
let positionRight = 20

// do {
//     let newPosition = position + 2
//     car.style.left = newPosition +'px'; 
    
//     position ++
// } while (position < 100);

const newPosition = () => position++
const newPositionUp = () => positionUp++
const newPositionRight = () => positionRight++
const moveCar = () => car.style.left = newPosition() +'px';
const moveCarUp = () => car.style.bottom = newPositionUp() +'px';
const moveCarLeft = () => car.style.right = newPositionRight() +'px';

setInterval(() => {
    // console.log(newPosition())
    newPosition() <= 1300 ? moveCar() : null 
    if (newPosition() === 1300) {
        car.classList.add('rotate360')
        car.style.bottom = "40px" 
        
        setInterval(() => {
            newPositionUp() <= 580 ? moveCarUp() : null
            if(newPositionUp() >= 580){
                car.classList.remove('rotate360')
                car.classList.add('rotate270')

                // setInterval(() => {
                //     car.classList.add('carLeft')
                //     car.style.bottom = 'initial'
                //     // car.style.left = 'initial'
                // }, 15);
            }
        }, 11);
    }
}, 10);

