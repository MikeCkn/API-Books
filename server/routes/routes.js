import express from 'express';

//IMPORT BOOK SCHEMA FROM DB
import Book from '../models/book';

const router = express.Router();


//ROUTE : DISPLAY ALL BOOKS
router.get('/', (req, res) => {
    Book.find((err, books) => {
        if (err) {
            res.send(err)
        }
        res.json(books)
    });
});

//ROUTE : DISPLAY BOOK BY ID
router.get('/:id', (req, res) => {
    Book.findById(req.params.id, (err, books) => {
        if (err) {
            res.send(err)
        }
        res.json(books)
    });
});

//ROUTE : ADD A BOOK
router.post('/add', express.urlencoded({extended: true}), (req, res) => {
    let newBook = new Book(req.body);
    newBook.save((err) => {
        if (err) {
            return res.send(err)
        }
        res.redirect('http://localhost:3000')
    });
});

//ROUTE: MODIFY A BOOK BY ID
router.put('/:id', (req, res) => {
    Book.findById({_id: req.params.id}, (err, books) => {
        if(err) {
            res.send(err)
        }
        Book.title = req.body.title;
        Book.save((err) => {
            if(err) {
                res.send(err)
            }
            res.json('Book updated !')
        });
    });
});

//ROUTE : DELETE A BOOK BY ID
router.post('/delete/:id', express.urlencoded({
    extended: true
}), (req, res) => {
    Book.findByIdAndRemove({_id: req.params.id}, (err, book) => {
        if(err) {
            return res.send(err)
        }
        res.redirect('http://localhost:3000')
    })
});

module.exports = router;