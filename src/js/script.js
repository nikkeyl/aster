import { bodyLockStatus, bodyLock, bodyUnlock } from "@js/base/bodyLockToggle";
const sidebar = document.querySelector('.sidebar') && document.querySelector('.sidebar-wrapper');
const width = window.innerWidth;

if (sidebar && width > 712) {
    document.addEventListener('mouseover', e => {
        if (bodyLockStatus && e.target.closest('.sidebar') || e.target.closest('.sidebar-wrapper')) {
            bodyLock(0);
        } else {
            bodyUnlock(0);
        }
    });
}

document.addEventListener('click', e => {
    const width = window.innerWidth;
    const search = document.querySelector('.search');
    if (e.target.closest('.search__button--1') && width < 480) {
        search.classList.toggle('hide');
    } else if (!e.target.closest('.search__button--1') && !e.target.closest('.search')) {
        search.classList.add('hide');
    }
    // e.preventDefault();
});

function commentLength() {
    document.addEventListener('click', e => {
        const comment = document.querySelector('.comment');

        if (e.target.closest('.comment__delete') && comment) {
            comment.remove();
        }

        const comments = document.querySelector('.comments__more');
        const number = document.querySelector('.show-all__quantity');
        if (comments && number) {
            const quantity = comments.children.length;
            number.innerHTML = quantity;
        }
    });
}

commentLength();