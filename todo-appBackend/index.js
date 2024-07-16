const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const todoRoutes = require('./routes/todo'); // Adjust path as necessary

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://dhobekunal:Tcn8CyyX6aRMvuhZ@cluster0.avzwkk5.mongodb.net/kunalTODO', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
app.use(cors());
app.use(express.json());
app.use('/api', todoRoutes); // Mount your routes

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});