const nombreBox = document.querySelector('#nombre-tix')
const apellidoBox = document.querySelector('#apellido-tix')
const correoBox = document.querySelector('#correo-tix')
const cantidadBox = document.querySelector('#cantidad-tix')
const categoriaBox = document.querySelector('#categoria-tix')
const precioBox = document.querySelector('#precio-total-tix')
const ticketsForm = document.querySelector('#tickets-form')
const precioTicket = 200

const descuentos = [{
    clase: "Sin descuento",
    descuento: "0"
}, {
        clase: "Estudiante",
        descuento: "80"
    },
    { 
        clase: "Trainee",
        descuento:"50"
    }, 
    {
        clase: "Junior",
        descuento: "15"
    }
    ]


const addCategorias = () => {
    let cantidadCategorias = descuentos.length
    categoriaBox.innerHTML = ""
    for (let i = 0; i < cantidadCategorias; i++){
        categoriaBox.innerHTML += '<option value="' + i + '">' + descuentos[i].clase + '</option>'
    }
}
addCategorias()
    
const checkPrecio = () => {
    let precioTotal = 0
    cantidad = cantidadBox.value
    if (cantidad < 1) { cantidad = 0 }

    descuentoActual = ((100 - descuentos[categoriaBox.value].descuento) * 0.01)

    if (cantidad) {
             precioTotal = ((cantidad * precioTicket) * descuentoActual) 
             precioBox.innerText = precioTotal
    }
    else {
        precioBox.innerText = 0
    }
    return precioTotal
}

// Eventos de cada 

categoriaBox.addEventListener('change',checkPrecio)
cantidadBox.addEventListener('input', checkPrecio)


const resetForm = () => {
    ticketsForm.reset()
    cantidadBox.value = 0
    precioBox.innerText = 0
}
const borrarBoton = document.querySelector('#borrar-tix')
const resumenBoton = document.querySelector('#resumen-tix')
const closeTicketModal = document.querySelector('#close-tix-modal')
const precioBoxConfirm = document.querySelector('#precio-confirmacion')
const cantidadBoxConfirm = document.querySelector('#cantidad-tix-confirmacion')
const modalTickets = document.querySelector('#ticket-modal')


// Ventana de resumen 

const resumenModal = () => {
    modalTickets.showModal()
    cantidadBoxConfirm.innerText = cantidadBox.value
    precioBoxConfirm.innerText = checkPrecio()
}
const closeResumen = () => {
    modalTickets.close()
}

closeTicketModal.addEventListener('click', closeResumen)
borrarBoton.addEventListener('click', resetForm)
resumenBoton.addEventListener('click', resumenModal)
