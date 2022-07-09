const drone = document.getElementById('drone');
const droneBox = document.getElementById('drone-service');

droneBox.addEventListener('click',()=>{
    drone.classList.add('drone-animation');
    droneBox.style.cursor = 'default';
})