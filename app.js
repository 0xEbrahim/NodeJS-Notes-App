const chalk = require('chalk');
const fs = require('fs');
const yargs = require('yargs')
const notes = require('./notes');

//customize yargs version
yargs.version('1.1.0');


// poeple needs to add , remove , read , list NOTES


// create adding command
yargs.command({
    command:'add',
    describe:'add a new note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,
            type:'string',

        },
        body:{
            describe:'note body',
            demandOption:true,
            type:'string',
        }
     },
    handler(argv){
    notes.addNote(argv.title,argv.body);
    }
})

//create removing command
yargs.command({
    command:'remove',
    discribe:'removing an existing note',
    builder:{
        title:{
            describe:"remove a note..!",
            demandOption:true,
            type:'string',
        }
    },
    handler(argv){
        notes.removeNote(argv.title);
    }
})

// create reading command
yargs.command({
command:'read',
describe:'read all notes',
builder:{
title:{
    describe:"Reading note",
    demandOption : true,
    type:'string'
}
},
handler(argv){
   notes.readNotes(argv.title)
 }
})

//create listing command 
yargs.command({
    command:'list',
    describe:'listing all notes',
    handler( ){
       notes.listNotes();
    }
})

yargs.parse();
//console.log(yargs.argv);
