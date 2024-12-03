const express = require('express');

const {
    getAllDebuts,
    createOneDebut,
    getDebutByName,
    deleteDebut,
    updateDebut,
} = require('../controllers/debutsController');

const router = express.Router();

// GET localhost:3001/api/debuts
router.get('/', getAllDebuts);
// POST localhost:3001/api/debuts
router.post('/', createOneDebut);
// GET localhost:3001/api/debuts/Hulk (or whatever name)
router.get('/:name', getDebutByName);
// DELETE localhost:3001/api/debuts/654e3we12rsd4f0654d
router.delete('/:id', deleteDebut);
// PUT localhost:3001/api/debuts/654e3we12rsd4f0654d
router.put('/:id', updateDebut);

module.exports = router;