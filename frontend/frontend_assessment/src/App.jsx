import { useState } from 'react'
import './App.css'
import freeRoomsLogo from '../../assets/freeRoomsLogo.png'

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
        
      </div>
      <div className='Buildings'>
        <div className='Building'>
          HELLO
        </div>
        <div className='Building'>
          WHATSUP
        </div>
        <div className='Building'>

        </div>
        <div className='Building'>

        </div>
        <div className='Building'>

        </div>
        <div className='Building'>

        </div>
        <div className='Building'>

        </div>
        <div className='Building'>

        </div>
        <div className='Building'>

        </div>
        <div className='Building'>

        </div>
      </div>
    </>
  )
}

export default App
