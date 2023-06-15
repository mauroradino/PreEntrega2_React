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
        <li class="nav-item"><a class="nav-link px-2 text-body-secondary">Clients</a></li>
        <li class="nav-item"><a class="nav-link px-2 text-body-secondary">About Us</a></li>
        <li class="nav-item"><a class="nav-link px-2 text-body-secondary">Products</a></li>
        <li class="nav-item"><a class="nav-link px-2 text-body-secondary">FAQs</a></li>
      </ul>
      <p class="text-center text-body-secondary">© 2023 E-HEADPHONES, Inc</p>
    </footer>
  </div>
  )
}

export default Footer
