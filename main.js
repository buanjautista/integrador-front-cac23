const ticketsBox = document.getElementById('tickets-box')
const main = document.querySelector('main')
const topNav = document.querySelectorAll('a.nav-move')
const ticketsOpener = document.querySelectorAll('.tickets-open')


const openTicketsWindow = () => {
    console.log('Si funciona')
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

for (let i = 0; i < topNav.length; i++) {
    topNav[i].addEventListener('click',closeTicketsWindow)
}


const activateTicketNav = (option) => {
    for (let i = 0; i < ticketsOpener.length; i++) {
        option ? ticketsOpener[i].addEventListener('click',openTicketsWindow) : ticketsOpener[i].removeEventListener('click',openTicketsWindow)
    }
}

activateTicketNav(1)


const categoriaBox = document.getElementById('categoria-tix')
const cantidadBox = document.getElementById('cantidad-tix')
const precioBox = document.getElementById('precio-total-tix')
const precioTicket = 200

const descuentos = [80, 50, 15]

const checkPrecio = () => {
    let precioTotal
    cantidad = Number(cantidadBox.value)
    console.log(cantidad, descuentos[categoriaBox.value])
    descuentoActual = ((100 - descuentos[categoriaBox.value]) * 0.01)
    console.log(descuentoActual)
    if (cantidad) {
             precioTotal = ((cantidad * precioTicket) * descuentoActual) 
             precioBox.innerText = precioTotal
             console.log(precioTotal)
    }
    else {
        precioBox.innerText = 0
    }
}

categoriaBox.addEventListener('change',checkPrecio)
cantidadBox.addEventListener('input',checkPrecio)