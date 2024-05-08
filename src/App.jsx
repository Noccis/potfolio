import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'

import { Route, Routes, NavLink } from "react-router-dom";

function App() {
  return (
    <>
      <header>
        <div id='title-container'>
          <p id='page-name' className='roboto-light'>Toni Wincent</p>
          <p id='page-subtitle' className='roboto-light-italic'>Kreativ utvecklare</p>
        </div>
      </header>
      <div id='navigation-bar'>
        <NavLink to="/">
          {() => (
            <p>Hem</p>
          )}
        </NavLink>
        <NavLink to="/about">
          {() => (
            <p>Om mig</p>
          )}
        </NavLink>
        <NavLink to="/projects">
          {() => (
            <p>Projekt</p>
          )}
        </NavLink>
      </div>
      <main>
        <Routes>
          <Route path='/' element={
            <Home />
          } />
          <Route path='/about' element={
            <About />
          } />
          <Route path='/projects' element={
            <Projects />
          } />
        </Routes>
      </main>
    </>
  )
}

export default App
