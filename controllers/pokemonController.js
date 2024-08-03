const Pokemon = require('../models/pokemonModel');
const mongoose = require('mongoose');
// Get all Pokémon
const getPokemons = async (req, res) => {
  try {
    const pokemons = await Pokemon.find();
   if(pokemons.length==-0){
     return res.status(404).json({ message: 'No pokemons found' });
   }
    const countPokemon=await Pokemon.countDocuments();
    res.status(200).json({pokemons,countPokemon,message:"fetched all pokemon data "});
  } catch (error) {
    res.status(500).json({ message: error.message});
  }
};
// Get Pokemon data from valid id 
const getPokemonById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: 'plz provide valid id' });
    }
    const pokemon = await Pokemon.findById(id);
    if(!pokemon){
      return res.status(404).json({ message: 'No pokemon found' });
    }
    res.status(200).json({pokemon,message:"fetched pokemon data by id"});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Add a new Pokémon
const addPokemon = async (req, res) => {
  try {
    const newPokemonData = new Pokemon(req.body);
    if(!newPokemonData){
      return res.status(400).json({ message: 'provide all valid data' });
    }
    const newPokemon=await Pokemon.create(req.body);
    res.status(201).json({newPokemon,message:"successfully added new Pokemon"});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a Pokémon
const updatePokemon = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: 'plz provide valid id' });
    }
    if(!req.body){
      return res.status(400).json({ message: 'provide data to update' });
    }
    const updatedPokemon = await Pokemon.findByIdAndUpdate((id),{body:req.body},{new:true});
    res.status(200).json({updatedPokemon,message:"successfully updated Pokemon"});
  } catch (error) {
    res.status(500).json({ message: error.message});
  }
};

// Delete a Pokémon
const deletePokemon = async (req, res) => {
  try {
    const {id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
     res.status(404).json({message:"plz provide valid id to delete pokemon data "})
    }
    const deletedPokemon=await Pokemon.findByIdAndDelete(id);
    if(!deletedPokemon){
      return res.status(404).json({ message: 'No pokemon found with this id or data already deleted' });
    }
    res.status(200).json({ deletedPokemon,message:"pokemon data deleted successfully"})
  } catch (error) {
    res.status(404).json({ message:error.message});
  }
};

module.exports = {
  getPokemons,
  addPokemon,
  updatePokemon,
  deletePokemon,
  getPokemonById
};
