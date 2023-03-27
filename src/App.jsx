
import './App.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import  Location from './components/Location'
import ResidentInfo from './components/ResidentInfo'
function App() {
 
  const [residentsArray, setResidentsArray] = useState([])
  const [locationObjt, setLocationObjt] = useState({})
  const [searchLoc, setSearchLoc] = useState("")

  useEffect ( () => {

      let numberRandom = Math.floor(Math.random(1) * 19)
    
    axios
      .get(`https://rickandmortyapi.com/api/location/${numberRandom}`)
      .then ( resp => setResidentsArray(resp.data?.residents) )
      .catch ( error => console.error( error ) )
    axios  
      .get (`https://rickandmortyapi.com/api/location/${numberRandom}`)
      .then (resp2 => setLocationObjt(resp2.data) )
      .catch (error => console.error(error))

  }, [])

  const search = () => {
    axios
      .get(`https://rickandmortyapi.com/api/location?name=${searchLoc}`)
      .then (resp3 => setLocationObjt(resp3.data?.results[0]) )
      .catch (error => console.error(error))
    axios
        .get(`https://rickandmortyapi.com/api/location?name=${searchLoc}`)
        .then(resp4 => setResidentsArray(resp4.data?.results[0]?.residents) )
        .catch ( error => console.error( error ) )
  }
  console.log(residentsArray)
  return (
    <div className="App">
       
        <div className='Search'> <input className='search-input' type="text" placeholder='Escribe el nombre de una locación' value={searchLoc} onChange={(e) => setSearchLoc(e.target.value)} />
        <button className='search-button' onClick={search}>Buscar</button>
        </div>
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
