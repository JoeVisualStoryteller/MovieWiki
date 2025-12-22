import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import ScenesShowcase from './components/ScenesShowcase'
import VideoGallery from './components/VideoGallery'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Hero />
      <ScenesShowcase />
      <VideoGallery />
      <Footer />
    </div>
  )
}

export default App
