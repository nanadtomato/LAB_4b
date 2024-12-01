const fs = require('fs');

fs.readFile('books.json', 'utf8', (err, data) => {
  if (err) {
    console.error("Error reading the file:", err);
    return;
  }

  const booksData = JSON.parse(data);

    console.log("Title of the first book", booksData.Books[0].title);
   
    console.log("Author of the second book: ", booksData.Books[1].author);
   
    console.log("Genres of all books: ");
    booksData.Books.forEach((book,index) => {
      console.log(`Book ${index + 1} Genres:`, book.genres.join(", "));
        
    });

    
  });