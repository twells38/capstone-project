

//const display_Section = document.getElementById('displayScetion')



//create displayCard()
const displayCard = (bookArr) => { 
    console.log(bookArr)
    bookArr.map((book) => {
      let displayDiv = document.createElement("div");
      displayDiv.classList.add("card");
      displayDiv.style.width = "18rem";
      let bookObj = JSON.stringify({ ...book }).replace(
       /[\/\(\)\']/g,
       "&apos;"
     );
      console.log(bookObj);
       
     let image = book.volumeInfo.imageLinks&&book.volumeInfo.imageLinks.smallThumbnail
      displayDiv.innerHTML = `
         <div class="card-body bg-light">
         <img class="bookImg"src=${image}>
        <h5 class="card-title mt-3 fw-bold">${book.volumeInfo.title}</h5>
        <h5>${book.volumeInfo.authors}</h5>
         <a href='readingLog.html' class='logBtn'onclick='addToLog(${bookObj})'>Add to Reading-Log</a>

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
      displayDiv.style.width = "18rem";
      let bookObj = JSON.stringify({ ...book }).replace(
       /[\/\(\)\']/g,
       "&apos;"
     );
      console.log(bookObj);
       
     let image = book.volumeInfo.imageLinks&&book.volumeInfo.imageLinks.smallThumbnail
      displayDiv.innerHTML = `
         <div class="card-body bg-light">
         <img class="bookImg"src=${image}>
        <h5 class="card-title mt-3 fw-bold">${book.volumeInfo.title}</h5>
        <h5>${book.volumeInfo.authors}</h5>
      </div>
        `;
      display_Section.appendChild(displayDiv);
    });
}
bookList()