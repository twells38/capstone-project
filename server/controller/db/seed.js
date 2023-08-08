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
    seed: (req,res) => {
     sequelize.query(`
        drop table if exists book_list;
            create table book_List(
                book_id serial primary key,
                title varchar not null,
                createdAt timestamp NOT NULL 
                DEFAULT CURRENT_TIMESTAMP
            )
          `).then(() => {
              console.log(`database table in seed file`)
              res.sendStatus(200)
          })
            .catch(err => console.log('error seeding DB', err))
    }
}