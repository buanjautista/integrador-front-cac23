const main = document.querySelector('main')
const sections = document.querySelectorAll('section')
const topNav = document.querySelectorAll('.nav-move')
const ticketsBox = document.getElementById('tickets-box')
const ticketsOpener = document.querySelectorAll('.tickets-open')

// Cambia de pagina activa al scrollear usando el nav
topNav.forEach(element => {
    element.addEventListener('click', () => addActiveNav(element))
})

const addActiveNav = (navElement) => { 
    topNav.forEach(element => {element.classList.remove('active')})
    navElement.classList.add('active')
}

// Cambia de active al scrollear la pagina
window.onscroll = () => {
    let currentSection = ""

    sections.forEach(section => {
        const sectionTop = section.offsetTop - (section.offsetHeight/2)

        if (pageYOffset >= sectionTop) {
            currentSection = section.getAttribute('id') + '-nav'
        }
    })
    currentSection = document.getElementsByClassName(currentSection)[0] 
    
    // Busca el elemento con una clase que coincida con el id del section
    addActiveNav(currentSection)
}



    // // Cambiar de pagina a Compra de Tickets y volver a main
    // const openTicketsWindow = () => {
    //     ticketsBox.style.display = 'block'
    //     main.style.display = 'none'
    //     document.querySelector('.tickets-open').classList.add('active')
    //     for (let i = 0; i < topNav.length; i++) {
    //         topNav[i].classList.remove('active')
    //     }
    //     activateTicketNav(0)
    // }
    
    // const closeTicketsWindow = () => {
    //     ticketsBox.style.display = 'none'
    //     main.style.display = 'block'
    //     document.querySelector('.tickets-open').classList.remove('active')
    //     activateTicketNav(1)
    // }
    
    // // Para volver a la pagina principal activando los nav
    
    // for (let i = 0; i < topNav.length; i++) {
    //     topNav[i].addEventListener('click',closeTicketsWindow)
    // }
    
    // const activateTicketNav = (option) => {
    //     for (let i = 0; i < ticketsOpener.length; i++) {
    //         option ? ticketsOpener[i].addEventListener('click',openTicketsWindow) : ticketsOpener[i].removeEventListener('click',openTicketsWindow)
    //     }
    // }
    // activateTicketNav(1)