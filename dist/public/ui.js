"use strict";

var notesList = document.querySelector('#notes');
var savedId = '';
var noteUI = function noteUI(notes) {
  var div = document.createElement('div');
  div.innerHTML = "\n    <div class=\"card card -body rounded-0 mb-2 animate__animated animate__fadeInLeft\">\n        <div class=\"d-flex justify-content-between \">\n            <h1 class=\"h3 card-title\">".concat(notes.title, "</h1>\n            <div>\n                <button class=\"btn btn-danger delete\" data-id=\"").concat(notes.id, "\"> delete </button>\n                <button class=\"btn btn-secondary update\" data-id=\"").concat(notes.id, "\"> update </button>\n            </div>\n        </div>\n        <p>").concat(notes.description, "</p>\n    </div>\n    ");
  var btnDelete = div.querySelector('.delete');
  var btnUpdate = div.querySelector('.update');
  btnUpdate.addEventListener('click', function () {
    getNote(btnUpdate.dataset.id);
  });
  btnDelete.addEventListener('click', function () {
    deleteNote(btnDelete.dataset.id);
  });
  return div;
};
var renderNotes = function renderNotes(notes) {
  notesList.innerHTML = '';
  notes.forEach(function (note) {
    notesList.append(noteUI(note));
  });
};
var appendNote = function appendNote(note) {
  notesList.append(noteUI(note));
};