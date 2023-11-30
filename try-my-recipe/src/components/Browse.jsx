import React,{useState,useEffect} from 'react'
import axios from 'axios'



function Browse() {
    const [recipies, setRecipies] = useState([])
    const [catagoryFilter, setCatagoryFilter] = useState("")
    const [sortOrder, setSortOrder] = useState("")

    useEffect(()=>{
        fetchRecipe()
    },[catagoryFilter,sortOrder])

    const fetchRecipe = async () =>{
        try{
         const res = await axios.get(`http://localhost:8000/recipes/data?category=${catagoryFilter}&sort=${sortOrder}`)
         setRecipies(res.data)
        }catch(error){
            console.error("error fetching recipies:",error)
        }
    }

    const handleDelete = async(id) =>{
    try{
        await axios.delete(`http://localhost:8000/recipes/${id}`)
        alert("Recipe Deleted")
        window.location.reload();

    }catch(error){
        console.error("Error deleting recipe:",error)
    }
    }
  return (
    <div>
      <h2>Browse Recipes</h2>
      <div>
        <label htmlFor="">
            Catagory:
            <select value={catagoryFilter} onChange={(e)=> setCatagoryFilter(e.target.value)}>
            <option value="">All</option>
                    <option value="Starters">Starters</option>
                    <option value="Main Course">Main Course</option>
                    <option value="Desserts">Desserts</option>
            </select>
        </label>
        <label htmlFor="">
            Sort Order:
            <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)} >
                <option value="">None</option>
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
            </select>
        </label>
      </div>

      <div>
        {recipies.map((recipie)=>(
            <div key={recipie._id}>
                <h3>{recipie.name}</h3>
                <p>Category:{recipie.category}</p>
                <p>Ingredients:{recipie.ingredients}</p>
                <p>Instructions:{recipie.instructions}</p>
                <p>Price:{recipie.price}</p>
                <button onClick={ () => handleDelete(recipie._id)}>Delete</button>
                 </div>
        ))}
      </div>

    </div>
  )
}

export default Browse