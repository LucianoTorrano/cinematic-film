const drone = document.getElementById('drone');
const droneBox = document.getElementById('drone-service');
let animationFinished = false;

droneBox.addEventListener('mouseover',()=>{
    if(!animationFinished){
        droneBox.style.transform = 'scale(1.1)'
        droneBox.addEventListener('click',()=>{
            drone.classList.add('drone-animation');
            droneBox.style.cursor = 'default';
            droneBox.style.transform = 'scale(1)'
            animationFinished = true;
        }
    )}
});
droneBox.addEventListener('mouseout',()=>{
    droneBox.style.transform = 'scale(1)'
});
