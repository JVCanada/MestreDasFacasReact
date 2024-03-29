import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import facebook from '../../../assets/imgs/footer/facebook.png'
import instagram from '../../../assets/imgs/footer/instagram.png'
import youtube from '../../../assets/imgs/footer/youtube.png'
import twitter from '../../../assets/imgs/footer/twitter.png'
import icon from '../../../assets/imgs/footer/visacon.ico'
import pix from '../../../assets/imgs/footer/pix.png'
import boleto from '../../../assets/imgs/footer/icone-boleto.png'

import CategoryAllProducts from '../../macro/CategoryAllProducts/CategoryAllProducts'



function Footer(props) {

    return (
        <>

            <footer>
                {/* Inicio footer desktop */}
                <div className="container-fluid">
                    <div className="container d-flex ajuste">
                        <div className="col-3 footer ">
                            <CategoryAllProducts allFooter />
                            <p><Link to="/contact" className="footer linkFooter">Atendimento</Link></p>
                            <p><Link to="/about" className="footer linkFooter"> Quem Somos </Link></p>
                            <p><Link to="/contact" className="footer linkFooter"> Trabalhe Conosco </Link></p>

                        </div>
                        <div className="col-3 footer">
                            <p>Redes Sociais</p>
                            <a href="https://www.facebook.com/Mestre-das-Facas-109510481482419/" target="_blank"><img className="icones" src={facebook} /></a>
                            <a href="https://www.instagram.com/eimestredasfacas/" target="_blank"><img className="icones icone-espaco" src={instagram} /></a><p></p>
                            <a href="https://youtube.com/channel/UCcDiqj726UwCd9MYwmpVOmA/" target="_blank"><img className="icones" src={youtube} /></a>
                            <a href="https://twitter.com/FacasMestre?s=08/" target="_blank"><img className="icones icone-espaco" src={twitter} /></a>

                        </div>
                        <div className="col-3 footer">
                            <p>Formas Pagamento</p>
                            <svg width="40" height="40" viewBox="0 0 58 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_103_4)">
                                    <path d="M10.5452 49.7515V46.4422C10.5452 45.1733 9.84878 44.3462 8.65509 44.3462C8.05836 44.3462 7.41178 44.5668 6.96412 45.2839C6.61614 44.6771 6.11886 44.3462 5.37283 44.3462C4.87532 44.3462 4.37827 44.5115 3.98022 45.1183V44.4565H2.93582V49.7515H3.98022V46.8281C3.98022 45.8907 4.42788 45.4492 5.1243 45.4492C5.82026 45.4492 6.1687 45.9457 6.1687 46.8281V49.7515H7.2131V46.8281C7.2131 45.8907 7.71015 45.4492 8.35672 45.4492C9.05314 45.4492 9.40112 45.9457 9.40112 46.8281V49.7515H10.5452V49.7515ZM26.012 44.4565H24.3213V42.857H23.2769V44.4565H22.3319V45.5043H23.2767V47.9314C23.2767 49.145 23.7243 49.8618 24.918 49.8618C25.3657 49.8618 25.8627 49.6965 26.2112 49.4759L25.9126 48.4829C25.6142 48.7035 25.2662 48.7588 25.0175 48.7588C24.5202 48.7588 24.3213 48.4279 24.3213 47.8761V45.5043H26.012V44.4565V44.4565ZM34.8647 44.346C34.268 44.346 33.8702 44.6771 33.6214 45.1183V44.4565H32.577V49.7515H33.6214V46.7731C33.6214 45.8907 33.9694 45.3942 34.616 45.3942C34.8149 45.3942 35.0636 45.4495 35.2625 45.5045L35.5609 44.4015C35.362 44.3462 35.0636 44.3462 34.8647 44.3462V44.346ZM21.4865 44.8977C20.989 44.5115 20.2928 44.3462 19.5467 44.3462C18.3533 44.3462 17.5576 45.008 17.5576 46.056C17.5576 46.9387 18.1544 47.4349 19.1988 47.6005L19.696 47.6558C20.2431 47.7658 20.5415 47.9314 20.5415 48.2073C20.5415 48.5932 20.1437 48.8691 19.4473 48.8691C18.7511 48.8691 18.204 48.5932 17.8558 48.3176L17.3585 49.2C17.9056 49.6412 18.6516 49.8618 19.3974 49.8618C20.79 49.8618 21.5859 49.145 21.5859 48.152C21.5859 47.2143 20.9393 46.7178 19.9446 46.5525L19.4473 46.4972C18.9996 46.4419 18.6516 46.3319 18.6516 46.001C18.6516 45.6148 18.9996 45.3942 19.5467 45.3942C20.1437 45.3942 20.7404 45.6698 21.0388 45.8354L21.4865 44.8977V44.8977ZM49.2378 44.3462C48.6408 44.3462 48.243 44.6771 47.9942 45.1183V44.4565H46.9498V49.7515H47.9942V46.7731C47.9942 45.8907 48.3424 45.3942 48.9888 45.3942C49.1879 45.3942 49.4367 45.4495 49.6356 45.5045L49.934 44.4015C49.735 44.3462 49.4367 44.3462 49.2378 44.3462V44.3462ZM35.9091 47.104C35.9091 48.7035 36.9037 49.8618 38.4456 49.8618C39.1418 49.8618 39.6391 49.6965 40.1363 49.2553L39.6391 48.3176C39.2412 48.6485 38.8434 48.8138 38.3957 48.8138C37.5503 48.8138 36.9535 48.152 36.9535 47.104C36.9535 46.1113 37.5503 45.4492 38.3957 45.3942C38.8434 45.3942 39.2412 45.5595 39.6391 45.8907L40.1363 44.953C39.6391 44.5115 39.1418 44.3462 38.4456 44.3462C36.9037 44.3462 35.9091 45.5045 35.9091 47.104ZM45.5575 47.104V44.4565H44.5131V45.1183C44.1649 44.6221 43.6676 44.3462 43.021 44.3462C41.6782 44.3462 40.6338 45.5045 40.6338 47.104C40.6338 48.7035 41.6782 49.8618 43.021 49.8618C43.7172 49.8618 44.2147 49.5862 44.5131 49.0897V49.7515H45.5575V47.104V47.104ZM41.7278 47.104C41.7278 46.1663 42.275 45.3942 43.1701 45.3942C44.0156 45.3942 44.6125 46.1113 44.6125 47.104C44.6125 48.0417 44.0156 48.8138 43.1701 48.8138C42.275 48.7585 41.7278 48.0417 41.7278 47.104V47.104ZM29.2449 44.3462C27.8523 44.3462 26.8575 45.4492 26.8575 47.104C26.8575 48.7588 27.8521 49.8618 29.2945 49.8618C29.9907 49.8618 30.6871 49.6412 31.2343 49.145L30.7367 48.3176C30.3389 48.6485 29.8416 48.8691 29.3444 48.8691C28.6978 48.8691 28.0512 48.5382 27.9019 47.6002H31.4332V47.1593C31.483 45.4492 30.5877 44.3462 29.2447 44.3462H29.2449ZM29.2449 45.3389C29.8913 45.3389 30.3392 45.7804 30.4384 46.6078H27.9518C28.0512 45.8907 28.4989 45.3389 29.2449 45.3389ZM55.156 47.104V42.3605H54.1116V45.1183C53.7633 44.6221 53.2661 44.3462 52.6195 44.3462C51.2767 44.3462 50.2323 45.5045 50.2323 47.104C50.2323 48.7035 51.2767 49.8618 52.6195 49.8618C53.3159 49.8618 53.8132 49.5862 54.1116 49.0897V49.7515H55.156V47.104V47.104ZM51.3266 47.104C51.3266 46.1663 51.8735 45.3942 52.7688 45.3942C53.6143 45.3942 54.211 46.1113 54.211 47.104C54.211 48.0417 53.6143 48.8138 52.7688 48.8138C51.8735 48.7585 51.3266 48.0417 51.3266 47.104V47.104ZM16.4135 47.104V44.4565H15.3691V45.1183C15.0209 44.6221 14.5237 44.3462 13.8771 44.3462C12.5343 44.3462 11.4899 45.5045 11.4899 47.104C11.4899 48.7035 12.5343 49.8618 13.8771 49.8618C14.5735 49.8618 15.0708 49.5862 15.3691 49.0897V49.7515H16.4135V47.104V47.104ZM12.5343 47.104C12.5343 46.1663 13.0814 45.3942 13.9765 45.3942C14.822 45.3942 15.419 46.1113 15.419 47.104C15.419 48.0417 14.822 48.8138 13.9765 48.8138C13.0814 48.7585 12.5343 48.0417 12.5343 47.104V47.104Z" fill="black" />
                                    <path d="M21.1382 4.24698H36.8042V35.4658H21.1382V4.24698Z" fill="#FF5F00" />
                                    <path d="M22.1338 19.8565C22.1338 13.5136 24.8194 7.88744 28.9471 4.24698C25.9136 1.5995 22.0842 0 17.9066 0C8.00933 0 0.00234985 8.88015 0.00234985 19.8565C0.00234985 30.8327 8.00933 39.7131 17.9064 39.7131C22.084 39.7131 25.9134 38.1136 28.9471 35.4658C24.8194 31.8807 22.1338 26.1995 22.1338 19.8565V19.8565Z" fill="#EB001B" />
                                    <path d="M57.9409 19.8565C57.9409 30.8327 49.934 39.7131 40.0369 39.7131C35.8593 39.7131 32.0299 38.1136 28.9962 35.4658C33.1737 31.8256 35.8097 26.1995 35.8097 19.8565C35.8097 13.5136 33.1239 7.88744 28.9962 4.24698C32.0297 1.5995 35.8593 0 40.0369 0C49.934 0 57.9412 8.93543 57.9412 19.8565H57.9409Z" fill="#F79E1B" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_103_4">
                                        <rect width="58" height="50" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <img className="iconPagamento visa" src={icon} /><p></p>
                            <img className=" visa" src={boleto} />
                            <img className="iconPagamento visa" src={pix} />

                        </div>
                        <div className="col-3 footer">
                            <p>Contato</p>
                            <a class="telefonesFooter"
                                href="tel:(11) 00000-0000">(11)
                                4003-5555</a> / <a class="telefonesFooter" href="tel:11111-111111">4003-5566</a><p></p>
                            <a class="footer linkFooter" href="emailto:contato@mestredasfacas.com.br">contato@mestredasfacas.com.br</a>
                        </div>
                    </div>
                </div>

                <div class="container-fluid col-12 d-flex footer">
                    <div class="container col-12 d-flex ">
                        <div class="final">©Copyright 2021 - Mestre das Facas - Todos os direitos reservados Mestre
                            das Facas com Agência de Cutelaria Online S.A.
                            <p>Endereço: Avenida Paulista 1560, 3º Andar CEP 0000-000, Bela Vista, São Paulo/SP</p></div>


                        <div class="container col-3 logo final"></div>
                    </div>

                </div>
                {/* <!-- INICIO  FOOTER MOBILE --> */}
                <div class="container-fluid col-12 d-flex footerMobile">
                    <div class="container col-12 footerMobile">Redes Sociais</div>

                </div>
                {/* Redes sociais  */}
                <div class="container-fluid col-12 footerMobile">
                    <div class="container col-12">
                        <a href="https://www.facebook.com/Mestre-das-Facas-109510481482419/" target="_blank"><img className="icones espaco-icone-mobile" src={facebook} /></a>
                        <a href="https://www.instagram.com/eimestredasfacas?r=nametag/" target="_blank"><img className="icones espaco-icone-mobile" src={instagram} /></a>
                        <a href="https://youtube.com/channel/UCcDiqj726UwCd9MYwmpVOmA/" target="_blank"><img className="icones espaco-icone-mobile" src={youtube} /></a>
                        <a href="https://twitter.com/FacasMestre?s=08/" target="_blank"><img className="icones espaco-icone-mobile" src={twitter} /></a>

                    </div>
                </div>
                <div class="container-fluid col-12 d-flex footerMobile ">
                    <div class="container col-12 footerMobile">Formas Pagamentos</div>

                </div>
                {/* Icones de forma de pagamento */}
                <div class="container-fluid col-12 footerMobile">
                    <div class="container col-12 footerMobile">
                        <svg width="40" height="40" viewBox="0 0 58 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_103_4)">
                                <path d="M10.5452 49.7515V46.4422C10.5452 45.1733 9.84878 44.3462 8.65509 44.3462C8.05836 44.3462 7.41178 44.5668 6.96412 45.2839C6.61614 44.6771 6.11886 44.3462 5.37283 44.3462C4.87532 44.3462 4.37827 44.5115 3.98022 45.1183V44.4565H2.93582V49.7515H3.98022V46.8281C3.98022 45.8907 4.42788 45.4492 5.1243 45.4492C5.82026 45.4492 6.1687 45.9457 6.1687 46.8281V49.7515H7.2131V46.8281C7.2131 45.8907 7.71015 45.4492 8.35672 45.4492C9.05314 45.4492 9.40112 45.9457 9.40112 46.8281V49.7515H10.5452V49.7515ZM26.012 44.4565H24.3213V42.857H23.2769V44.4565H22.3319V45.5043H23.2767V47.9314C23.2767 49.145 23.7243 49.8618 24.918 49.8618C25.3657 49.8618 25.8627 49.6965 26.2112 49.4759L25.9126 48.4829C25.6142 48.7035 25.2662 48.7588 25.0175 48.7588C24.5202 48.7588 24.3213 48.4279 24.3213 47.8761V45.5043H26.012V44.4565V44.4565ZM34.8647 44.346C34.268 44.346 33.8702 44.6771 33.6214 45.1183V44.4565H32.577V49.7515H33.6214V46.7731C33.6214 45.8907 33.9694 45.3942 34.616 45.3942C34.8149 45.3942 35.0636 45.4495 35.2625 45.5045L35.5609 44.4015C35.362 44.3462 35.0636 44.3462 34.8647 44.3462V44.346ZM21.4865 44.8977C20.989 44.5115 20.2928 44.3462 19.5467 44.3462C18.3533 44.3462 17.5576 45.008 17.5576 46.056C17.5576 46.9387 18.1544 47.4349 19.1988 47.6005L19.696 47.6558C20.2431 47.7658 20.5415 47.9314 20.5415 48.2073C20.5415 48.5932 20.1437 48.8691 19.4473 48.8691C18.7511 48.8691 18.204 48.5932 17.8558 48.3176L17.3585 49.2C17.9056 49.6412 18.6516 49.8618 19.3974 49.8618C20.79 49.8618 21.5859 49.145 21.5859 48.152C21.5859 47.2143 20.9393 46.7178 19.9446 46.5525L19.4473 46.4972C18.9996 46.4419 18.6516 46.3319 18.6516 46.001C18.6516 45.6148 18.9996 45.3942 19.5467 45.3942C20.1437 45.3942 20.7404 45.6698 21.0388 45.8354L21.4865 44.8977V44.8977ZM49.2378 44.3462C48.6408 44.3462 48.243 44.6771 47.9942 45.1183V44.4565H46.9498V49.7515H47.9942V46.7731C47.9942 45.8907 48.3424 45.3942 48.9888 45.3942C49.1879 45.3942 49.4367 45.4495 49.6356 45.5045L49.934 44.4015C49.735 44.3462 49.4367 44.3462 49.2378 44.3462V44.3462ZM35.9091 47.104C35.9091 48.7035 36.9037 49.8618 38.4456 49.8618C39.1418 49.8618 39.6391 49.6965 40.1363 49.2553L39.6391 48.3176C39.2412 48.6485 38.8434 48.8138 38.3957 48.8138C37.5503 48.8138 36.9535 48.152 36.9535 47.104C36.9535 46.1113 37.5503 45.4492 38.3957 45.3942C38.8434 45.3942 39.2412 45.5595 39.6391 45.8907L40.1363 44.953C39.6391 44.5115 39.1418 44.3462 38.4456 44.3462C36.9037 44.3462 35.9091 45.5045 35.9091 47.104ZM45.5575 47.104V44.4565H44.5131V45.1183C44.1649 44.6221 43.6676 44.3462 43.021 44.3462C41.6782 44.3462 40.6338 45.5045 40.6338 47.104C40.6338 48.7035 41.6782 49.8618 43.021 49.8618C43.7172 49.8618 44.2147 49.5862 44.5131 49.0897V49.7515H45.5575V47.104V47.104ZM41.7278 47.104C41.7278 46.1663 42.275 45.3942 43.1701 45.3942C44.0156 45.3942 44.6125 46.1113 44.6125 47.104C44.6125 48.0417 44.0156 48.8138 43.1701 48.8138C42.275 48.7585 41.7278 48.0417 41.7278 47.104V47.104ZM29.2449 44.3462C27.8523 44.3462 26.8575 45.4492 26.8575 47.104C26.8575 48.7588 27.8521 49.8618 29.2945 49.8618C29.9907 49.8618 30.6871 49.6412 31.2343 49.145L30.7367 48.3176C30.3389 48.6485 29.8416 48.8691 29.3444 48.8691C28.6978 48.8691 28.0512 48.5382 27.9019 47.6002H31.4332V47.1593C31.483 45.4492 30.5877 44.3462 29.2447 44.3462H29.2449ZM29.2449 45.3389C29.8913 45.3389 30.3392 45.7804 30.4384 46.6078H27.9518C28.0512 45.8907 28.4989 45.3389 29.2449 45.3389ZM55.156 47.104V42.3605H54.1116V45.1183C53.7633 44.6221 53.2661 44.3462 52.6195 44.3462C51.2767 44.3462 50.2323 45.5045 50.2323 47.104C50.2323 48.7035 51.2767 49.8618 52.6195 49.8618C53.3159 49.8618 53.8132 49.5862 54.1116 49.0897V49.7515H55.156V47.104V47.104ZM51.3266 47.104C51.3266 46.1663 51.8735 45.3942 52.7688 45.3942C53.6143 45.3942 54.211 46.1113 54.211 47.104C54.211 48.0417 53.6143 48.8138 52.7688 48.8138C51.8735 48.7585 51.3266 48.0417 51.3266 47.104V47.104ZM16.4135 47.104V44.4565H15.3691V45.1183C15.0209 44.6221 14.5237 44.3462 13.8771 44.3462C12.5343 44.3462 11.4899 45.5045 11.4899 47.104C11.4899 48.7035 12.5343 49.8618 13.8771 49.8618C14.5735 49.8618 15.0708 49.5862 15.3691 49.0897V49.7515H16.4135V47.104V47.104ZM12.5343 47.104C12.5343 46.1663 13.0814 45.3942 13.9765 45.3942C14.822 45.3942 15.419 46.1113 15.419 47.104C15.419 48.0417 14.822 48.8138 13.9765 48.8138C13.0814 48.7585 12.5343 48.0417 12.5343 47.104V47.104Z" fill="black" />
                                <path d="M21.1382 4.24698H36.8042V35.4658H21.1382V4.24698Z" fill="#FF5F00" />
                                <path d="M22.1338 19.8565C22.1338 13.5136 24.8194 7.88744 28.9471 4.24698C25.9136 1.5995 22.0842 0 17.9066 0C8.00933 0 0.00234985 8.88015 0.00234985 19.8565C0.00234985 30.8327 8.00933 39.7131 17.9064 39.7131C22.084 39.7131 25.9134 38.1136 28.9471 35.4658C24.8194 31.8807 22.1338 26.1995 22.1338 19.8565V19.8565Z" fill="#EB001B" />
                                <path d="M57.9409 19.8565C57.9409 30.8327 49.934 39.7131 40.0369 39.7131C35.8593 39.7131 32.0299 38.1136 28.9962 35.4658C33.1737 31.8256 35.8097 26.1995 35.8097 19.8565C35.8097 13.5136 33.1239 7.88744 28.9962 4.24698C32.0297 1.5995 35.8593 0 40.0369 0C49.934 0 57.9412 8.93543 57.9412 19.8565H57.9409Z" fill="#F79E1B" />
                            </g>
                            <defs>
                                <clipPath id="clip0_103_4">
                                    <rect width="58" height="50" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <img className="visa" src={icon} />
                        <img className=" visa" src={boleto} />
                        <img className=" visa" src={pix} />

                    </div>
                </div>
                <div class="container-fluid col-12 d-flex footerMobile">
                    <div class="container col-12 footerMobile finalMobile">©Copyright 2021 - Mestre das Facas - Todos os direitos reservados
                        Mestre
                        das Facas com Agência de Cutelaria Online S.A.</div>

                </div>
            </footer>

        </>
    )
}

export default Footer