import express from 'express'

const app = express()
app.use(express.json())


const PORT = 5500

let users = [
    {
        username : "khizar" ,
        email : "khizar@gmail.com"
    },
    {
         username : "mudassir" ,
        email : "mudassir@gmail.com"
    }
]

// create
app.post("/user" , (req , res) =>{

    const data =  req.body
    if (data) {
        users.push(data)
    }
    else if(!data){
        return res.status(400).json({
            status : "false",
            message: "something is error"
        })
    }

    res.status(200).json({
        status : "true",
        message : "user added successfully"
    })
})
//read 

app.get("/user" , (req,res)=>{
    res.status(200).json({
        status : "true",
        data : users
    })
})

// single user

app.get("/user/:username" , (req,res)=>{

    let {username} = req.params
    let finduser = users.find((user) =>{
         if (user.username === username) {
        return user
    }
    
    })
    if (!finduser) {
        return res.status(404).json({
            status: false,
            message: "User not found",
            data: null
        });
    }
   

    res.status(200).json({
        status: "true",
        message: "single user is here",
        data : finduser
    })
})

// update 

app.put("/user/:username" , (req,res)=>{
    let body = req.body
    let {username} = req.params

    users = users.map((user) =>{
        if (user.username == body.username) {
            return user = body
        }
        return user
    })

    res.status(200).json({
        status : "true",
        data : users
    })
})

// delete

app.delete("/user/:username" , (req,res)=>{
    let {username} = req.params

    users = users.filter((user) => user.username != username)
   

    res.status(200).json({
        status : "true",
       message: "delete user successfully"
    })
})

app.listen(PORT , (req , res ) =>{
    console.log(`server is listning on port ${PORT}`);
    
})