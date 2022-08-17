const bookModelAssignment = require('../models/bookModelAssignment')

const createBookData = async function(req, res){
    let data = req.body
    let savedData = await bookModelAssignment.create(data)
    res.send({data: savedData, status: true})
}

const getBookDetails = async function(req, res){
    let savedData = await bookModelAssignment.find()
    res.send({data: savedData, status: true})
}

const bookList = async function(req, res){
    let data = await bookModelAssignment.find().select({bookName: 1, authorName: 1, _id: 0})
    res.send({data: data, status: true})
}

const getBooksInYear = async function(req, res){
    let data = req.body.year
    let savedData = await bookModelAssignment.find({ year: {$eq: data}}).select({bookName: 1, year: 1, _id: 0})
    res.send({data: savedData, status: true})
}

const getParticularBooks = async function(req, res){
    let bodyData = req.body
    let data = await bookModelAssignment.find(bodyData)
    res.send({data: data, status: true})
}

const getXINRBooks = async function(req, res){
    let data = await bookModelAssignment.find({"price.indianPrice": {$in: ["100INR", "200INR", "500INR"]}})  .select({bookName: 1, "price.indianPrice" : 1, _id: 0})
    res.send({data: data, status: true})
}

const getRandomBooks = async function(req, res){
    let data = await bookModelAssignment.find({stockAvailable: {$eq: true}, totalPages: {$gt: 500}}).select({bookName: 1, stockAvailable: 1, totalPages: 1, _id: 0})
    res.send({data: data, status: true})
}

module.exports.createBookData = createBookData
module.exports.getBookDetails = getBookDetails
module.exports.bookList = bookList
module.exports.getBooksInYear = getBooksInYear
module.exports.getParticularBooks = getParticularBooks
module.exports.getXINRBooks = getXINRBooks
module.exports.getRandomBooks = getRandomBooks