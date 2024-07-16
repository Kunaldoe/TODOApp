const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://dhobekunal:Tcn8CyyX6aRMvuhZ@cluster0.avzwkk5.mongodb.net/kunalTODO')


const TodoSchema = new mongoose.Schema({
    // Schema definition here
    title : String,
    description : String,
    completed : Boolean,
});
const TODO = mongoose.model('Admin', TodoSchema);

module.exports = {
    TODO
}