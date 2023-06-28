let express=require('express')
let router=require('./router/router.js')

let app=express()

app.use(router)

app.listen(8000,()=>console.log('port is runing on 8000'))

