import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
/*
const connectionParams={
    useNewUrlParser:true,
    useUnifiedTopology:true,
}
*/
const DBURL=process.env.DB


const connectDB=await mongoose.connect(DBURL).then(()=>{console.log('Connected to the DB')}).catch((e)=>{console.log('ERROR connecting to DB',e)})

export default {connectDB}