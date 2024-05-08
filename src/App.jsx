import './App.css'
import Home from './pages/Home'
import Menu from './components/Menu'

function App() {
  return (
    <>
      <header>
        <div id='title-container'>
          <p id='page-name' className='roboto-light'>Toni Wincent</p>
          <p id='page-subtitle' className='roboto-light-italic'>Kreativ utvecklare</p>
        </div> 
      </header>
      <Menu />
      <main>
        <Home />
      </main>
    </>
  )
}

export default App
