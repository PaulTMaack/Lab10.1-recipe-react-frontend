//import React, { Component } from 'react';
import Form from './Form';
import List from './List';
import * as apiCalls from './api';
import './App.css';
import React, { useEffect, useState } from 'react'


function App(){
     const [ recipesArray, setRecipesArray ] = useState([ ]);

     useEffect(()=> {
     loadRecipes();
     }, []);


    const loadRecipes = async () => { 
        const recipesArray = await apiCalls.getRecipes();
        console.log("App loadRecipes: ", recipesArray);
        setRecipesArray( recipesArray); //[...recipesArray, newRecipe ]
    }

        const onDelete = async (id) => {
        await apiCalls.removeRecipe(id);
        const recipesArray = recipesArray.filter(r => r.id !== id);
        setRecipesArray( recipesArray);// [...recipesArray, newRecipe ]
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


// class App extends Component {
     //     componentDidMount() {
     //         console.log("App this.props: ", this.props)
     //         loadRecipes();
     //     }
     //     async handleSave(recipe) {
     //         console.log("App, handleSave : ", recipe)
     //         const newRecipe = await apiCalls.createRecipe(recipe);
     //         this.setState({ recipes: [...this.state.recipes, newRecipe] });
     //     }

     //     async onDelete(id) {
     //         await apiCalls.removeRecipe(id);
     //         const recipes = this.state.recipes.filter(r => r.id !== id);
     //         this.setState({ recipes });
     //     }

         //     constructor(props) {
     //         super(props);
     //         this.state = {
     //             recipes: [],
     //         }
     /**
      * Hook declaration, since it is about recipes and managing recipes state, 
      * I will be using "recipeArray" and "setRecipesArray" in the array that returns from calling 
      * useState(initialState), where initial state would be an empty array.
      */
     //         this.handleSave = this.handleSave.bind(this);
     //         this.onDelete = this.onDelete.bind(this);
     //     }

     //     render() {

     //         return ( <
     //             div className = "App" >
     //             <
     //             Form onSave = { this.handleSave }
     //             /> <
     //             List recipes = { this.state.recipes }
     //             /> <
     //             /div>
     //         );
     //     }
// }