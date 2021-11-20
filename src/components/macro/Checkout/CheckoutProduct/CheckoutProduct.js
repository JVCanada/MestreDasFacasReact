import React from 'react'
import { Link } from 'react-router-dom'


import './CheckoutProduct.css'


function CheckoutProduct(props) {

    return (
        <>
            <Link to={`/product/${props.item.product.id}`} className="checkout-link">
                <div className="list-group-item mb-3">
                    <div className="d-flex flex-column">
                        <div className="d-flex justify-content-between">
                            <div>
                                <img width="100" src={props.item.product.image} class="img-thumbnail" alt="product-thumbnail" />
                            </div>
                            <h5 className="subtitle mx-2">{props.item.product.productName}</h5>
                        </div>
                        <div className="d-flex justify-content-between mt-2">
                            <p className="text-secondary">Valor unitário: {(props.item.product.productPrice.value).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>
                            <p className="text-secondary">Quantidade: {props.item.quantity}</p>
                        </div>
                        <p className="align-self-end">Valor Total: {props.item.product.productPrice !== undefined ? (props.item.product.productPrice.value * props.item.quantity).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) : ""}</p>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default CheckoutProduct