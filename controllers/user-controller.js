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

    async sendMessage(req, res) {
        const { userId, message } = req.body;

        // Вставка нового сообщения в базу данных
        try {
            const result = await db.query(
                `INSERT INTO messages (date_message, message, type, unique_id, user_id)
                VALUES (NOW(), $1, 'bot', nextval('messages_unique_id_seq'), $2)
                RETURNING *;`,
                [message, userId]
            );

            // Возвращаем добавленное сообщение как ответ
            res.json(result.rows[0]);
        } catch (error) {
            console.error('Ошибка при вставке сообщения:', error);
            res.status(500).json({ error: 'Ошибка при вставке сообщения в базу данных' });
        }
    }

}

module.exports = new UserController()   