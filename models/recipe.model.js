const mongoose = require("mongoose")

const recipeSchema = mongoose.Schema({
    name:{type:String,required:true},
    category:{type:String},
    ingredients:{type:String,required:true},
    instructions:{type:String,required:true},
    price:{type:Number,required:true}
},{
    versionKey:false
})

const RecipeModel = mongoose.model("recipe",recipeSchema)

module.exports = {
    RecipeModel
}