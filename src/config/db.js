import mongoose, { mongo } from "mongoose";

const conectMongo= (url)=>  mongoose.connect(url).then(()=>console.log("MONGODB CONECTADO"))


export default conectMongo