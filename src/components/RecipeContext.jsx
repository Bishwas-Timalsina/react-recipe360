import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'


export const RecipeContext = createContext();
const RecipeProvider = ({children}) => {

    const [dishName, setDishName] = useState('Egg');
    const contextData = {
        dishName,
        setDishName
    }
 
  return (
    <RecipeContext.Provider value={contextData}>
        {children}
    </RecipeContext.Provider>
  )
}

export default RecipeProvider;