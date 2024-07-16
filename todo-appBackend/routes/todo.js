const { Router } = require("express");
const router = Router();
const { TODO } = require("../db/index");
const mongoose = require("mongoose"); // Add this line
// Create a new Todo
router.post('/todo', async (req, res) => {
    const { title, description, completed } = req.body;

    try {
        const newTodo = new TODO({
            id: new mongoose.Types.ObjectId().toString(), // Generate a unique id
            title,
            description,
            completed: completed || false
        });
        await newTodo.save();
        res.status(201).json({ message: 'Todo Created Successfully', todo: newTodo });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Update an existing Todo
router.put('/todo/:id', async (req, res) => {
    const { id } = req.params;
    const { title, description, completed } = req.body;

    try {
        const updatedTodo = await TODO.findByIdAndUpdate(id, { title, description, completed }, { new: true });
        if (!updatedTodo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        res.json({ message: 'Todo Updated Successfully', todo: updatedTodo });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Get all Todos
router.get('/todo', async (req, res) => {
    try {
        const allTodos = await TODO.find();
        res.json(allTodos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
