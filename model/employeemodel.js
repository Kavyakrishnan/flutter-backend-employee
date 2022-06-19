var Mongoose=require('mongoose')
var EmployeeSchema=new Mongoose.Schema(
    {
        empcode:{type:Number,required:true},
        empname:{type:String,required:true},
        empaddress:{type:String,required:true},
        empmobno:{type:String,required:true},
        empsalary:{type:Number,requires:true}
      
    }
)
var employeemodel=Mongoose.model('employs',EmployeeSchema)
module.exports={employeemodel}