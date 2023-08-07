const baseURL =`http://localhost:5500`
function getbookList() {
        axios.get(`${baseURL}/api/books/`)
    .then((res) => {
       // console.log(res.data);
        bookList(res.data)
      })
    .catch((err) => console.log(err));
}

function removeBook(id) {
  axios.delete(`${baseURL}/api/books/${id}`)
    .then((res) => bookList(res.data))
    .catch((err) => console.log(err));
}

    
getbookList()



    