
console.log("connected")
const baseURL =`http://localhost:5500`
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const display_Section = document.getElementById('displaySection')
//create function search a book
const  searchHandler = (e)=> {
    e.preventDefault();
  const userInput = searchInput.value;
  display_Section.innerHTML = "";
  searchInput.value = ``;
  axios.get(`${baseURL}/api/books/q/?search=${userInput}`)
    .then((res) => {
        //console.log(res.data);
        displayCard(res.data)
      })
    .catch((err) => console.log(err));
}
searchForm.addEventListener('submit', searchHandler);
