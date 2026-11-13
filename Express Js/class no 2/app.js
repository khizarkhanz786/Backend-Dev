
import express from 'express'

const app = express()
const port = 5500

const users = []

app.use(express.json())

app.get("/" , (req , res) =>{
    res.json({
        status : "true",
        data : "khizar khan"
    })
})
app.get("/health" , (req , res) =>{
     res.json({
        status : "true",
        data : "khizar khan",
        age: "22",
        college : "smit"
    })
})

app.post("/signup" , (req , res) =>{

    console.log(req.body);
    
    if (req.body) {
        users.push(req.body)
    }
    res.status(201).json({
        status : "true",
        message : "user signup succsesfully",
        data : users
    })
})

app.delete("/delet-user" , (req , res) =>{
    res.status(200).json({
        status : "true",
        message : "user deleted successfullly"
    })
})

app.put("/edit" , (req , res) =>{
    res.json({
        status:"true",
        message : "edit successfully"
    })
})
app.listen(port , ()=>{
    console.log(`server is running on port ${port}`);
    
})