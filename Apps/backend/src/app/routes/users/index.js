module.exports = (config, database) => {
    const express = require('express');

    const router = express.Router();

    router.get('/', async (req, res) => {
        const users = await database.users.getAll();

        res.json(users);
    });
    router.get('/:id', async (req, res) => {
        const {
            id
        } = req.params;

        const user = await database.users.getOne(id);

        res.json(user);
    });

    return router;
};