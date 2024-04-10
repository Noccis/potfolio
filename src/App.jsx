import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <h1>Toni Wincent</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          This will be an epic portfolio!
        </p>
      </div>
      <p className="read-the-docs">
        Yes it will.
      </p>
    </>
  )
}

export default App
