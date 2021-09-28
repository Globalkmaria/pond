const body = document.querySelector('.body');
let id = 1;
function start() {
  body.addEventListener('click', (e) => {
    console.log(e.x);
    const x = e.x;
    const y = e.y;
    const new_circle = document.createElement('div');
    new_circle.className = 'circle added-circle';
    new_circle.id = id++;
    new_circle.style.top = `${y - 100}px`;
    new_circle.style.left = `${x - 100}px`;

    const randomSize = Math.floor(Math.random() * 70 + 30);

    const circleBtn = document.createElement('span');
    circleBtn.className = 'circle-btn';
    circleBtn.style.width = `${randomSize}px`;
    circleBtn.style.height = `${randomSize}px`;

    const circleBack1 = document.createElement('span');
    circleBack1.className = 'circle__back circle__back-1';
    circleBack1.style.width = `${randomSize}px`;
    circleBack1.style.height = `${randomSize}px`;

    const circleBack2 = document.createElement('span');
    circleBack2.className = 'circle__back circle__back-2';
    circleBack2.style.width = `${randomSize}px`;
    circleBack2.style.height = `${randomSize}px`;

    new_circle.append(circleBtn);
    new_circle.append(circleBack1);
    new_circle.append(circleBack2);
    body.append(new_circle);

    setTimeout(() => {
      new_circle.style.opacity = 0;
    }, 3000);
    setTimeout(() => {
      body.removeChild(new_circle);
    }, 3500);
  });
}
window.addEventListener('load', start);
