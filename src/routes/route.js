const express = require('express');
const router = express.Router();

router.post('/players', function (req, res) {
    let players = [
        {
            "name": "manish",
            "dob": "1/1/1995",
            "gender": "male",
            "city": "jalandhar",
            "sports": [
                "swimming"
            ]
        },
        {
            "name": "gopal",
            "dob": "1/09/1995",
            "gender": "male",
            "city": "delhi",
            "sports": [
                "soccer"
            ]
        },
        {
            "name": "lokesh",
            "dob": "1/1/1990",
            "gender": "male",
            "city": "mumbai",
            "sports": [
                "soccer"
            ]
        },
    ]

    let newPlayer = req.body
    let flag = false
    for (let i = 0; i < players.length; i++) {
        if (players[i].name == newPlayer.name) {
            flag = true
            break
        }
    }

    if (flag) {
        res.send('Players Already Exixts')

    }
    else {
        players.push(newPlayer)
        res.send({ data: players, status: true })
    }
})

router.post('/voting-Data/:age', function (req, res) {
    let votingData = [
        {
            "name": "Rahul",
            "age": 23,
            "votingStatus": false
        },
        {
            "name": "Anil",
            "age": 25,
            "votingStatus": false
        },
        {
            "name": "Shivmurat",
            "age": 15,
            "votingStatus": false
        },
        {
            "name": "Shubham",
            "age": 17,
            "votingStatus": false
        },
        {
            "name": "Bittu",
            "age": 12,
            "votingStatus": false
        },
        {
            "name": "Rohit",
            "age": 35,
            "votingStatus": false
        }
    ]

    let age = req.params.age
    let arr = []
    let flag = false
    for (let i = 0; i < votingData.length; i++) {
        if (votingData[i].age >= age) {
            votingData[i].votingStatus = true
            arr.push(votingData[i])
            flag = true
        }
    }

    if (flag) {
        res.send({ data: arr, status: true })
    }
    else {
        res.send('No Data Found')
    }
})


router.post('/players/:playerName/:bookings/:bookingId', function (req, res) {
    let players = [
        {
            "name": "manish",
            "dob": "1/1/1995",
            "gender": "male",
            "city": "jalandhar",
            "sports": [
                "swimming"
            ]
        },
        {
            "name": "gopal",
            "dob": "1/09/1995",
            "gender": "male",
            "city": "delhi",
            "sports": [
                "soccer"
            ]
        },
        {
            "name": "lokesh",
            "dob": "1/1/1990",
            "gender": "male",
            "city": "mumbai",
            "sports": [
                "soccer"
            ]
        },
    ]

    let bookings = [
        {
            "bookingNumber": 1,
            "sportId": "",
            "centerId": "",
            "type": "private",
            "slot": "16286598000000",
            "bookedOn": "31/08/2021",
            "bookedFor": "01/09/2021"
        },
        {
            "bookingNumber": 2,
            "sportId": "",
            "centerId": "",
            "type": "private",
            "slot": "16286598000000",
            "bookedOn": "23/08/2021",
            "bookedFor": "23/09/2021"
        },
        {
            "bookingNumber": 3,
            "sportId": "",
            "centerId": "",
            "type": "private",
            "slot": "16286598000000",
            "bookedOn": "10/08/2021",
            "bookedFor": "15/09/2021"
        }
    ]

    let playerName = req.params.playerName
    let bookingId = req.params.bookingId
    let newBooking = req.body
    let flag = false
    let bookingFlag = false

    for (let i = 0; i < players.length; i++) {
        if (players[i].name == playerName) {
            flag = true
        }
    }

    if (flag) {
        for (let j = 0; j < bookings.length; j++) {
            if (bookings[j].bookingNumber == bookingId) {
                bookingFlag = true
            }
        }
        if (bookingFlag) {
            res.send('Booking already Done')
        }
        else {
            bookings.push(newBooking)
            res.send({data: bookings, bookingStatus: "New Booking Done"})
        }
    }
    else {
        res.send('Player name not found in the Database')
    }
})




router.get('/students/:name', function (req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
})

router.get("/random", function (req, res) {
    res.send("hi there")
})


router.get("/test-api", function (req, res) {
    res.send("hi FunctionUp")
})


router.get("/test-api-2", function (req, res) {
    res.send("hi FunctionUp. This is another cool API")
})


router.get("/test-api-3", function (req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's ")
})


router.get("/test-api-4", function (req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})



router.get("/test-api-5", function (req, res) {
    res.send("hi FunctionUp5. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})

router.get("/test-api-6", function (req, res) {
    res.send({ a: 56, b: 45 })
})

router.post("/test-post", function (req, res) {
    res.send([23, 45, 6])
})


router.post("/test-post-2", function (req, res) {
    res.send({ msg: "hi", status: true })
})

router.post("/test-post-3", function (req, res) {
    // let id = req.body.user
    // let pwd= req.body.password

    // console.log( id , pwd)

    console.log(req.body)

    res.send({ msg: "hi", status: true })
})



router.post("/test-post-4", function (req, res) {
    let arr = [12, "functionup"]
    let ele = req.body.element
    arr.push(ele)
    res.send({ msg: arr, status: true })
})

module.exports = router;