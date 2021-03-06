const express= require('express');
const app = express();
const userRouter = require('./routes/user')
const mongoose= require('mongoose');
const dotenv = require('dotenv');
dotenv.config()


mongoose.connect(process.env.MONGO_URL
)
.then(()=> console.log("done"))
.catch((error)=>console.log('error',error) )
app.use(express.json())

app.use('/api/user',userRouter)


app.listen(process.env.PORT || 5000,()=>{
    console.log('listening on port !');

})