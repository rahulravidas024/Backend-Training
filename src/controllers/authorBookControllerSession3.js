const authorModelSession3 = require('../models/authorModelSession3')
const bookModelSession3 = require('../models/bookModelSession3')

const createAuthorData = async function(req, res){
    let bodyData = req.body
    let data = await authorModelSession3.create(bodyData)
    res.send({data: data, status: true})
}

const createBookData = async function(req, res){
    let bodyData = req.body
    let data = await bookModelSession3.create(bodyData)
    res.send({data: data, status: true})
}

const getBookDetails = async function(req, res){
    let author_id = await authorModelSession3.findOne({author_name: "Chetan Bhagat"}).select({author_id: 1, _id: 0})
    let data = await bookModelSession3.find(author_id)
    res.send({data: data, status: true})
}

const findAuthor = async function(req, res){
    let update = await bookModelSession3.findOneAndUpdate(
        { name: "Two States"},
        { $set: {price: 100}},
        { new: true}
    ).select({author_id: 1, price: 1, _id: 0})

    let authorName = await authorModelSession3.find(update).select({author_name: 1, _id: 0})

    res.send({data: update, authorName, status: true})
}

const findBooksByPrice = async function(req, res){
    let priceBetween = await bookModelSession3.find({price: {$gte: 50, $lte: 100}}).select({author_id: 1, name:1, price: 1, _id: 0})

    let arrayOfBookModel = priceBetween.map(x => x.author_id)

    let authorName = await authorModelSession3.find({author_id: {$in: arrayOfBookModel}}).select({author_id:1, author_name: 1, _id: 0})

    res.send({Books: priceBetween, authorName, status: true})
}


module.exports.createAuthorData = createAuthorData
module.exports.createBookData = createBookData
module.exports.getBookDetails = getBookDetails
module.exports.findAuthor = findAuthor
module.exports.findBooksByPrice = findBooksByPrice
