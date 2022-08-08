const express = require('express');
const lodashPackage = require('lodash')
const abc = require('../introduction/intro')
const connectLogger = require('../logger/logger.js')
const connectHelper = require('../util/helper')
const connectFormatter = require('../validator/formatter')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log()
    connectLogger.printWelcome()
    console.log()
    connectHelper.getPrintDate()
    connectHelper.getPrintMonth()
    connectHelper.printBatchInfo()
    console.log()
    connectFormatter.getTrim()
    connectFormatter.getLowerCase()
    connectFormatter.getUpperCase()
    console.log()

    const arr1 = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const result1 = lodashPackage.chunk(arr1, 4)
    console.log("All Months are:", result1)

    const arr2 = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
    const result2 = lodashPackage.tail(arr2, 9)
    console.log("Last 9 Elements are:", result2)

    const arr3 = [1, 2, 3]
    const arr4 = [2, 3, 4,]
    const arr5 = [4, 5, 6]
    const arr6 = [5, 6, 7]
    const arr7 = [6, 7, 8]
    const result3 = lodashPackage.union(arr3, arr4, arr5, arr6, arr7)
    console.log("Union Array is:", result3)

    const arr8 = ["horror", "The Shining"]
    const arr9 = ["drama", "Titanic"]
    const arr10 = ["Thriller", "Shutter Island"]
    const arr11 = ["Fantasy", "Pans Labyrinth"]
    const result4 = lodashPackage.fromPairs([arr8, arr9, arr10, arr11])
    console.log("Key Value Pair is:", result4)

    res.send('Successfully Print on console.')
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



router.get('/test-you', function (req, res) {
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data', function (req, res) {

})
module.exports = router;
// adding this comment for no reason