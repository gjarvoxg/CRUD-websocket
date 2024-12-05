const notesList = document.querySelector('#notes')

const appendNote = notes => {

    notesList.innerHTML += `
    <div class="card card -body rounded-0">
        <div>
            <h1 class="h3 card-title">${notes.title}</h1>
        </div>
        <p>${notes.description}</p>
    </div>
    `
}