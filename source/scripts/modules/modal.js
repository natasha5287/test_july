const btnSubmit = document.querySelector('.request__btn');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__btn')

btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.add('opened');
    
});

modalClose.addEventListener('click', () => {
    modal.classList.remove('opened');
})




