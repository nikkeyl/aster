import { bodyLockStatus, bodyLockToggle, bodyLock, bodyUnlock } from "@js/base/bodyLockToggle";

export function menuInit() {
    if (document.querySelector('.icon-menu')) {
        document.addEventListener('click', e => {
            if (bodyLockStatus && e.target.closest('.icon-menu')) {
                bodyLockToggle();
                document.documentElement.classList.toggle('menu-open');
            } else if (bodyLockStatus && !e.target.closest('.sidebar')) {
                document.documentElement.classList.remove('menu-open');
                bodyUnlock();
            }
        });
        document.addEventListener('keyup', e => {
            if (e.code === 'Escape') {
                document.documentElement.classList.remove('menu-open');
            }
        });
    }
}
export function menuOpen() {
    bodyLock();
    document.documentElement.classList.add('menu-open');
}
export function menuClose() {
    bodyUnlock();
    document.documentElement.classList.remove('menu-open');
}