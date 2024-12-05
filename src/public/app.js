const socket = io();

const noteForm = document.querySelector('#note-form');
const tittle = document.querySelector('#tittle')
const description = document.querySelector('#description')

noteForm.addEventListener('submit', e => {
    e.preventDefault()

    socket.emit('client:newnote', {
        tittle: tittle.value,
        description: description.value
    })
})