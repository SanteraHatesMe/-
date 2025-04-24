const mobileMenu = document.querySelector('.mobile-menu');
const mobileBackdrop = document.querySelector('.mobile-backdrop');
const menuBtnOpen = document.querySelector('.menu-btn-open');
const menuBtnClose = document.querySelector('.menu-btn-close');

const toggleMenu = (event) => {
    event.stopPropagation();
    const isOpen = mobileMenu.classList.contains('is-open');
    mobileMenu.classList.toggle('is-open');
    mobileBackdrop.classList.toggle('is-open');
    if (!isOpen) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
};

menuBtnOpen.addEventListener('click', toggleMenu);

menuBtnClose.addEventListener('click', toggleMenu);

mobileBackdrop.addEventListener('click', (event) => {
    if (event.target === mobileBackdrop) {
        toggleMenu(event);
    }
});

document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', toggleMenu);
});