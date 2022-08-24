const express = require('express');
const router = express.Router();
const newAuthorController = require('../controllers/newAuthorController')
const newPublisherController = require('../controllers/newPublisherController')
const newBookController = require('../controllers/newBookController')

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post('/createNewAuthor', newAuthorController.createNewAuthor)
router.get('/getAllAuthor', newAuthorController.getAllAuthor)

router.post('/createNewPublisher', newPublisherController.createNewPublisher)
router.get('/getAllPublisher', newPublisherController.getAllPublisher)

router.post('/createNewBook', newBookController.createNewBook)
router.get('/getAllBook', newBookController.getAllBook)
router.get('/getAllBookWithAuthorAndPublisher', newBookController.getAllBookWithAuthorAndPublisher)

router.put('/books', newBookController.updateBooks)

module.exports = router;