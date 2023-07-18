import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../../context/productContext";
import "./Cart.css";

const Cart = () => {
    const { carrito, setCarrito } = useContext(ProductContext);
    const [mail1, setMail1] = useState('');
    const [mail2, setMail2] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [inputValue2, setInputValue2] = useState('');

    const handleMail1Change = (event) => {
      setMail1(event.target.value);
    };
  
    const handleMail2Change = (event) => {
      setMail2(event.target.value);
    };
  
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
      };

      const handleInputChange2 = (event) => {
        setInputValue2(event.target.value);
      };

    const igualdad = mail1 != "" && mail2 != "" && mail1 === mail2 && inputValue !== "" && inputValue2 !== "";
    let total = 0;

    const handleDelete = (producto) => {
        const updatedCarrito = carrito.filter((p) => p.id !== producto.id);
        setCarrito(updatedCarrito);
    };

    useEffect(() => {
        carrito.forEach((producto, i) => {
            const deleteBtn = document.getElementById(`deleteBtn-${i}`);
            deleteBtn.addEventListener("click", () => {
                handleDelete(producto);
            });
        });
    }, [carrito]);

    return (
        <div style={{ backgroundColor: "#e0e0e0" }}>
            <div className="bodyCart">
                <div className="preTicket">
                    <h2 className="tituloTicket">PRE TICKET</h2>
                    <div className="datos">
                        <div className="nombre">
                            <p>First Name: </p>
                            <input type="text" value={inputValue} onChange={handleInputChange} name="Nombre" />
                        </div>
                        <div className="apellido">
                            <p>Last Name: </p>
                            <input type="text" value={inputValue2} onChange={handleInputChange2} name="apellido" />
                        </div>
                        <div className="mail">
                            <p>Email Address: </p>
                            <input id="mail1" type="mail" value={mail1} name="mail" onChange={handleMail1Change} />
                        </div>
                        <div className="mail">
                            <p>Confirm Email Address: </p>
                            <input id="mail2" type="mail" value={mail2} name="mail" onChange={handleMail2Change} />
                        </div>
                        {igualdad ? (
                         <button className="btnFinalizar" onClick={() => {}}>
                           Finalize Purchase
                         </button>
                       ) : null}
                    </div>
                    {carrito.map((producto, i) => {
                        total += producto.precio;
                        return (
                            <div className="ticketContent" key={i}>
                                <h4>Producto: {producto.nombre}</h4>
                                <p>Precio por unidad: ${producto.precio}</p>
                            </div>
                        );
                    })}
                    <h4 className="ticketContent">Total a pagar: ${total}</h4>
                </div>
                <div className="productosCart">
                    {carrito.map((producto, i) => (
                        <div
                            className={`card cardCarrito card${producto.id}`}
                            key={producto.id}
                        >
                            <img
                                src={producto.imagenURL}
                                className="card-img-top"
                                alt="Imagen Producto"
                            />
                            <div className="card-body">
                                <h5 className="card-title">{producto.nombre}</h5>
                                <p className="card-text">Cost: ${producto.precio}</p>
                                <button className="buttonDelete" id={`deleteBtn-${i}`}>
                                    Delete from the cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Cart;

/*  let btnEliminar = document.querySelector(`.btn_eliminar_${i}`);
  btnEliminar.addEventListener("click", () => {
    carrito = carrito.filter((item) => item.id !== producto.id); // Eliminar el producto del carrito
    localStorage.setItem("carrito In Ear:", JSON.stringify(carrito)); // Actualizar el almacenamiento local
    nuevo.remove(); // Remover el elemento visualmente
    nuevaCuenta.remove(); // Remover el elemento del ticket
  }); */
