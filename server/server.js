
const express = require('express') //built web server using express
const cors = require('cors')
const path = require('path')
const app = express() // invoke express() and save it in app
const corsOptions = {
    exposedHeaders: 'Authorization',
  };
const { seed } = require('./controller/db/seed')
const { addBook, getAllBooks,deleteBook } = require('./controller/db/bookDB')
const {searchBook} = require('./controller/bookController')


app.use(express.json())
app.use(cors(corsOptions))
app.use(express.static('public'))


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'../public/index.html'))
})
//get external api endpoint
app.get('/api/books/q', searchBook)


//seed endpoint
//Seed database
app.post('/api/seed', seed)
app.post('/api/books', addBook); 
app.get('/api/books', getAllBooks)
app.delete('/api/books/:id', deleteBook)

app.listen(5500, () => {
    console.log(`Server is running on 5500`
    )
})



















//useful method in app() that corresponse with https method
//app.get()
//app.post()
//app.put()
//app.delete()
//takea 2 arguments the first argument is path for url and the second argument is callback function is the function that will be call from the endpoint
/*app.get('/', (req,res)=>{
 
})*/





