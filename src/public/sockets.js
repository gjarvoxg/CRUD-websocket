const socket = io();

const saveNote = (tittle, description) => {
    socket.emit("client:newnote", {
        tittle,
        description
    })
}
socket.on('server:newnote', appendNote(notes)) 