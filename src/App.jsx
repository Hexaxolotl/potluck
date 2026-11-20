import { useState } from 'react'
import { supabase } from './utils/supabase'
import MealCard from './MealCard.jsx'
import './App.css'


function App() {
  const [meals, setMeals] = useState([])

  const loadMeals = async () => {
    const { data, error } = await supabase.from("meals").select()
    if (error) {
      console.log(error.message)
      return
    }
    console.log(data)
    setMeals(data)
  }

    const addMeal = (event) => {
    event.preventDefault()
    const form = event.target
    const meal = {
      meal_name: form.mealName.value,
      guest_name: form.guestName.value,
      serves: Number(form.serves.value),
    }
    console.log(meal)
    

    const removeMeal = async (id) => {
      const result = await supabase.from("meals").insert(meals)
      if (result.error){
        console.log(result.error.messaage)
        return

      }
      reload()
  }


  return (
    <div>
      <h1>Potluck</h1>
      <form onSubmit={addMeal}>
        <input name="mealName" placeholder="Dish" />
        <input name="guestName" placeholder="Your name" />
        <input name="serves" type="number" placeholder="Serves" />
        <button>Add</button>
      </form>
      <button onClick={loadMeals}>Load</button>
      {meals.map((meal) => <MealCard key={meal.id} meal={meal} />)}
    </div>
  )
}

export default App
