const express = require('express');
const router = express.Router();
const {
  getPokemons,
  addPokemon,
  updatePokemon,
  deletePokemon,
  getPokemonById
} = require('../controllers/pokemonController');

router.get('/', getPokemons);
router.post('/', addPokemon);
router.put('/:id', updatePokemon);
router.delete('/:id', deletePokemon);
router.get('/:id', getPokemonById);
module.exports = router;
