import React, { useContext } from 'react'
import { IoRestaurantOutline } from 'react-icons/io5'
import { AiOutlineSearch, AiOutlineHome } from 'react-icons/ai'
import { GiHamburger, GiPizzaSlice, GiChickenOven, GiNoodles, GiBowlOfRice, GiTacos } from 'react-icons/gi'
import { LuVegan } from 'react-icons/lu'
import { Link, useNavigate } from 'react-router-dom'
import { RecipeContext } from './RecipeContext'

const HeaderComponent = () => {
    const { dishName, setDishName } = useContext(RecipeContext);
    const navigate = useNavigate()

    const handleSubmit = () => {
        const searchValue = document.getElementById('dishName').value
        if (!searchValue) {
            alert("Search Field Empty");
        }
        else {
            navigate('/')
            setDishName(searchValue);
        }

    }
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            const searchValue = document.getElementById('dishName').value
            if (!searchValue) {
                alert("Search Field Empty");
            }
            else {
                navigate('/')
                setDishName(searchValue);
            }

        }
    }
    return (
        <>
            <div className='max-w-7xl mx-auto py-4 px-4 '>
                <Link className='grid grid-cols-12 items-center justify-start' to='/'>
                    <IoRestaurantOutline className='text-5xl ' />
                    <p className='text-4xl font-[500] col-span-11'>
                        Recipe Finder
                    </p>

                </Link>
            </div>
            <div className='relative'>
                <input type="text" placeholder='Enter the Dish'
                    name='dishName'
                    id='dishName'
                    className='h-[20px] bg-[grey] text-white placeholder:text-white caret-white cursor-pointer py-5 px-3 rounded-lg col-span-12 w-full outline-none'
                    onKeyDown={handleKeyDown}
                />
                <button type='submit' className='text-2xl font-[500] absolute right-4 bottom-0 h-full' onClick={handleSubmit}>
                    <AiOutlineSearch />
                </button>
            </div>



            <div className='max-w-5xl mx-auto grid grid-cols-7 justify-center items-center gap-4 my-4'>
                <Link to="/">
                    <div className='col-span-1 cursor-pointer hover:bg-gray-600 bg-gray-900 flex flex-col items-center justify-center rounded-full p-2 text-[14px] text-white font-[600]'>
                        <AiOutlineHome />
                        Home
                    </div>
                </Link>

                <Link to="/vegetarian">
                    <div className='col-span-1 cursor-pointer hover:bg-gray-600 bg-gray-900 flex flex-col items-center justify-center rounded-full p-2 text-[14px] text-white font-[600]'>
                        <LuVegan />
                        Vegetarian
                    </div>
                </Link>

                <Link to="/categories/indian">
                    <div className='col-span-1 cursor-pointer hover:bg-gray-600 bg-gray-900 flex flex-col items-center justify-center rounded-full p-2 text-[14px] text-white font-[600]'>
                        <GiChickenOven />
                        Indian
                    </div>
                </Link>
                <Link to="/categories/american">
                    <div className='col-span-1 cursor-pointer hover:bg-gray-600 bg-gray-900 flex flex-col items-center justify-center rounded-full p-2 text-[14px] text-white font-[600]'>
                        <GiHamburger />
                        American
                    </div>
                </Link>
                <Link to="/categories/chinese">
                    <div className='col-span-1 cursor-pointer hover:bg-gray-600 bg-gray-900 flex flex-col items-center justify-center rounded-full p-2 text-[14px] text-white font-[600]'>
                        <GiNoodles />
                        Chinese
                    </div>
                </Link>
                <Link to="/categories/italian">
                    <div className='col-span-1 cursor-pointer hover:bg-gray-600 bg-gray-900 flex flex-col items-center justify-center rounded-full p-2 text-[14px] text-white font-[600]'>
                        <GiPizzaSlice />
                        Italian
                    </div>
                </Link>
                <Link to="/categories/mexican">
                    <div className='col-span-1 cursor-pointer hover:bg-gray-600 bg-gray-900 flex flex-col items-center justify-center rounded-full p-2 text-[14px] text-white font-[600]'>
                        <GiTacos />
                        Mexican
                    </div>
                </Link>

            </div>
        </>
    )
}

export default HeaderComponent