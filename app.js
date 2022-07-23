const Express=require("express")
const Bodyparser=require("body-parser")
const Mongoose=require("mongoose")
const Cors=require("cors")
const {courseModel}=require("./courseModel")
const bodyParser = require("body-parser")

const app=Express()

app.use(Cors())
app.use(Bodyparser.urlencoded({extended:false}))
app.use(bodyParser.json())
Mongoose.connect("mongodb+srv://AnishaRajAR:Anisha2002april@cluster0.nl0vs.mongodb.net/CollegeDB?retryWrites=true&w=majority")

app.post("/addcourse",async (req,res)=>{
    const data =req.body
  const ob=new courseModel(data)
  ob.save(
    (error,data)=>{
        if (error)
        {
            res.send("Error occured")
        }
        else{
            res.send(data)
        }
    }
  )
  
})
app.get("/viewcourse",async(req,res)=>{
   courseModel.find(
    (error,data)=>{
        if(error)
        {
            res.send(error)
        }
        else{res.send(data)}
        }
    
   )})
app.get("/searchcourse",(req,res)=>{
    res.send("To  search course")
})

app.get("/updatecourse",(req,res)=>{
    res.send("To update course")
})
app.get("/deletecourse",(req,res)=>{
    res.send("To delete course")
})





app.listen(3000,()=>{
    console.log("server running on http://localhost:3000)")
})


