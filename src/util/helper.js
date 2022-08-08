
const calender = new Date()
const batch = 'Plutonium'
const weak = 3
const day = 5

let printDate = function(){
    const d = calender.getDate()
    console.log('Date:', d)
}
module.exports.getPrintDate = printDate

let printMonth = function(){
    const m = calender.getMonth()
    console.log('Month:', m + 1)
}
module.exports.getPrintMonth = printMonth

let getBatchInfo = function(){
    console.log(batch,'Weak',weak,'Day',day,'the topic for today is NodeJs module system.')
}
module.exports.printBatchInfo = getBatchInfo