const modal = document.querySelector('.backdrop');
const modalBtnOpens = document.querySelectorAll('.modal-btn-open');
const modalBtnClose = document.querySelector('.modal-btn-close');

const toggleModal = (event) => {
    if (event) {
        event.stopPropagation();
    }

    const isHidden = modal.classList.contains('is-hidden');
    modal.classList.toggle('is-hidden');

    if (isHidden) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
};

modalBtnOpens.forEach(btn => {
    btn.addEventListener('click', (event) => {
        event.preventDefault();
        toggleModal();
    });
});

modalBtnClose.addEventListener('click', toggleModal);

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        toggleModal();
    }
});