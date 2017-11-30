import express from 'express';
import multer from 'multer';

//IMPORT BOOK SCHEMA FROM DB
import Book from '../models/book';

const router = express.Router();

//MULTER
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
})

const upload = multer({ storage: storage })

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
router.post('/add', upload.single('image'), express.urlencoded({extended: true}), (req, res) => {
    let newBook = new Book(req.body);
        newBook.image = "uploads/" + req.file.originalname
        console.log(newBook.image)
    newBook.save((err) => {
        err ? res.send(err) : res.redirect('http://localhost:3000')
    });
});

//UPDATE A BOOK BY ID
router.post('/update/:id', express.urlencoded({extended: true}), (req, res) => {
    Book.findByIdAndUpdate(req.params.id, req.body, (err, books) => {
        err ? res.send(err) : res.redirect('http://localhost:3000')
    });
});

//DELETE A BOOK BY ID
router.get('/delete/:id', (req, res) => {
    Book.findByIdAndRemove(req.params.id, (err, book) => {
        err ? res.send(err) : res.redirect('http://localhost:3000')
    })
});

module.exports = router;