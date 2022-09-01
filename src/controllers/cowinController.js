let axios = require("axios")

let getStates = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getDistricts = async function (req, res) {
    try {
        let id = req.params.stateId
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getByPin = async function (req, res) {
    try {
        let pin = req.query.pincode
        let date = req.query.date
        console.log(`query params are: ${pin} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getOtp = async function (req, res) {
    try {
        let blahhh = req.body
        
        console.log(`body is : ${blahhh} `)
        var options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data: blahhh
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

// Assignments Question 1
const findByDistrict = async function(req, res){
    try{
        let districtId = req.query.district_id
        let date = req.query.date

        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${districtId}&date=${date}`
        }
        const result = await axios(options)
        let data = result.data
        res.status(200).send({msg: data, status: true})
    }
    catch(err){
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

// Assignments Question 2
const getWeather = async function(req, res){
    try{
        let q = req.query.q
        let appId = req.query.appid
        
        let options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${appId}`
        }
        let result = await axios(options)
        let data = result.data
        res.status(200).send({msg: data, status: true})
    }
    catch(err){
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

const getWeatherTemperature = async function(req, res){
    try{
        let q = req.query.q
        let appId = req.query.appid
        
        let options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${appId}`
        }
        let result = await axios(options)
        let data = result.data.main.temp
        res.status(200).send({temp: data})
    }
    catch(err){
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

const sortGivenCityByTemperature = async function(req, res){
    try{
        let q = req.query.q
        //console.log(q)
        let appId = req.query.appid
        let emptyArray = []
        for(let i=0; i<q.length; i++)
        {
            let options = {
                method: "get",
                url: `http://api.openweathermap.org/data/2.5/weather?q=${q[i]}&appid=${appId}`
            }
            let result = await axios(options)
            let data = result.data.main.temp
            let obj = {city: q[i], temp: data}
            emptyArray.push(obj)
        }
        let sortedData = emptyArray.sort(function(a,b){ return a.temp - b.temp})
        //console.log(sortedData)
        res.status(200).send({data: sortedData})  
    }
    catch(err){
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

// Assignments Question 3
const getAllMemes = async function(req, res){
    try{
        let options = {
            method: "get",
            url: "https://api.imgflip.com/get_memes"
        }
        let result = await axios(options)
        let data = result.data
        res.status(200).send({data: data, status: true})
    }
    catch(err){
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

const createMeme = async function(req, res){
    try{
        let templateId = req.query.template_id
        let text0 = req.query.text0
        let text1 = req.query.text1
        let username = req.query.username
        let password = req.query.password
        let options = {
            method: "post",
            url: `https://api.imgflip.com/caption_image?template_id=${templateId}&text0=${text0}&text1=${text1}&username=${username}&password=${password}`
        }
        let result = await axios(options)
        let data = result.data
        res.status(200).send({data: data, status: true})
    }
    catch(err){
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

module.exports.getStates = getStates
module.exports.getDistricts = getDistricts
module.exports.getByPin = getByPin
module.exports.getOtp = getOtp

module.exports.findByDistrict = findByDistrict
module.exports.getWeather = getWeather
module.exports.getWeatherTemperature = getWeatherTemperature
module.exports.sortGivenCityByTemperature = sortGivenCityByTemperature
module.exports.getAllMemes = getAllMemes
module.exports.createMeme = createMeme