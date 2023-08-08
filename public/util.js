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
         <div class="card-body bg-light ">
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
    let date = new Date(book.createdat).toLocaleDateString()//format time that is sent from sequelize timestamp
    let displayDiv = document.createElement("div");
      displayDiv.classList.add("card-log");
      displayDiv.style.width = "30rem";
      displayDiv.innerHTML = `
     <div class="card-body  d-flex p-2 flex-row bg-light">
         <div>
         <a href='./readingLog.html' onclick='removeBook(${book['book_id']})'class='pe-auto mx-3 ' > 
        <i class="fa-regular fa-trash-can "></i>
        </a>
         </div>
        
         <h4 class="card-title fw-bold text-uppercase text-right  mx-auto">${book.title} </h4>
         <h4 class="mx-2">${date}</h4>
        
    </div>
        `;
      displayBooks.appendChild(displayDiv);
    });
  }


