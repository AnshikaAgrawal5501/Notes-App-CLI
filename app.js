var validator = require('validator');
const chalk = require('chalk');
const notes = require('./notes');
const yargs = require('yargs');

// console.log(chalk.bold.cyan('Success'));

// notes();

yargs.command({
    command: 'add',
    description: 'Add a new note',
    builder: {
        title: {
            description: 'Title of the note',
            demandOption: true,
            type: 'string',
        },
        body: {
            description: 'Body of the note',
            demandOption: true,
            type: 'string',
        },
    },
    handler: function(argv) {
        console.log('adding a new note !');
        // console.log(`title: ${argv.title}`);
        // console.log(`body: ${argv.body}`);

        const isAdded = notes.addNote(argv.title, argv.body);

        if (isAdded) {
            console.log(chalk.bold.green('Note successfully added.'));
        } else {
            console.log(chalk.bold.red('Title already taken.'));
        }
    }
});

yargs.command({
    command: 'delete',
    description: 'Delete a note',
    builder: {
        title: {
            description: 'Title of note to be removed',
            demandOption: true,
            type: 'string',
        },
    },
    handler: function(argv) {
        const isRemoved = notes.removeNote(argv.title);

        if (isRemoved) {
            console.log(chalk.bold.green('deleteing a note !'));
        } else {
            console.log(chalk.bold.red('Note not found !'));
        }
    }
});

yargs.command({
    command: 'read',
    description: 'Reading a note',
    builder: {
        title: {
            description: 'Title of note to be read',
            demandOption: true,
            type: 'string',
        },
    },
    handler: function(argv) {
        // console.log('reading a note !');
        const isRead = notes.readNote(argv.title);

        if (isRead) {
            console.log(chalk.bold.green('Note successfully read.'));
        } else {
            console.log(chalk.bold.red('Note not present'));
        }
    }
});

yargs.command({
    command: 'list',
    description: 'List notes',
    handler: function() {
        console.log(chalk.bold.rgb(255, 11, 85)('\nlisting all notes !\n'));
        notes.listNotes();
    }
});

// console.log(process.argv);
// console.log(yargs.argv);

yargs.parse();