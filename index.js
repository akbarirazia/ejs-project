const express = require('express')

const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (req, res, next) => {

    const date = new Date()
    let day = date.getDay();
    let msg = "Sleep well my friend!"

    if(day == 0 || day == 1){
        day = "I don't know how to sleep"
    }
    console.log(day)
    res.render('index.ejs', {
        key1: "today is day "+day,
        key2: msg
    })
})

app.listen(PORT, ()=>{
    console.log(`Server is running at ${PORT}`)
})