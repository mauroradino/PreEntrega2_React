import React from 'react'
import { Link, useParams } from 'react-router-dom'
import '../InearsPage/InearsPage.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Productos from '../../productos.json'

const HeadphonesPage = () => {
    let { id } = useParams();
    console.log(id)
    const filteredData = Productos.filter(producto => producto.categoria === "headphone");
    return (
        <div style={{backgroundColor: '#e0e0e0'}}>
        <h1>Headphones</h1>
        <div className='grid_productos'>
          {filteredData.map((producto, i) => (
            <div className={`card cardProductos card${i+1}`}>
              <img src={producto.imagenURL} className="card-img-top"  alt="Imagen Producto" />
              <div className="card-body">
                <h5 className="card-title">{producto.nombre}</h5>
                <p className="card-text">Cost: ${producto.precio}</p>
                <Link className='Link' to={`/Item/${producto.id}`}>More Details</Link>
              </div>
            </div>
          ))}
          </div>
          </div>
      );
}

export default HeadphonesPage;
