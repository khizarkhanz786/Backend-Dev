// let username = "khizar khan"

// console.log(username);
// console.log(12345);


// const fs = require("fs")

// let result = fs.readFileSync("./text.txt" , "utf-8")

// console.log(result);


// const fs = require("fs")

// let result = fs.readFile("./text.txt" , "utf-8", (err , data ) => {
//     console.log(data);

// })

// console.log(result);


// const fs = require("fs")
// fs.writeFileSync("server.txt" , "hello world")
// console.log("its work");

// const fs = require("fs")
// fs.writeFile("server.txt" , "hn guru kia haal chaall " , "utf-8" , (err ,data)=>{
//     if (err) {
//         console.log("error guru");

//     }
//     console.log(data);

// })


// SERVER
const fs = require("fs")

const http = require("http")
const url = require("url")

const server = http.createServer((req, res) => {
    console.log(req.url);
    if (req.url === "/shoes") {
        res.end("yelo shoes bahi")
    } else if (req.url === "/shirt") {
        res.end("yelo shirt bahi")
    } else {
        res.end("hello from the server")
    }
})

server.listen(5500, "127.0.0.1", () => {
    console.log("server is running");
})