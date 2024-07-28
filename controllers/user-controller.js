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
}

module.exports = new UserController()   