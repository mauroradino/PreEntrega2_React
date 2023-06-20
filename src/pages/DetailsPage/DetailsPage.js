import React from 'react'
import { Link, useParams} from 'react-router-dom'
import './DetailsPage.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Productos from '../../productos.json'
import './DetailsPage.css'

const DetailsPage = () => {
    let { id } = useParams();
    console.log(id)
    return (
        <div style={{backgroundColor: '#e0e0e0'}}>
        <h1>{Productos[id-1].nombre}</h1>
        <div className='detailCard' >
            <div className={`cardDetail`}>
            <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Productos[id-1].imagenURL} className="d-block imagenCarrousel" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={Productos[id-1].imagenURL2} className="d-block imagenCarrousel" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={Productos[id-1].imagenURL3} className="d-block imagenCarrousel" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
              <div className="card-body">
                <h5 className="card-title">{Productos[id-1].name}</h5>
                <p className="card-text">{Productos[id-1].descripcion}</p>
                <Link className='Link' to={`/Item/${id-1}}`}>Add to Cart</Link>
              </div>
            </div>
          </div>
          </div> 

        
    );
      
}

export default DetailsPage
