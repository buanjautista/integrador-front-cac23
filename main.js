const main = document.querySelector('main')
const topNav = document.querySelectorAll('a.nav-move')
const ticketsBox = document.getElementById('tickets-box')
const ticketsOpener = document.querySelectorAll('.tickets-open')


// Cambiar de pagina a Compra de Tickets y volver a main
const openTicketsWindow = () => {
    ticketsBox.style.display = 'block'
    main.style.display = 'none'
    document.querySelector('.tickets-open').classList.add('active')
    for (let i = 0; i < topNav.length; i++) {
        topNav[i].classList.remove('active')
    }
    activateTicketNav(0)
}

const closeTicketsWindow = () => {
    ticketsBox.style.display = 'none'
    main.style.display = 'block'
    document.querySelector('.tickets-open').classList.remove('active')
    activateTicketNav(1)
}

// Para volver a la pagina principal activando los nav

for (let i = 0; i < topNav.length; i++) {
    topNav[i].addEventListener('click',closeTicketsWindow)
}

const activateTicketNav = (option) => {
    for (let i = 0; i < ticketsOpener.length; i++) {
        option ? ticketsOpener[i].addEventListener('click',openTicketsWindow) : ticketsOpener[i].removeEventListener('click',openTicketsWindow)
    }
}
activateTicketNav(1)