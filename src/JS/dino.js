const divDino = document.querySelector('.divDino');
const dino = document.querySelector('.dino');
const kaktus = document.querySelector('.kaktus');
const Voron = document.querySelector('.Voron');

document.addEventListener('keydown', jump);
console.log(kaktus.getBoundingClientRect());

let che = false;

function jump(e) {
  e.preventDefault();
  console.log(e.code);
  if (e.code === 'Space' && !che) {
    dino.classList.add('dinojump');
    console.log(dino.getBoundingClientRect());
    console.log(kaktus.getBoundingClientRect());
    che = true;
    setTimeout(() => {
      dino.classList.remove('dinojump');
      che = false;
      console.log(dino.getBoundingClientRect());
    }, 1000);
  }
}

//  function createObstacle() {
//             const obstacle = document.createElement('div');
//             obstacle.classList.add('obstacle');
//             const obstacleType = Math.random() > 0.5 ? 'rock.png' : 'cactus.png';
//             obstacle.style.background = url('${obstacleType}') no-repeat;
//             obstacle.style.left = window.innerWidth + 'px';
//             obstacles.appendChild(obstacle);
//             moveObstacle(obstacle);
//         }
//   function checkCollision(obstacle) {
//             const dinoRect = dino.getBoundingClientRect();
//             const obstacleRect = obstacle.getBoundingClientRect();
//             return !(
//                 dinoRect.top > obstacleRect.bottom
//                 dinoRect.bottom < obstacleRect.top
//                 dinoRect.right < obstacleRect.left ||
//                 dinoRect.left > obstacleRect.right
//             );
// }
