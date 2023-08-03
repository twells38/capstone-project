const express = require('express') //built web server using express
const axios = require('axios')
const cors = require('cors')
const path = require('path')
const app = express() // invoke express() and save it in app

app.use(express.json())
app.use(cors())
app.use(express.static('public'))

const {searchBook} = require('./controller/bookController')



app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'../public/index.html'))
})
//get external api endpoint
app.get('/api/books/q', searchBook)


app.listen(5500, () => {
    console.log(`Server is running on 5500`)
})



















//useful method in app() that corresponse with https method
//app.get()
//app.post()
//app.put()
//app.delete()
//takea 2 arguments the first argument is path for url and the second argument is callback function is the function that will be call from the endpoint
/*app.get('/', (req,res)=>{
 
})*/





