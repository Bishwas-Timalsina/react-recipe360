import React, { useContext, useEffect, useState } from 'react'
import { RecipeContext } from './RecipeContext'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

export const CategoryComponent = () => {

    const { dishName, setDishnName } = useContext(RecipeContext);
    const [recipeData, setRecipeData] = useState(null);

    const{parameter} = useParams()
    console.log(parameter)
    const capParams = parameter.charAt(0).toUpperCase() + parameter.slice(1);

    useEffect(() => {
        fetchAPI();
    }, [parameter])


    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${parameter}`

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
        const displayData = recipeData.meals.slice(0, 9);
        return (
            <>
                <div className='max-w-7xl w-full mx-auto my-14'>
                    <p className='text-center text-3xl font-[500]'>Our {capParams} Picks</p>

                    <div className='grid grid-cols-12 gap-x-10 gap-y-4 justify-center items-center'>

                        {
                            displayData.map((dishes, index) => {
                                const { strMeal, strMealThumb, idMeal } = dishes;
                                return (
                                    <Link    to={`/detail/${idMeal}`} className='mt-4 col-span-4 flex flex-col justify-center w-[fit] items-center shadow-lg h-[50vh] cursor-pointer'>
                                    <div key={index} className='mt-4 col-span-4 flex flex-col justify-center w-[fit] items-center shadow-lg h-[50vh] cursor-pointer'>
                                        <img src={strMealThumb} alt="" className='h-[30vh] rounded-lg' />
                                        <p className='text-center w-[210px] text-xl font-[500] overflow-hidden whitespace-nowrap text-ellipsis hover:text-[black] hover:overflow-visible hover:whitespace-normal cursor-pointer'>{strMeal}</p>
                                    </div>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
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
