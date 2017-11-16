import express from 'express';

//IMPORT BOOK SCHEMA FROM DB
import Book from '../models/book';

const router = express.Router();


//DISPLAY ALL BOOKS
router.get('/', (req, res) => {
    Book.find((err, books) => {
        err ? res.send(err) : res.json(books)
    });
});

//DISPLAY BOOK BY ID
router.get('/:id', (req, res) => {
    Book.findById(req.params.id, (err, books) => {
        err ? res.send(err) : res.json(books)
    });
});

//ADD A BOOK
router.post('/add', express.urlencoded({extended: true}), (req, res) => {
    let newBook = new Book(req.body);
    newBook.save((err) => {
        err ? res.send(err) : res.redirect('http://localhost:3000')
    });
});

//MODIFY A BOOK BY ID
router.post('/update/:id', express.urlencoded({extended: true}), (req, res) => {
    Book.findByIdAndUpdate(req.params.id, req.body, (err, books) => {
        err ? res.send(err) : res.redirect('http://localhost:3000')
    });
});

//DELETE A BOOK BY ID
router.post('/delete/:id', express.urlencoded({extended: true}), (req, res) => {
    Book.findByIdAndRemove(req.params.id, (err, book) => {
        err ? res.send(err) : res.redirect('http://localhost:3000')
    })
});

module.exports = router;