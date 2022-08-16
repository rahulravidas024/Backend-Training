const mongoose = require('mongoose')

const customerSchema = mongoose.Schema({
    customerFirstName: String,
    custometLastName: String,
    mobileNumber: String,
    pincode: String,
    city: String 
},
{timestamps: true}
)

module.exports = mongoose.model('customerDatabase', customerSchema)