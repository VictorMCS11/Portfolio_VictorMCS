import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import { DarkModeProvider } from './contexts/DarkModeContext'
import Layout from './components/Layout'
import './App.css'
import Footer from './components/Footer'
import loading from './assets/loading.svg'

function App() {

  const HomePage = lazy(() => import('./pages/HomePage'))
  const ContactPage = lazy(() => import('./pages/ContactPage'))
  // const CVPage = lazy(() => import('./Pages/CVPage'))
  const ProjectsPage = lazy(() => import('./pages/ProjectsPage'))

  return (
    <DarkModeProvider>
      <div className='min-h-screen mx-auto bg-gradient-to-t from-white to-tertiary dark:from-black dark:to-primary px-5'>
        <Suspense fallback={<div className="w-full min-h-[700px] flex justify-center items-center"><img className='' src={loading} alt="" /></div>}>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<HomePage />}></Route>
              <Route path='/contacto' element={<ContactPage />}></Route>
              {/* <Route path='/cv' element={<CVPage />}></Route> */}
              <Route path='/proyectos' element={<ProjectsPage />}></Route>
            </Route>
          </Routes>
        </Suspense>
      </div>
      <Footer />
    </DarkModeProvider>
  )
}

export default App
