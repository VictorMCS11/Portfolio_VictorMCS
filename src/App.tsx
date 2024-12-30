import { Routes, Route } from 'react-router-dom'
import { DarkModeProvider } from './Contexts/DarkModeContext'
import HomePage from './Pages/HomePage'
import ContactPage from './Pages/ContactPage'
import CVPage from './Pages/CVPage'
import ProjectsPage from './Pages/ProjectsPage'
import Layout from './Components/Layout'
import './App.css'

function App() {

  return (
    <DarkModeProvider>
      <div className='min-h-screen mx-auto bg-gradient-to-t from-white to-tertiary dark:from-black dark:to-primary'>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />}></Route>
            <Route path='/contacto' element={<ContactPage />}></Route>
            <Route path='/cv' element={<CVPage />}></Route>
            <Route path='/proyectos' element={<ProjectsPage />}></Route>
          </Route>
        </Routes>
      </div>
    </DarkModeProvider>
  )
}

export default App
