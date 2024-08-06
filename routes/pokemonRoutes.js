const express = require('express');
const router = express.Router();
const {
  getPokemons,
  addPokemon,
  updatePokemon,
  deletePokemon,
  getPokemonById
} = require('../controllers/pokemonController');

/**
 * @swagger
 * tags:
 *   name: Pokemons
 *   description: Operations related to Pokemons
 */

/**
 * @swagger
 * /api/pokemons:
 *   get:
 *     tags: [Pokemons]
 *     summary: Retrieve a list of pokemons
 *     responses:
 *       200:
 *         description: A list of pokemons
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 */
router.get('/', getPokemons);

/**
 * @swagger
 * /api/pokemons:
 *   post:
 *     tags: [Pokemons]
 *     summary: Add a new pokemon
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               base_happiness:
 *                 type: integer
 *               capture_rate:
 *                 type: integer
 *               color:
 *                 type: string
 *               egg_groups:
 *                 type: array
 *                 items:
 *                   type: string
 *               evolution_chain:
 *                 type: string
 *               flavor_text_entries:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       201:
 *         description: Pokemon created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 name:
 *                   type: string
 */
router.post('/', addPokemon);

/**
 * @swagger
 * /api/pokemons/{id}:
 *   put:
 *     tags: [Pokemons]
 *     summary: Update a pokemon by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Pokemon ID
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               base_happiness:
 *                 type: integer
 *               capture_rate:
 *                 type: integer
 *               color:
 *                 type: string
 *               egg_groups:
 *                 type: array
 *                 items:
 *                   type: string
 *               evolution_chain:
 *                 type: string
 *               flavor_text_entries:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       200:
 *         description: Pokemon updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 name:
 *                   type: string
 */
router.put('/:id', updatePokemon);

/**
 * @swagger
 * /api/pokemons/{id}:
 *   delete:
 *     tags: [Pokemons]
 *     summary: Delete a pokemon by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Pokemon ID
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Pokemon deleted successfully
 */
router.delete('/:id', deletePokemon);

/**
 * @swagger
 * /api/pokemons/{id}:
 *   get:
 *     tags: [Pokemons]
 *     summary: Retrieve a pokemon by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Pokemon ID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: A pokemon object
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 name:
 *                   type: string
 *                 base_happiness:
 *                   type: integer
 *                 capture_rate:
 *                   type: integer
 *                 color:
 *                   type: string
 *                 egg_groups:
 *                   type: array
 *                   items:
 *                     type: string
 *                 evolution_chain:
 *                   type: string
 *                 flavor_text_entries:
 *                   type: array
 *                   items:
 *                     type: string
 */
router.get('/:id', getPokemonById);

module.exports = router;
