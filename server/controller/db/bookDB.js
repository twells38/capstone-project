require('dotenv').config()
const {CONNECTION_STRING} = process.env
const Sequelize = require('sequelize')
const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})

module.exports = {
    addBook: (req, res) => {
        const { image, title, authors } = req.body
        console.log(req.body)
        const { id } = req.params
        sequelize.query(`
        insert to book_list(userId,image,title,authors)
        values(${id},'${image}','${title}','${authors}')
        `).then(dbRes => res.status(200).send('added to reading log'))
        .catch(err =>res.status(400).send(err))
    }
}