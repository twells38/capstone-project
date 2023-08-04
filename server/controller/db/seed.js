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
    seed:(req,res) => {
        sequelize.query(`
        drop table if exists book_list;
            create table bookList(
                book_id serial primary key,
                image varchar,
                title varchar not null,
                authors varchar not null
            )
          `).then(dbRes => res.sendStatus(200))
            .catch(err => res.status(400).send(err))
    }
}