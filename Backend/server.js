import express from "express";
import "dotenv/config";
import cors from "cors";
import mongoose from "mongoose";
import chatRoutes from "./routes/chat.js";
import authRoutes from "./routes/auth.js";


const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cors());

app.use("/api",chatRoutes);
app.use("/api/auth", authRoutes);


const connectDB = async() =>{
  try{
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected with Database!");
  }catch(err){
    console.log("Failed to connect with Db",err);
  }
}

connectDB();
app.listen(PORT,() =>{
  console.log(`server running on ${PORT}`);
  
});



// app.post("/test",async(req,res) =>{
//   const options ={
//     method:"POST",
//     headers:{
//       "Content-Type":"application/json",
//       "Authorization":  `Bearer ${process.env.OPENROUTER_API_KEY}`
//     },

//     body: JSON.stringify({
//       model: "openai/gpt-3.5-turbo",
//       messages:[
//         {
//           "role":"user",
//           "content":req.body.message
//         }
//       ]
//     })
//   }

  
// try{
//  const response = await fetch("https://openrouter.ai/api/v1/chat/completions",options);
//  const data =  await response.json()
//  console.log(data.choices[0].message.content);
//  res.send(data);
// }catch(err){
//   console.log(err);
// }
// });

