const  fs  = require( "fs" )
const chalk = require('chalk')


const addNote = (title, body) => {
const notes = loadNotes()
//const dublicateNotes = notes.filter((note) => note.title === title)
const dublicateNote = notes.find((note) => note.title === title);
 //debugger
if(!dublicateNote){
    notes.push({
        title:title,
        body:body,
    })
    
    saveNotes(notes);
    console.log(chalk.green.inverse.bold('new note added..!'));
} else {
    console.log(chalk.red.inverse.bold('note title is taken..!'));
  }
}

const saveNotes = (notes) => {
const dataJSON = JSON.stringify(notes)
fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes = ( ) => {
try{
    const dataBuffer = fs.readFileSync('notes.json')

    const dataJSON = dataBuffer.toString();
    
    return JSON.parse(dataJSON)
}catch(e){
    return []
}
}

const removeNote = (title) => {

const notes  = loadNotes()

const filteredNotes = notes.filter(note=>note.title!=title)

saveNotes(filteredNotes)

if(filteredNotes.length===notes.length){

    console.log(chalk.red.inverse.bold("Note not found"));

}else{

    console.log(chalk.green.inverse.bold("Note Removed!"));

 }
}


const listNotes = () => {
const notes = loadNotes()
console.log(chalk.blue.inverse.italic("Your Notes : "));
notes.forEach(element => {
    console.log(element.title);
});
}

const readNotes = (title) => {
const notes = loadNotes()
const exist = notes.find(note=>note.title===title)
//console.log(exist);
if(!exist){
    console.log(chalk.red.inverse.bold("Note not found"));
}else{
   // const index = notes.findIndex(notes=>notes.title===title)
    const note = exist.body
    console.log(chalk.yellow.bold("Note title: "+title));
    console.log(chalk.green.bold("Body: "));
    console.log(note);    
}


// notes has a title and a body 
// we can access the body using the title
// [{title , body} , {title , body} , {title , body}]

}

module.exports = {
getNotes,
addNote,
removeNote,
listNotes,
readNotes,
}