import React from 'react'

function Footer() {
  return (
    <footer className="pt-2 pb-0   my-4">
      <ul className="nav justify-content-center border-bottom pb-3 mb-3">
        <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Home</a></li>
        <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Features</a></li>
        <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Pricing</a></li>
        <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">FAQs</a></li>
        <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">About</a></li>
      </ul>
      <p className="text-center text-muted mb-0">© 2023 Earthie Inc</p>
    </footer>

  )
}

export default Footer