const express = require('express');
const abc = require('../introduction/intro')
const connectLogger = require('../logger/logger.js')
const connectHelper = require('../util/helper')
const connectFormatter = require('../validator/formatter')
const router = express.Router();

router.get('/test-me', function(req, res){
    connectFormatter.getTrim()
    connectFormatter.getLowerCase()
    connectFormatter.getUpperCase()
    res.send('The Text are successfully trim, lowercase and uppercase.')
})

// router.get('/test-me', function (req, res){
//     connectHelper.getPrintDate()
//     connectHelper.getPrintMonth()
//     connectHelper.printBatchInfo()
//     res.send('Date, month and batch information successfully print on console.')
// })

// router.get('/test-me', function (req, res){
//     connectLogger.printWelcome()
//     res.send('Welcome message successfully prints on the console.')
// });


router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    res.send('My second ever api!')
});



router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason