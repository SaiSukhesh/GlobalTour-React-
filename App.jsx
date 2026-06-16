import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Places from './components/Places'
import TourDetail from './components/TourDetail'
import { AboutView, ContactView } from './components/Sections'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Footer from './components/Footer'

export default function App() {
  // Navigation State variables mimicking a browser router
  const [currentPath, setCurrentPath] = useState('/') 
  const [selectedTourId, setSelectedTourId] = useState(null)
  const [nestedDashboardPath, setNestedDashboardPath] = useState('profile')
  const [nestedDetailPath, setNestedDetailPath] = useState('related')
  
  const [modalData, setModalData] = useState(null)
  const [user, setUser] = useState(null) // Auth controller state

  // Navigation router simulation engine
  const navigateTo = (path, tourId = null) => {
    setCurrentPath(path)
    if (tourId !== null) setSelectedTourId(tourId)
    window.scrollTo(0, 0)
  }

  // Route protection guard clause wrapper
  const renderProtectedRoute = (component) => {
    if (!user) {
      return <Login onLogin={(loggedInUser) => { setUser(loggedInUser); setCurrentPath('/dashboard'); }} />
    }
    return component
  }

  return (
    <div>
      <Navbar user={user} setUser={setUser} navigateTo={navigateTo} currentPath={currentPath} />
      
      {/* Dynamic Path Router Switch Switchboard */}
      <main style={{ minHeight: '80vh' }}>
        {currentPath === '/' && <Hero navigateTo={navigateTo} />}
        
        {currentPath === '/about' && <AboutView />}
        
        {currentPath === '/explore' && <Places onBook={setModalData} navigateTo={navigateTo} />}
        
        {currentPath === '/explore/detail' && (
          <TourDetail 
            tourId={selectedTourId} 
            onBook={setModalData} 
            navigateTo={navigateTo}
            nestedPath={nestedDetailPath}
            setNestedPath={setNestedDetailPath}
          />
        )}
        
        {currentPath === '/contact' && (
          <ContactView modalData={modalData} setModalData={setModalData} />
        )}
        
        {currentPath === '/login' && (
          <Login onLogin={(loggedInUser) => { setUser(loggedInUser); navigateTo('/dashboard'); }} />
        )}

        {currentPath === '/dashboard' && renderProtectedRoute(
          <Dashboard 
            user={user} 
            nestedPath={nestedDashboardPath} 
            setNestedPath={setNestedDashboardPath} 
          />
        )}
      </main>

      <Footer navigateTo={navigateTo} />
    </div>
  )
}