// Get the book list available in the shop
public_users.get('/', async (req, res) => {
    //Write your code here
    try{
      return res.send(JSON.stringify(books, null, 4));
    } catch(error) {
      return res.status(500).json({ error: 'Something went wrong' });
    }
  });
  
  // Get book details based on ISBN
  public_users.get('/isbn/:isbn', async (req, res) => {
    //Write your code here
    try{
      const isbn = req.params.isbn;
      return res.send(books[isbn]);
    } catch(error) {
      return res.status(500).json({ error: 'Something went wrong' });
    }
   });
    
  // Get book details based on author
  public_users.get('/author/:author', async (req, res) => {
    //Write your code here
    try{
      const author = req.params.author;
      const keys = Object.keys(books);
      let books_with_author = [];
      keys.forEach(key => {
          if(books[key]["author"] === author){
              books_with_author.push(books[key]);
          }
      });
      return res.send(books_with_author);
    } catch(error) {
      return res.status(500).json({ error: 'Something went wrong' });
    }
  });
  
  // Get all books based on title
  public_users.get('/title/:title', async (req, res) => {
    //Write your code here
    try{
      const title = req.params.title;
      const keys = Object.keys(books);
      let books_with_title = [];
      keys.forEach(key => {
          if(books[key]["title"] === title){
              books_with_title.push(books[key]);
          }
      });
      return res.send(books_with_title);
    } catch(error) {
      return res.status(500).json({ error: 'Something went wrong' });
    }
  });
  
  //  Get book review
  public_users.get('/review/:isbn', async (req, res) => {
    //Write your code here
    try{
      const isbn = req.params.isbn;
      return res.send(books[isbn]["reviews"]);
    } catch(error) {
      return res.status(500).json({ error: 'Something went wrong' });
    }
  });
  