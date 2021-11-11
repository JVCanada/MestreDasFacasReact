import React from 'react'
import './TotalValue.css'

function TotalValue(props) {

    return(
        <>
            <div className="col-12 col-md-6 col-lg-12 produto-preco">
                <h5 className="info-produtos"> {props.numero} {props.info} </h5>
                <h5 className="valor-produtos"> R$ {props.valor}  </h5>
            </div>
        </>
    )
}

export default TotalValue