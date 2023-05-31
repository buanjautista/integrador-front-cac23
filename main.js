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
// window.onscroll = () => {
//     let currentSection = ""

//     sections.forEach(section => {
//         const sectionHeight = section.scrollHeight
//         const sectionTop = section.offsetTop
//         if (pageYOffset >= sectionTop) {
//             currentSection = section.getAttribute('id')
//             console.log(currentSection)
//         }
//     })
// }

const inputList = document.querySelectorAll('input')
const checkInputCompletion = (input) => {
    input.value ? input.classList.remove('incomplete-form') : input.classList.add('incomplete-form')
}
inputList.forEach(input => {
    input.addEventListener('change', () => checkInputCompletion(input))
    input.addEventListener('focusout', () => checkInputCompletion(input))
})


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