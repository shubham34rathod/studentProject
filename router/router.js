let express=require('express')
let cors=require('cors')
let {Model1}=require('../data_base/db.js')

let router=express.Router()

router.use(express.json())
router.use(express.urlencoded({extended:true}))

router.use(cors())

router.get('/',(req,res)=>{
    res.send('hello world')
})
router.post('/data',(req,res)=>{
    try 
    {
        res.json('received')
        console.log(req.body);
        let {name,standard,dob,address,city,maths,sci,history,geography,eng,marathi}=req.body
        let totalOfMarks=Number(maths)+Number(sci)+Number(history)+Number(geography)+Number(eng)+Number(marathi)
        let percent=(totalOfMarks/600)*100
        let doc=new Model1({
        name:name,
        standard:standard,
        dob:dob,
        address:address,
        city:city,
        maths:maths,
        sci:sci,
        history:history,
        geography:geography,
        eng:eng,
        marathi:marathi,
        percentage:percent.toFixed(2)
    })
    doc.save()
    } 
    catch (error) 
    {
        res.json('server side error')
    }
})

router.get('/getData/:grade',async (req,res)=>{
    try  
    {
        console.log(req.params.grade);
        let data=await Model1.find({standard:req.params.grade})
        // console.log(data);
        res.send(data)
    } 
    catch (error) 
    {
        res.json(error)
    }
})

router.get('/getData/above60/:grade',async (req,res)=>{
    try  
    {
        console.log(req.params.grade);
        let data=await Model1.find({$and:[{standard:req.params.grade},{percentage:{$gt:60}}]})
        // let data=await Model1.find({standard:req.params.grade})
        console.log(data);
        res.send(data)
    } 
    catch (error) 
    {
        res.json(error)
    }
})


module.exports=router