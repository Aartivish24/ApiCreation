const Book = require("../model/book");

const getAllBooks = async(req,res,next)=>{
    let books;
    try{
        books = await Book.find()
    } catch(err){
        returnnext(err)
    }
    if(!books){
        return res.status(500).json({ message: "Internal Server Error" });
    }

    return res.status(200).json({ books });
};

const addBook = async (req, res, next) =>{
    const {bookName, quantity, genre, isBestSeller } = req.body;
   
    let book;
    try{
        book = new Book({
            bookName,
            quantity, 
            genre, 
            isBestSeller  
        });
        book = await book.save();
    }catch(err){
        return next(err);
    }

    if(!book){
        return res.status(500).json({ message: "Unable to save book" });
    }
    return res.status(201).json({ book });
};

const updateBook = async(req, res, next)=>
{
    const id = req.params.id;
   
        const { bookName, quantity, genre, isBestSeller } = req.body;
    

    let book;

    try{
        book = await Book.findByIdAndUpdate(id,{ bookName,
            quantity, 
            genre, 
            isBestSeller 
         });
      
    }catch(err){
        return next(err);
    }
    if(!book){
        return res.status(500).json({ message: "Unable to save book" });
    }
    return res.status(200).json({ message: "Book details updated" });

};

const deleteBook = async(req, res, next)=>{
    const id = req.params.id;
    let book;
    try{
        book = await Book.findByIdAndRemove(id)
    }catch (err){
        return next(err);
    }
    if(!book){
        return res.status(500).json({ message: "Unable to delete" });
    }
    return res.status(200).json({ message: "Successfully Deleted" });

}

exports.getAllBooks = getAllBooks;
exports.addBook = addBook;
exports.updateBook = updateBook;
exports.deleteBook = deleteBook;


