import React from 'react'
import './Footer.css'
import 'bootstrap/dist/css/bootstrap.min.css'
const Footer = () => {
  return (
    <div class="footer container">
      <hr></hr>
    <footer>
      <ul class="nav justify-content-center border-bottom">
        <li class="nav-item"><a class="nav-link px-2 text-body-secondary">Home</a></li>
        <li class="nav-item"><a class="nav-link px-2 text-body-secondary">Features</a></li>
        <li class="nav-item"><a class="nav-link px-2 text-body-secondary">Pricing</a></li>
        <li class="nav-item"><a class="nav-link px-2 text-body-secondary">FAQs</a></li>
        <li class="nav-item"><a class="nav-link px-2 text-body-secondary">About</a></li>
      </ul>
      <p class="text-center text-body-secondary">© 2023 Company, Inc</p>
    </footer>
  </div>
  )
}

export default Footer
