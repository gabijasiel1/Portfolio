document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.project, .event');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    }, {
        threshold: 0.1
    });

    elements.forEach(element => {
        observer.observe(element);
    });
});

// Ocultar pantalla de bienvenida después de la animación
window.addEventListener('DOMContentLoaded', (event) => {
    const welcomeScreen = document.getElementById('welcome-screen');
    setTimeout(() => {
        welcomeScreen.style.opacity = '0';
        setTimeout(() => {
            welcomeScreen.style.display = 'none';
        }, 1000); // Ajusta este valor según la duración de tu animación
    }, 3000); // Duración total de la animación (zoom y fade out)
});

// console.log('Hola');
const ipad = window.matchMedia('screen and (max-width: 767px)');
const menu = document.querySelector('.menu');
// console.log(menu)
const burgerButton = document.querySelector('#burger-menu')
// console.log(burgerButton)


ipad.addListener(validation)

function validation(event){
    if (event.matches) {
        burgerButton.addEventListener('click', hideShow)
    }else{
        burgerButton.removeEventListener('click', hideShow)
    }
}
validation(ipad);

function hideShow(){
    if (menu.classList.contains('is-active')){
     menu.classList.remove('is-active');
    }else{
     menu.classList.add('is-active');
    }
}