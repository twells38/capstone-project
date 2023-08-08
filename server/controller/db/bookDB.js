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
          const { title } = req.body;
          console.log(req.body)
        sequelize.query(
            `insert into book_list(title)
             values('${title}') RETURNING *
            `).then((dbRes) => {
                console.log(dbRes[0])
                res.status(200).send(`${dbRes[0].title} is added to log`)
            }).catch((err) => {
                console.log(err)
                res.status(400).send(err)
            })
    },
    getAllBooks: (req, res) => {
        sequelize.query(`
        select * from book_list
        `).then(dbRes => res.status(200).send(dbRes[0]))
          .catch((err) => {
                console.log(err)
                res.status(400).send(err)
            })
    },
    deleteBook: (req, res) => {
        const { id } = req.params
        
        sequelize.query(`
        delete from book_list
        where book_id = ${id}
        `)
            .then((dbRes) => {
                console.log(`This book is deleted`)
                res.status(200).send(dbRes[0])
            })
          .catch((err) => {
                console.log(err)
                res.status(500).send(err)
            })
    }

}