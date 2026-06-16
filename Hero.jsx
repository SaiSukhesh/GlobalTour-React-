import React from 'react'

export default function Hero({ navigateTo }) {
  return (
    <div className="hero" id="home">
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1>Explore the World</h1>
        <p>Your journey begins here — discover amazing destinations</p>
        <div className="hero-btns">
          <button style={{ cursor: 'pointer' }} onClick={() => navigateTo('/explore')}>Explore Tours</button>
          <button className="outline-btn" style={{ cursor: 'pointer' }} onClick={() => navigateTo('/about')}>Learn More</button>
        </div>
      </div>
    </div>
  )
}