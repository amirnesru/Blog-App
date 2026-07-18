import { useState } from 'react'
import Navbar from '../components/Navbar'
import Home from "../pages/Home";
import Bookmarks from '../pages/Bookmarks'
import './App.css'


function App() {
  return (
    <>
      <Navbar/>
      <Bookmarks/>
    </>
  )
}
export default App
