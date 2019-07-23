const cookieAlert = document.querySelector('.cookiealert')

const acceptCookies = document.querySelector('.acceptcookies')

acceptCookies.addEventListener(
    'click',
    function() {
        cookieAlert.classList.remove('show')
        localStorage.setItem('isHidden', 'true')
    }
)


if (!localStorage.getItem('isHidden')) {
    cookieAlert.classList.add('show')
}