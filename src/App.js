import React from 'react'
import HeaderComponent from './components/HeaderComponent'
import SearchComponent from './components/SearchComponent'
import { DisplayComponent } from './components/DisplayComponent'
import { DetailComponent } from './components/DetailComponent'
import { VegComponent } from './components/VegComponent'
import { CategoryComponent } from './components/CategoryComponent'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
      <div className='max-w-7xl mx-auto'>
        <HeaderComponent />
        
        <Routes>
          <Route exact path='/' element={<DisplayComponent />} />
          <Route path='/categories/:parameter' element={<CategoryComponent />} />
          <Route path='/vegetarian' element={<VegComponent />} />
          <Route path='/detail/:id' element={<DetailComponent />} />
        </Routes>

      </div>

    </>
  )
}

export default App