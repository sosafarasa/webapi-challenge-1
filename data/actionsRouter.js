const express = require('express');
const Actions = require('./helpers/actionModel');
const router = express.Router();

router.get('/', async (req, res) => {
    try{
        const actions = await Actions.get();
        res.status(200).json(actions);
    } catch(err) {
        res.status(500).json({ error: 'Te action requested could not be retrieved' })
    }
})

router.get('/:id', async (req, res) => {
    try{
        const action = await Actions.get(req.params.id);
        if(action){
            res.status(200).json(action);
        } else {
            res.status(404).json({ message: 'The action requested does not exist.' });
        }
    } catch(err) {
        res.status(500).json({ error: 'The action requested could not be retrieved.' });
    }
});

router.post('/', async (req, res) => {
    try{
        const addAction = await Actions.insert(req.body);
        res.status(200).json({ message: 'Action added!' })
    } catch(err) {
        res.status(500).json({ message: 'Action could not be added.' });
    }
})


module.exports = router;