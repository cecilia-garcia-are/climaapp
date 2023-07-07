
import './App.css'
import Weather from './components/Weather'
import ThemeDark from './components/ThemeDark'
import { useState } from 'react'


function App() {

  const [ isThemeDark, setIsThemeDark] = useState(false)
  
  const changeToThemeDark = () => {
    setIsThemeDark(!isThemeDark)
  }

  return (
    
        <div className='card-container'>
      <div className={`dark-mode ${isThemeDark ? 'dark-mode2' : ''}`}>
      <ThemeDark isThemeDark={isThemeDark} onClick={changeToThemeDark} />
      
        <Weather 
        isThemeDark = {isThemeDark}
        />
      
      </div>
      
      </div>

      )
}

export default App;