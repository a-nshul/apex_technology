const express = require('express');
const connectDB = require('./config/db');
require('dotenv').config();
const pokemonRoutes = require('./routes/pokemonRoutes');

const app = express();

// Connect to database
connectDB();

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use('/api/pokemons', pokemonRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
