import React from 'react'

export default function Footer({ navigateTo }) {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-col">
          <h3>🌍 GlobalTour</h3>
          <p>Crafting unforgettable journeys since 2010.</p>
        </div>
        <div className="footer-col">
          <h4>Quick Links</h4>
          <a onClick={() => navigateTo('/')}>Home</a>
          <a onClick={() => navigateTo('/explore')}>Explore</a>
          <a onClick={() => navigateTo('/about')}>About</a>
          <a onClick={() => navigateTo('/contact')}>Contact</a>
        </div>
        <div className="footer-col">
          <h4>Top Destinations</h4>
          <a onClick={() => navigateTo('/explore')}>Paris</a>
          <a onClick={() => navigateTo('/explore')}>Maldives</a>
          <a onClick={() => navigateTo('/explore')}>Kyoto</a>
          <a onClick={() => navigateTo('/explore')}>Dubai</a>
        </div>
      </div>
    </footer>
  )
}