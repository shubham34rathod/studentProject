let mongoose=require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.DB_URL + process.env.DB_NAME)
.then(()=>console.log('connected to database'))
.catch(()=>console.log('connection error'))

let Schema1=new mongoose.Schema({
    name:{type:String},
    standard:{type:String},
    dob:{type:String},
    address:{type:String},
    city:{type:String},
    bio:{type:String},
    maths:{type:Number},
    sci:{type:Number},
    history:{type:Number},
    geography:{type:Number},
    eng:{type:Number},
    marathi:{type:Number},
    percentage:{type:Number}
},{timestamps:true}
)

let Model1=mongoose.model('data',Schema1)

module.exports={Model1}