
const noteForm = document.querySelector('#note-form');
const title = document.querySelector('#tittle')
const description = document.querySelector('#description')

noteForm.addEventListener('submit', e => {
    e.preventDefault()

    saveNote(title.value, description.value)
})