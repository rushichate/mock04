const express = require("express")
const { RecipeModel } = require("../models/recipe.model")
const recipeRouter = express.Router()

recipeRouter.post("/add",async(req,res)=>{
    const { name, category, ingredients, instructions, price } = req.body;
    try{
        const newRecipe = new RecipeModel({ name, category, ingredients, instructions, price })
        await newRecipe.save()
        res.status(200).json({message:"New recipe added"})
    }catch(error){
        res.status(400).json(error)
    }
})

recipeRouter.get("/data",async(req,res)=>{
    try{
        const {category , sort} = req.query
        let query = {}
        if(category){
            query.category = category
        }
        let sortOption = {}
        if(sort){
            const sortOrder = sort === 'asc' ? 1 : -1;
            sortOption = {price:sortOrder}
        }
        const recipes = await RecipeModel.find(query).sort(sortOption)
        res.status(200).json(recipes)

    }catch(error){
        res.status(400).json(error)
    }
})

recipeRouter.delete("/:id",async(req,res)=>{
    const {id} = req.params
    try{
        await RecipeModel.findByIdAndDelete(id)
        res.status(200).json("Recipe deleted")

    }catch(error){
        res.status(400).json(error)
    }
})


module.exports ={
    recipeRouter
}