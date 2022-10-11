import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useAppDispatch, useAppSelector } from './store/store'
import { addCount, countValue } from './store/features/counter/counterSlice'
import { fetchData } from './store/features/data/dataSlice'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Gamme from './components/Gamme'
import Model from './components/Model'

function App() {
  const count = useAppSelector(countValue) 
  const dispatch = useAppDispatch()

  // useEffect(() => {
  //   !count && dispatch(fetchData())
  // }, []) 

  return (
    <div className="App">
     <div className="card">
        <button onClick={() => dispatch(addCount(1))}>
          count is {count}
        </button>
      </div> 
      <BrowserRouter>
          <ul>
            <li><Link to="/gamme">gamme</Link></li>
            <li><Link to="/model">model</Link></li>
          </ul>
         <Routes>
          <Route path='/gamme' element={<Gamme/>} />
          <Route path='/model' element={<Model/>} />
         </Routes> 
      </BrowserRouter>
        
      
      
    </div>
  )
}

export default App
