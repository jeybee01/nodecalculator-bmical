const express = require("express");
const bodyParser = require('body-parser')

const app = express()
 
app.use(bodyParser.urlencoded({extended:true}))


app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/views/calculator.html")
})

app.post('/', (req, res)=>{
    const num1 = Number(req.body.num1);
    const num2 = Number(req.body.num2)
    const result = num2 + num1
    console.log(num1, num2)
    if(!isNaN(result)){
    res.status(200)
        .send(`the Result is ${result}`)  
    }
    else{
        res.status(403)
            .send("not a number")
}
})


app.get('/bmicalculator', (req, res)=>{
    res.sendFile(__dirname + '/views/bmicalculator.html')
})
app.post('/bmicalculator', (req, res)=>{
    const weight = parseFloat(req.body.weight)
    const height = parseFloat(req.body.height);
    const bmi = weight/(height*height)
    if(isNaN){
        res.status(200)
            .send(`your BMI result is ${bmi}`);
    }
    else{
        res.status(403)
            .send({message:"You have to put a number"})
    }
})

PORT = 8080;

app.listen(PORT, ()=>{
    console.log("listening at Port :", PORT)
})