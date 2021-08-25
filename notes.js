const fs = require('fs');

function notes() {
    console.log("notes ...");
}

function addNote(title, body) {

    const notes = loadNotes();

    const findNote = notes.find(function(note) {
        return note.title === title;
    });

    if (findNote !== undefined) {
        return false;
    }

    const note = { title, body };
    notes.push(note);

    saveNotes(notes);
    return true;
}

function removeNote(title) {
    const notes = loadNotes();

    const findOtherNote = notes.filter(function(note) {
        return note.title !== title;
    });

    if (notes.length > findOtherNote.length) {
        saveNotes(findOtherNote);
        return true;
    } else {
        return false;
    }
}

function readNote(title) {
    const notes = loadNotes();

    const findNote = notes.find(function(note) {
        return note.title === title;
    });

    if (findNote) {
        console.log(findNote.body);
        return true;
    } else {
        return false;
    }
}

function listNotes() {
    const notes = loadNotes();

    notes.forEach(function(note) {
        console.log(`title: ${note.title}, body: ${note.body}`);
    });
}

function saveNotes(notes) {
    const notesString = JSON.stringify(notes);
    fs.writeFileSync('notes.json', notesString);
}

function loadNotes() {

    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const jsonData = dataBuffer.toString();
        return JSON.parse(jsonData);

    } catch (e) {
        return [];
    }
}

module.exports = { notes, addNote, removeNote, readNote, listNotes };