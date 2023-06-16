import React from 'react'
import ItemListComponent from '../components/ItemListComponent'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function HomePage() {
  return (
    <div style={{backgroundColor:"#e0e0e0"}}>
      <div className='body'>
        <h1>HOMEPAGE</h1>
        <ItemListComponent  greeting = "BIENVENIDOS"/>
      </div>
      </div>
  )
}

export default HomePage
