const buttons = document.querySelectorAll('.works-slider-selector');

buttons.forEach(button =>{
    button.addEventListener('click',()=>{
        button.classList.toggle('selected')
    })
})