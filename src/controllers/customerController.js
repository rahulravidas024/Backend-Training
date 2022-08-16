const customerModel = require('../models/customerModel')

const createCustomer = async function(req, res){
    let data = req.body
    let savedData = await customerModel.create(data)
    res.send({data: savedData, status: true})
}

const getCustomerData = async function(req, res){
    let savedData = await customerModel.find()
    res.send({data: savedData, status: true})
}

module.exports.createCustomer = createCustomer
module.exports.getCustomerData = getCustomerData