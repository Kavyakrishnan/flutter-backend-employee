var Express=require('express')
var Bodyparser=require('body-parser')
var Mongoose=require('mongoose')
var {employeemodel}=require('./model/employeemodel')
module.exports={employeemodel}
var app=Express()
app.use(Bodyparser.urlencoded({extended:true}))
app.use(Bodyparser.json())

app.get('/',(req,res)=>{
    res.send(" Welcome to my Employee nodejs")
})
app.post('/read',(req,res)=>{
    var EmployeeObject=new employeemodel(req.body)
    res.json(EmployeeObject)
})
app.listen( process.env.PORT || 3005,(req,res)=>{
    console.log("server is running")
})

