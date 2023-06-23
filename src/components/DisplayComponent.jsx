import React, { useContext, useEffect, useState } from 'react'
import { RecipeContext } from './RecipeContext'
import axios from 'axios';
import { Link } from 'react-router-dom';

export const DisplayComponent = () => {

    const { dishName, setDishnName } = useContext(RecipeContext);
    const [recipeData, setRecipeData] = useState(null);

    useEffect(() => {
        fetchAPI();
    }, [dishName])


    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${dishName}`

    const fetchAPI = () => {
        axios.get(url)
            .then((response) => {
                const data = response.data;
                setRecipeData(data);

            }).catch((e) => {
                console.log("Error", e)
            })
    }
    if (recipeData) {
        return (
            <>
                <div className='max-w-7xl w-full mx-auto grid grid-cols-12 gap-x-10 gap-y-4 justify-center items-center'>
                    {
                        recipeData.meals.map((dishes, index) => {
                            const { strMeal, strCategory, strMealThumb, idMeal } = dishes;
                            return (


                                <Link to={`/detail/${idMeal}`} className='mt-4 col-span-4 flex flex-col justify-center w-[fit] items-center shadow-md hover:shadow-lg h-[50vh] cursor-pointer'>
                                    <div key={index}>
                                        <img src={strMealThumb} alt="" className='h-[30vh] rounded-lg' />
                                        <p className='text-center w-[210px] text-xl font-[500] overflow-hidden whitespace-nowrap text-ellipsis hover:text-[black] hover:overflow-visible hover:whitespace-normal cursor-pointer'>{strMeal}</p>
                                        <p className='text-14px font-[600] text-gray-500 text-center'>{strCategory}</p>

                                    </div>
                                </Link>

                            )
                        })
                    }
                </div >
            </>
        )
    }
    else {
        return (
            <p>
                Loading....
            </p>
        )

    }
}
