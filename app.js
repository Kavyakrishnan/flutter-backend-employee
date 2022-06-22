var Express=require('express')
var Bodyparser=require('body-parser')
var Mongoose=require('mongoose')
var {employeemodel}=require('./model/employeemodel')
module.exports={employeemodel}
var app=Express()
app.use(Bodyparser.urlencoded({extended:true}))
app.use(Bodyparser.json())

Mongoose.connect("mongodb+srv://kavya:12345@cluster0.2q4qp.mongodb.net/employeeflutterdb")
app.get('/',(req,res)=>{
    res.send(" Welcome to my Employee nodejs")
})
app.get('/view',async(req,res)=>{try{
    var result=await employeemodel.find()
    res.send(result)
}
  catch(error)
  {
   
    res.send(error)
  }  
})
app.post('/read',(req,res)=>{

    var EmployeeObject=new employeemodel(req.body)
    EmployeeObject.save((error)=>{
        if(error)
        {
res.send({"status":error})
        }
        else{
res.send({"status":"success"})
        }
    })
 
})
app.post('/search',async(req,res)=>{
    try{
        var result= await employeemodel.find(req.body)
        res.json(result)
    }
    catch(error)
    {
        res.json(error)
    }
   
})
app.post('/edit',async(req,res)=>{
    try{
var result= await employeemodel.findByIdAndUpdate({"_id":req.body._id},req.body)
res.json(result)
    }
    catch(error){
        res.json(error)

    }
})
app.post('/delete',async(req,res)=>{
    try{
var result= await employeemodel.findByIdAndDelete({"_id":req.body._id})
res.json(result)

    }
    catch(error){
        res.json(error)
    }
})
app.listen( process.env.PORT || 3005,(req,res)=>{
    console.log("server is running")
})

