const db = require('../db')

class UserController{
    async getUsers(req,res) {
        const users = await db.query('SELECT * FROM users')
        res.json(users.rows)
    }
    async getProfiles(req,res) {
        const profiles = await db.query('SELECT * FROM profiles')
        res.json(profiles.rows)
    }
    async getMessages(req,res) {
        const profiles = await db.query('SELECT * FROM messages')
        res.json(profiles.rows)
    }
    async updateDone(req,res) {
        console.log(req.body.done, req.body.id);
        
        const profiles = await db.query(`UPDATE profiles
SET done = ${req.body.done}
WHERE id = ${req.body.id}`)
        res.json(profiles.rows)
    }
}

module.exports = new UserController()   