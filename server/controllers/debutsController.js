const Debut = require('../models/Debut');

async function getAllDebuts(req, res) {
    try {
        const result = await Debut.find({});
        res.json({message: 'success', payload: result});
    } catch (error) {
        res.json({ message: 'failure in getting all debuts', payload: error });
        console.log(error);
    }
}

async function createOneDebut(req, res) {
    try {
        const newDebut = await Debut.create(req.body)
        res.json({ message: 'success', payload: newDebut });
    } catch (error) {
        res.status(500).json({ message: 'failure', payload: error });
        console.log(error);
    }
}

async function getDebutByName(req, res) {
    try {
        const foundDebut = await Debut.findOne({ characterName: req.params.name });
        res.json({
            message: 'success',
            payload: foundDebut,
        })
    } catch (error) {
        console.log(error);
        res.json({
            message: 'failure',
            payload: error,
        })
    }
}

async function deleteDebut(req, res) {
    try {
        const targetId = req.params.id;
        const deletedDebut = await Debut.findByIdAndDelete(targetId);

        res.json({
            message: 'success',
            payload: deletedDebut,
        })
    } catch (error) {
        res.json({
            message: 'failure',
            payload: error,
        })

        console.log(error);
    }
}

async function updateDebut(req, res) {
    try {
        const targetId = req.params.id;
        const updatedDebut = await Debut.findByIdAndUpdate(
            targetId,
            req.body,
            { new: true },
        );

        res.json({
            message: 'success',
            payload: updatedDebut,
        })
    } catch (error) {
        res.json({
            message: 'failure',
            payload: error,
        });

        console.log(error);
    }
}

module.exports = {
    getAllDebuts,
    createOneDebut,
    getDebutByName,
    deleteDebut,
    updateDebut,
}