const express = require ("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const app = express();
app.use(express.json());
app.use("/books", router); 


mongoose
.connect(
    "mongodb+srv://arti:tiger@cluster0.gvqjdk9.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(()=>
        app.listen(5000,()=>console.log("connected and listening on port 5000"))
    )
    .catch((err)=> console.log(err));

