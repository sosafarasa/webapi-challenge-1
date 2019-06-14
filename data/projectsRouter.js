const express = require('express');
const Projects = require('./helpers/projectModel');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const projects = await Projects.get();
        res.status(200).json(projects);
    } catch(err) {
        res.status(500).json({ error: 'The project requested could not be retrieved.' })
    }
})

router.get('/:id', async (req, res) => {
    try{
        const project = await Projects.get(req.params.id);
        if(project){
            res.status(200).json(project);
        } else {
            res.status(404).json({ message: 'The project requested does not exist.' });
        }
    } catch(err) {
        res.status(500).json({ error: 'The project requested could not be retrieved.' });
    }
});

module.exports = router;