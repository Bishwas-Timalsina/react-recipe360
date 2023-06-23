import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const DetailComponent = () => {
  const { id } = useParams()
  const [instruction, setInstruction] = useState(null)
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`

  useEffect(() => {
    fetchAPIData()
  }, [id])

  const fetchAPIData = () => {
    axios.get(url)
      .then((response) => {
        const data = response.data
        setInstruction(data)


      })
      .catch((e) => {
        console.log("Error", e)
      })
  }

  if (!instruction) {
    <p>Loading....</p>
  }
  else {
    const arrayData = instruction.meals[0]
    console.log(arrayData)
    const { idMeal, strInstructions, strMeal, strArea, strCategories, strMealThumb } = arrayData;
    const slicedString = strInstructions.split("\n");


    const ingredients = [];
    const measures = [];

    for (let i = 1; i <= 20; i++) {
      const ingredient = instruction.meals[0]["strIngredient" + i];
      if (ingredient && ingredient !== "") {
        ingredients.push(ingredient);
      }
      const measure = instruction.meals[0]["strMeasure" + i];
      if (measure && measure !== "") {
        measures.push(measure);
      }
    }

    return (
      <>
        <div className='max-w-7xl mx-auto px-4 my-12'>
          <div className='flex flex-col justify-center items-center'>
            <img src={strMealThumb} alt="" className='h-[40vh] w-[40%] rounded-md object-contain' />
            <p className='text-[22px] font-[500]'>{strMeal}</p>
            <p className='text-[14px] font-[400]'>{strArea}</p>
          </div>

          <div className='grid grid-cols-4 justify-center items-start px-4'>
            <div className='max-w-5xl px-12 col-span-1 sticky top-[20px]'>
              <h2 className='text-[28px] font-[500] underline'>Ingredients</h2>
              {
                ingredients.map((ing, index) => (

                  <p key={index} className='text-[16px] font-[400]'>{measures[index]} {ing}</p>

                ))
              }
            </div>
            <div className='max-w-5xl px-12 col-span-3'>
              <h2 className='text-[28px] font-[500] underline'>Steps</h2>
              {
                slicedString.map((sentence, index) => (
                  <div key={index}>
                    <p className='text-[16px] leading-[26px] mt-[2px]'>{sentence}</p>
                  </div>
                ))}

            </div>
          </div>
        </div>
      </>
    )
  }

}

