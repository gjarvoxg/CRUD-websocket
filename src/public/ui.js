const notesList = document.querySelector('#notes');

let savedId = '';

const noteUI = notes => {

    const div = document.createElement('div')

    div.innerHTML = `
    <div class="card card -body rounded-0 mb-2 animate__animated animate__fadeInLeft">
        <div class="d-flex justify-content-between ">
            <h1 class="h3 card-title">${notes.title}</h1>
            <div>
                <button class="btn btn-danger delete" data-id="${notes.id}"> delete </button>
                <button class="btn btn-secondary update" data-id="${notes.id}"> update </button>
            </div>
        </div>
        <p>${notes.description}</p>
    </div>
    `
    const btnDelete = div.querySelector('.delete')
    const btnUpdate = div.querySelector('.update')
    btnUpdate.addEventListener('click', ()=>{
        getNote(btnUpdate.dataset.id)
    })

    btnDelete.addEventListener('click', ()=>{
        deleteNote(btnDelete.dataset.id)
    })
    return div
}

const renderNotes = notes =>{

    notesList.innerHTML= '';
    notes.forEach((note) => {
        notesList.append(noteUI(note))
    })
} 

const appendNote = note => {
    notesList.append(noteUI(note))
}