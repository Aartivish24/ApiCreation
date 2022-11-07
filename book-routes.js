const express = require('express');
const { getAllBooks, addBook, updateBook, deleteBook } = require('../controller/book-controller');

const router = express.Router();

router.get("/",getAllBooks);
router.post("/", addBook);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);




module.exports = router;