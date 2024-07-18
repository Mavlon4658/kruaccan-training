let checkbox = document.querySelectorAll('.checkbox');

if (checkbox.length) {
    checkbox.forEach(el => {
        let inp = el.querySelector('input[type="checkbox"]');
        
        el.onclick = () => {
            inp.click();
        }
    })
}

const accordion = document.querySelectorAll('.accordion');

accordion.forEach((item) => {
    const header = item.querySelector('.accordion_head__btn');
    const content = item.querySelector('.accordion_body__wrap');

    header.addEventListener('click', () => {
        content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + 'px';
        header.classList.toggle('active')
    });
});

let modalCheckbox = document.querySelectorAll('.modal__content ul li');
if (modalCheckbox.length) {
    modalCheckbox.forEach(el => {
        let inp = el.querySelector('input[type="checkbox"]');
        el.onclick = () => {
            inp.click();
        }
    })
}

let modal = document.querySelector('.modal'),
    modalClose = document.querySelector('.modal__close'),
    modalOpen = document.querySelectorAll('.moda__open');

if (modalOpen.length) {
    modalOpen.forEach(el => {
        el.onclick = e => {
            e.preventDefault();
            modal.classList.add('active');
        }
    })

    modalClose.onclick = () => {
        modal.classList.remove('active');
        modal.classList.add('end-active');
        setTimeout(() => {
            modal.classList.remove('end-active');
        }, 300);
    }
}