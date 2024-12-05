const notesList = document.querySelector('#notes')

const appendNote = notes => {
    notesList.innerHTML = `<h1>${notes.title}</h1>`
}