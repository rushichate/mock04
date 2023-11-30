const express = require("express")
const cors = require("cors")
const { connection } = require("./db")
const { recipeRouter } = require("./routes/recipe.route")
require("dotenv").config()
const app = express()

app.use(express.json())
app.use(cors())
app.get("/",(req,res)=>{
    res.json("Welcome to Try My Recipe REACT App")
})
app.use("/recipes",recipeRouter)


app.listen(process.env.port,async()=>{
    try{
       await connection
       console.log(`Connected to DB and running on port no ${process.env.port}`)
    }catch(error){
        console.log(error)
    }
})

