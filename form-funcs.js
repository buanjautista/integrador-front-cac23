const inputList = document.querySelectorAll('input')
const checkInputCompletion = (input) => {
    input.value ? input.classList.remove('incomplete-form') : input.classList.add('incomplete-form')
}
inputList.forEach(input => {
    input.addEventListener('change', () => checkInputCompletion(input))
    input.addEventListener('focusout', () => checkInputCompletion(input))
})