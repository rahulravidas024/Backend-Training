const text = '      TODAY Is friday     '

let trim = function(){
    let trimText = text.trim()
    console.log('Text:', text) 
    console.log('___________________________________________')
    console.log('Trim text is:', trimText)
}
module.exports.getTrim = trim

let changeToLowerCase = function(){
    let lowerText = text.toLowerCase()
    console.log('Lowercase text is:', lowerText)
}
module.exports.getLowerCase = changeToLowerCase

let changeToUpperCase = function(){
    let upperText = text.toUpperCase()
    console.log('Uppercase text is:', upperText)
}
module.exports.getUpperCase = changeToUpperCase
