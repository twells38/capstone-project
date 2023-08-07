const displayBooks = document.getElementById('display-list')

//create displayCard()
const displayCard = (bookArr) => { 
    console.log(bookArr)
    bookArr.map((book) => {
      let displayDiv = document.createElement("div");
      displayDiv.classList.add("card");
      displayDiv.style.width = "18rem";
      let bookObj = JSON.stringify({ ...book }).replace( //convert array object to string
       /[\/\(\)\']/g,
       "&apos;"
     );
      console.log(bookObj);
     let isbn = book.volumeInfo.industryIdentifiers[0].type +"-"+ book.volumeInfo.industryIdentifiers[0].identifier
     let image = book.volumeInfo.imageLinks&&book.volumeInfo.imageLinks.smallThumbnail
      displayDiv.innerHTML = `
         <div class="card-body bg-light">
         <img class="bookImg"src=${image}>
        <h5 class="card-title mt-3 fw-bold">${book.volumeInfo.title}</h5>
        <h5>Author: ${book.volumeInfo.authors}</h5>
        <h5>${isbn}
        </div>
        `;
      display_Section.appendChild(displayDiv);
    });
}

const bookList = (bookArr) => {
    console.log(bookArr)
    bookArr.map((book) => {
      let displayDiv = document.createElement("div");
      displayDiv.classList.add("card");
      displayDiv.style.width = "22rem";
      displayDiv.innerHTML = `
         <div class="card-body bg-light d-flex flex-row  ">
        
         <h4 class="card-title fw-bold  text-uppercase text-right mx-auto">${book.title}</h4>
         <div class='align-items-center '>
         <a onclick='removeBook(${book['book_id']})'class='pe-auto' > 
        <i class="fa-regular fa-trash-can "></i>
        </a>
         </div>
         
        </div>
        `;
      displayBooks.appendChild(displayDiv);
    });
}


