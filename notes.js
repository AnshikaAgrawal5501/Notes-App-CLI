const fs = require('fs');
const chalk = require('chalk');

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
        console.log('\n' + chalk.rgb(255, 136, 0)(findNote.body));
        return true;
    } else {
        return false;
    }
}

function listNotes() {
    const notes = loadNotes();

    notes.forEach(function(note) {
        console.log(`${chalk.bold.rgb(255, 72, 126)("title :")} ${chalk.bold.magenta(note.title)}\n${chalk.bold.rgb(255, 139, 167)("body  :")} ${chalk.magentaBright(note.body)}\n`);
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