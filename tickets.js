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
const botonBorrar = document.querySelector('#borrar-tix')
const botonResumen = document.querySelector('#resumen-tix')
const closeTicketModal = document.querySelector('#close-tix-modal')
const precioBoxConfirm = document.querySelector('#precio-confirmacion')
const cantidadBoxConfirm = document.querySelector('#cantidad-tix-confirmacion')
const modalTickets = document.querySelector('#ticket-modal')


// Ventana de resumen 

const resumenModal = () => {
    // check basico de datos de form
    let inputList = document.querySelectorAll('input')
    for (i = 0; i < inputList.length; i++){
        if (!inputList[i].value) { 
            alert('Por favor completar los datos requeridos')
            checkInputCompletion(inputList[i])
            return false
        }
        console.log(inputList[i].value)
    }
    modalTickets.showModal()
    cantidadBoxConfirm.innerText = cantidadBox.value
    precioBoxConfirm.innerText = checkPrecio()
}
const closeResumen = () => {
    modalTickets.close()
}

closeTicketModal.addEventListener('click', closeResumen)
botonBorrar.addEventListener('click', resetForm)
botonResumen.addEventListener('click', resumenModal)



// Cajas de descuento

const descuentoBox1 = document.getElementById('descuento1')
const descuentoBox2 = document.getElementById('descuento2')
const descuentoBox3 = document.getElementById('descuento3')

const descuentoColor = ['bg-primary', 'bg-info', 'bg-warning']
const addEventos = (elemento, indexColor) => {
    elemento.addEventListener('mouseover',() => setBackgroundEffect(elemento,1,descuentoColor[indexColor]))
    elemento.addEventListener('mouseout',() => setBackgroundEffect(elemento,0,descuentoColor[indexColor]))
    elemento.addEventListener('click', () => changeCategory(elemento))
}
addEventos(descuentoBox1,0)
addEventos(descuentoBox2,1)
addEventos(descuentoBox3,2)


const changeCategory = (element) => { 
    // Cambia el valor-descuento de la categoria al apretar sobre las cajas informativas
    let categoria = element.children[0].textContent
    const valorCategoria = descuentos.findIndex(index => index.clase == categoria)
    categoriaBox.value = valorCategoria
}

const setBackgroundEffect = (element,state,background) => {
    switch (state){
        default:
        case 0:
            element.classList.remove(background)
            for (const child of element.children) {
                child.classList.remove(background)
                child.classList.remove('text-white')
            }
            break;
        case 1:
            element.classList.add(background)
            for (const child of element.children) {
                child.classList.add(background)
                child.classList.add('text-white')
            }
            break;
    }
}
