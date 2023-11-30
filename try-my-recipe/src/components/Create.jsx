import React,{useState} from 'react'
import axios from 'axios'

function Create() {
 const [recipeData, setRecipeData] = useState({
    name:"",
    catagory:"",
    ingredients:"",
    instructions:"",
    price:0
 })

 const handleChange = (e) =>{
    const {name,value} = e.target;
    setRecipeData((prevData)=>({
        ...prevData,[name]:value
    }))

 }
 const handleSubmit = async (e) =>{
    e.preventDefault()
   try{
     await axios.post("http://localhost:8000/recipes/add",recipeData)
   }catch(error){
    console.error(error)
   }
 }

  return (
    <div>
        <h2>Create Recipe</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Recipe Name:
            <input type="text" name='name' value={recipeData.name} onChange={handleChange} />
            </label>

            <label htmlFor="">
                Catagory:
                <select name="catagory" id="" value={recipeData.catagory} onChange={handleChange}>
                    <option value="">Select Cataory</option>
                    <option value="Starters">Starters</option>
                    <option value="Main Course">Main Course</option>
                    <option value="Desserts">Desserts</option>
                </select>
            </label>
            <label htmlFor="">
                Ingredients:
                <input type="text" name="ingredients" id="" value={recipeData.ingredients} onChange={handleChange}/>
            </label>
            <label htmlFor="">
                Instructions:
                <input type="text" name='instructions' value={recipeData.instructions} onChange={handleChange} />
            </label>
            <label htmlFor="">
                Price:
                <input type="number" name='price' value={recipeData.price} onChange={handleChange}/>
            </label>
            <button type='submit'>Create Recipe</button>
        </form>


    </div>
  )
}

export default Create