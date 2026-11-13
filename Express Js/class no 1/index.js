import express from "express"

const app = express()

app.get("/" , (req , res) =>{
    console.log("request -->" , req);
    res.status(200).send("succssfully request hit")
})
app.listen(5500, () =>{
    console.log("server is listening from port 5500");
    
})