import React, { useEffect, useState } from "react";
import axios from 'axios'
import './CategorySearch.css'
import '../../components/micro/Button/Button.css'
import Card from '../../components/macro/CardHome/Card'
import '../../components/macro/CardHome/Card.css'




function Category(props) {

    const [produtosPesquisa, setProdutosPesquisa] = useState([])
    const urlParams = new URLSearchParams(window.location.search)
    const texto = urlParams.get("search")
    useEffect(() => {
        axios.get(`http://localhost:8080/product/search/${texto}`)
            .then((response) => {
                setProdutosPesquisa([...response.data])
                {
                    if (produtosPesquisa == 0) {
                        return "Não temos"
                    }
                }
            })
            .catch((err) => {
                console.error("Erro ao buscar os produtos" + err)
            })
    }, [])



    return (
        <>
            <main>

                {/* <!-- BEGIN FILTROS --> */}

                <div class="container mt-5 mb-4">
                    <div class="row">
                        <h2 class="texto-pesquisa mb-4"> Você pesquisou por {texto}</h2>
                    </div>
                    <div class="row containerCatalogo">

                        {/* <!-- BEGIN CATALOGO PRODUTOS --> */}

                        <div class="catalogo-produtos">
                            <div class="row linha-produtos-encontrados">
                                <h5 class="produtos-encontrados"> Produtos Encontrados: </h5>
                                <div class="dropdown drop-ordena">
                                    <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                        Ordenar por:
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                        <li><a class="dropdown-item" href="#"> Maior Preço </a></li>
                                        <li><a class="dropdown-item" href="#"> Menor Preço </a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="row catalogo-produtos2 lista">

                                <div className="container lista">
                                    <Card produtos={produtosPesquisa} />


                                </div>

                            </div>

                            {/* /* <!-- ENDING CATALOGO PRODUTOS --> */}



                        </div>

                    </div>
                </div>

            </main>

        </>
    )
}

export default Category