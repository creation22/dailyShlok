import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  Star  from './components/star.jsx'
import PayMeButton from './components/Pay.jsx'
import ShlokDisplay from './components/ShlokDisplay.jsx'
import GoalTracker from './components/GoalTracker.jsx'
import SettingsPanel from './components/Setting.jsx'
import SearchBar from './components/Searchbar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ShlokDisplay/>
    <SearchBar/>
    <GoalTracker/>
    <Star/>
    <SettingsPanel/>
    <PayMeButton/>
    </>
  )
}

export default App
