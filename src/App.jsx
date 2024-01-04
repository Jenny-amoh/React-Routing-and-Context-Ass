import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Services  from './pages/services'
import Header from './components/header'
import Footer from './components/footer'
import Service from './pages/service'
import { createContext, useState } from 'react'


export const ThemeContext = createContext()

function App() {
  const [theme, setTheme] = useState('light')

  return (
    <div className={theme}>
      <ThemeContext.Provider value={[theme, setTheme]}>

      <BrowserRouter>
      <Header></Header>
      <div className='routes'>
        <Routes >
          <Route path='/' Component={Home} />
          <Route path='/services' Component={Services} />
          <Route path='/services/:id' Component={Service} />

        </Routes>
        </div>
        <Footer></Footer>
      </BrowserRouter>

      </ThemeContext.Provider>

    </div>
  )
}

export default App
