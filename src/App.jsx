
import './App.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import  Location from './components/Location'
import ResidentInfo from './components/ResidentInfo'
function App() {
 
  const [idRandom, setIdRandom] = useState (1)
  const [residentsArray, setResidentsArray] = useState([])
  const [locationObjt, setLocationObjt] = useState({})
  const generateRandomNumber = () => {
    const numberRandom = Math.floor(Math.random(1) * 126)
    setIdRandom (numberRandom)
  }

  useEffect ( () => {

    axios
      .get(" https://rickandmortyapi.com/api/location ")
      .then ( resp => setResidentsArray(resp.data?.results[idRandom]?.residents) )
      .catch ( error => console.error( error ) )
    axios 
      .get ("https://rickandmortyapi.com/api/location")
      .then (resp2 => setLocationObjt(resp2.data?.results[idRandom]) )
      .catch (error => console.error(error))

  }, [])
console.log(idRandom)
  return (
    <div className="App">
        <div className='logo-div'><img className='logotype' src='./src/assets/logo.svg' /></div>
        <div> 
          <Location 
            locationData = {locationObjt}
          />  
        </div>
        <ul className='cards'>
        {
          residentsArray.map( resident => (
          <ResidentInfo
          key={resident}  
          residentData = {resident}
          />  
          ) )
        } 
        </ul>
        
    </div> 
  )
}

export default App
