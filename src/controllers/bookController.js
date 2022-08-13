const bookModel = require('../models/bookModel')

const createBookData = async function(req, res){
    let bookData = req.body
    let savedBookData = await bookModel.create(bookData)
    res.send({data: savedBookData, status: true})
}

const getBookData = async function(req, res){
    let getBookDetails = await bookModel.find()
    res.send({data: getBookDetails, status: true})
}

module.exports.createBookData = createBookData
module.exports.getBookData = getBookData