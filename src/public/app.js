
const noteForm = document.querySelector('#note-form');
const tittle = document.querySelector('#tittle')
const description = document.querySelector('#description')

noteForm.addEventListener('submit', e => {
    e.preventDefault()

    saveNote(tittle.value, description.value)
})