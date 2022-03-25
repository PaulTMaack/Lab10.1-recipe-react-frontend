//import React, { Component } from 'react';
import Form from './Form';
import List from './List';
import * as apiCalls from './api';
import './App.css';
import React, { useEffect, useState } from 'react'


function App() {
    const [recipesArray, setRecipesArray] = useState([]);

    useEffect(() => {
        loadRecipes();
    }, []);
    const loadRecipes = async() => {
        const recipesArray = await apiCalls.getRecipes();
        console.log("App loadRecipes: ", recipesArray);
        setRecipesArray(recipesArray); //[...recipesArray, newRecipe ]
    }

    const onDelete = async(id) => {
        await apiCalls.removeRecipe(id);
        const recipesArray = recipesArray.filter(r => r.id !== id);
        setRecipesArray(recipesArray); // [...recipesArray, newRecipe ]
    }

    return (
     <div className="App">
          {(recipesArray.length === 0)
          ?
          "No recipes found in the database. Please use the form to add your own recipe"
       :
       <List  
               recipesArray recipes={recipesArray} onDelete={onDelete} 
       /> 
          }
     </div>
   );
   
 }

    export default App;