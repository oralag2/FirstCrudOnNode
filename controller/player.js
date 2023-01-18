require('dotenv').config();

const Player = require('../model/player');

class playerController {
    async createPlayer(req, res) {
        try {
            const { name, age, text } = req.body;
            const player = await Player.create({ name, age, text });
            return res.status(200).json(player);
        } catch (e) {
            return res.status(400).json({ error: e.message });

        }
    }

    async getPlayers(req, res) {
        try {
            const players = await Player.find();
            return res.status(200).json(players);
        } catch (e) {
            return res.status(400).json({ error: e.message });
        }
    }

    async getPlayer(req, res) { //post
        try {
            const { id } = req.body;
            const player = await Player.findById(id);
            return res.status(200).json(player);
        } catch (e) {
            return res.status(400).json({ error: e.message });
        }
    }

    async deletePlayer(req, res) {
        try {
            await Player.deleteOne({ _id: req.body.id });
            return res.status(200).json("Success");
        } catch (e) {
            return res.status(400).json({ error: e.message });
        }

    }

    async updatePlayer(req, res) {
        try {
            const { id, name, age, text } = req.body;
            const player = await Player.findOneAndUpdate({ _id: id }, { name, age, text }, { new: true });
            return res.status(200).json(player);
        } catch (e) {
            return res.status(400).json({ error: e.message });
        }

}
 
async findPlayerByNameandUpdate(req, res) {
    try {
        const { id, name, age, text } = req.body;
        const player = await Player.findOneAndUpdate({ name: name }, { id, name, age, text }, { new: true });
        
        return res.status(200).json(player);
    } catch (e) {
        return res.status(400).json({ error: e.message });
    }
}
}
module.exports = new playerController();