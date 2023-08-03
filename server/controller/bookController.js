const axios = require('axios')
require('dotenv').config()
const { API_KEY } = process.env

module.exports = {
    searchBook: (req, res) => {
        const {search} = req.query
        console.log(search)
        axios.get(
            `https://www.googleapis.com/books/v1/volumes?q=${search}&key=${API_KEY}&maxResults=40
            `
        ).then((response) => {
            console.log(response.data.items)
            res.status(200).send(response.data.items)
        }).catch((err) => console.log(err))
        
    }
}
