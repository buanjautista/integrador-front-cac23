const nameBox = document.querySelector('#nombre-tix')
const lastNameBox = document.querySelector('#apellido-tix')
const mailBox = document.querySelector('#correo-tix')
const quantityTixBox = document.querySelector('#cantidad-tix')
const categoryBox = document.querySelector('#categoria-tix')
const priceBox = document.querySelector('#precio-total-tix')
const ticketsForm = document.querySelector('#tickets-form')
const ticketPrice = 200

const discounts = [{
        class: "Sin descuento",
        discount: "0"
    }, {
        class: "Estudiante",
        discount: "80"
    },
    { 
        class: "Trainee",
        discount:"50"
    }, 
    {
        class: "Junior",
        discount: "15"
    }
    ]


const addCategory = () => {
    let totalCategory = discounts.length
    categoryBox.innerHTML = ""
    for (let i = 0; i < totalCategory; i++){
        categoryBox.innerHTML += '<option value="' + i + '">' + discounts[i].class + '</option>'
    }
}
addCategory()


// Aplica el descuento dependiendo la categoria

const checkPrice = () => {
    let totalPrice = 0
    quantity = quantityTixBox.value
    if (quantity < 2) { quantity = 1 }

    currentDiscount = ((100 - discounts[categoryBox.value].discount) * 0.01)

    if (quantity) {
             totalPrice = ((quantity * ticketPrice) * currentDiscount) 
             priceBox.innerText = totalPrice
    }
    else {
        priceBox.innerText = 0
    }
    return totalPrice
}

// Eventos de cambio categoria 

categoryBox.addEventListener('change',checkPrice)
quantityTixBox.addEventListener('input', checkPrice)


const resetForm = () => {
    ticketsForm.reset()
    quantityTixBox.value = 1
    // priceBox.innerText = 0
    checkPrice()
    
    updateFormAnimations()
}

const updateFormAnimations = () => {
    var animation = 'update-form-fx'
    quantityTixBox.classList.add(animation);
    nameBox.classList.add(animation);
    lastNameBox.classList.add(animation);
    mailBox.classList.add(animation);
    categoryBox.classList.add(animation);

    mailBox.addEventListener('animationend', () => {
        quantityTixBox.classList.remove(animation);
        nameBox.classList.remove(animation);
        lastNameBox.classList.remove(animation);
        mailBox.classList.remove(animation);
        categoryBox.classList.remove(animation);
    });
}

window.onload = () => {
    resetForm()
}

const clearButton = document.querySelector('#borrar-tix')
const summaryButton = document.querySelector('#resumen-tix')
const closeTicketModal = document.querySelector('#close-tix-modal')

const priceBoxConfirm = document.querySelector('#precio-confirmacion')
const quantityBoxConfirm = document.querySelector('#cantidad-tix-confirmacion')
const modalTickets = document.querySelector('#ticket-modal')


// Ventana de resumen 

const summaryModal = () => {
    // check basico de datos de form
    let inputList = document.querySelectorAll('input')
    for (i = 0; i < inputList.length; i++){
        if (!inputList[i].value) { 
            alert('Por favor completar los campos requeridos')
            checkInputCompletion(inputList[i])
            return false
        }
    }
    if (quantityTixBox.value == 0) { 
        alert('Por favor añadir cantidad de tickets')
        return false 
    }
    modalTickets.showModal()
    quantityBoxConfirm.innerText = quantityTixBox.value
    priceBoxConfirm.innerText = checkPrice()
}
const closeResumen = () => {
    modalTickets.close()
}

closeTicketModal.addEventListener('click', closeResumen)
clearButton.addEventListener('click', resetForm)
summaryButton.addEventListener('click', summaryModal)

const placeOrder = () => {
    alert('Gracias por tu compra!')

    closeResumen()
}
const orderConfirmButton = document.querySelector('#order-confirm-btn')
orderConfirmButton.addEventListener('click', placeOrder)


// Cajas de descuento

const discountBox1 = document.getElementById('descuento1')
const discountBox2 = document.getElementById('descuento2')
const discountBox3 = document.getElementById('descuento3')

const discountBoxColor = ['bg-primary-sutil', 'bg-info-sutil', 'bg-warning-sutil']
const discountBoxEvents = (element, indexColor) => {
    element.addEventListener('mouseover',() => setBackgroundEffect(element,1,discountBoxColor[indexColor]))
    element.addEventListener('mouseout',() => setBackgroundEffect(element,0,discountBoxColor[indexColor]))
    element.addEventListener('click', () => changeCategory(element))
}
discountBoxEvents(discountBox1,0)
discountBoxEvents(discountBox2,1)
discountBoxEvents(discountBox3,2)


const changeCategory = (element) => { 
    // Cambia el valor-descuento de la categoria al apretar sobre las cajas informativas
    let category = element.children[0].textContent
    const valorCategory = discounts.findIndex(index => index.class == category)
    categoryBox.value = valorCategory
    checkPrice()
}

const setBackgroundEffect = (element,state,background) => {
    switch (state){
        default:
        case 0:
            element.classList.remove(background)
            for (const child of element.children) {
                // child.classList.remove(background)
                child.classList.remove('text-white')
            }
            break;
        case 1:
            element.classList.add(background)
            for (const child of element.children) {
                // child.classList.add(background)
                child.classList.add('text-white')
            }
            break;
    }
}
