import { useState } from 'react'
import './App.css'
import freeRoomsLogo from '../../assets/freeRoomsLogo.png'
import agsm from '../../assets/agsm.webp'
import ainsworth from '../../assets/ainsworth.webp'
import anitab from '../../assets/anitab.webp'
import biologicalScience from '../../assets/biologicalScience.webp'
import biologicalScienceWest from '../../assets/biologicalScienceWest.webp'
import blockhouse from '../../assets/blockhouse.webp'
import businessSchool from '../../assets/businessSchool.webp'
import civilBuilding from '../../assets/civilBuilding.webp'
import colombo from '../../assets/colombo.webp'
import cseBuilding from '../../assets/cseBuilding.webp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='NavBar'>
        <div className='FreeRoomsLogo'>
          <img src={freeRoomsLogo}/>
        </div>
        <div className='FreeRoomsText'>
          Freerooms
        </div>
        <div className='Icons'>
          <div className='Icon'>

          </div>
          <div className='Icon'>

          </div>
          <div className='Icon'>

          </div>
          <div className='Icon'>

          </div>
        </div>
        
      </div>
      <div className='SearchComponent'>
        <div className='Filters'>
          Filters
        </div>
        <div className='SearchBar'>
          <div className='SearchBarContents'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
            </svg>
            Searching for a building...
          </div>
        </div>
        <div className='Sort'>
          Sort
        </div>
      </div>
      <div className='Buildings'>
        {data.map((building) => (
          <div className='Building' key={building.name}>
            <img src={building.building_picture} alt={building.name} />
            {/* <p>{building.name}</p>
            <p>{building.rooms_available} rooms available</p> */}
            <div className='Availability'>
              <p>{building.rooms_available} rooms available</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

const data = [
    {
      "name": "AGSM", 
      "rooms_available": 9,
      "building_picture": agsm
    },
    {
      "name": "Ainsworth Building",
      "rooms_available": 16,
      "building_picture": ainsworth
    },
    {
      "name": "Anita B Lawrence Centre",
      "rooms_available": 44,
      "building_picture": anitab
    },
    {
      "name": "Biological Sciences",
      "rooms_available": 6,
      "building_picture": biologicalScience
    },
    {
      "name": "Biological Science (West)",
      "rooms_available": 8,
      "building_picture": biologicalScienceWest
    },
    {
      "name": "Blockhouse",
      "rooms_available": 42,
      "building_picture": blockhouse
    },
    {
      "name": "Business School",
      "rooms_available": 18,
      "building_picture": businessSchool
    },
    {
      "name": "Civil Engineering Building",
      "rooms_available": 8,
      "building_picture": civilBuilding
    },
    {
      "name": "Colombo Building",
      "rooms_available": 5,
      "building_picture": colombo
    },
    {
      "name": "Computer Science & Eng (K17)",
      "rooms_available": 7,
      "building_picture": cseBuilding
    }
  ]

export default App
