import { Col, Container, Row } from "react-bootstrap";
import Arrow from '../assets/images/arrow.png'
import ArrowWhite from '../assets/images/arrow-white.png'
import Hest from '../assets/images/hest.png'
import Usdt from '../assets/images/usdt.png'
import {FinancialChartStockIndexChart} from '../components/Index'

function BuyHes(){
    return <>
            <Container fluid>
                <Row>
                    <Col lg={8}>
                        <div className="custom-chart-margin">
                        <FinancialChartStockIndexChart/>
                        </div>
                    </Col>
                    <Col lg={4}>
                    {/* <div className="trade-section">
                        <p className="text-center head">Trade Tokens in an instant</p>
                        <div className="trade-btn-group">
                            <button className="custom-btn-sm btn-secondary-sm">BUY</button>
                            <button className="custom-btn-sm btn-primary-sm">SELL</button>
                        </div>
                        <div className="">
                            <div className="drop-down-btn">
                                <img src={Hest}/>
                                <span>Hest</span>
                                <img src={Arrow}/>
                            </div>
                            <input className="mt-1 form-control input-green"/>
                            <div className="mt-3 mb-3 text-center">
                                <button className="swap-btn"><img src={ArrowWhite}/></button>
                            </div>
                            <div className="drop-down-btn">
                                <img src={Usdt}/>
                                <span>Usdt</span>
                                <img src={Arrow}/>
                            </div>
                            <input className="mt-1 form-control input-green"/>
                            <div className="price-section">
                                <span className="green">Price</span>
                                <span>0.085 HEST Per USDT</span>
                                <i class="fa-solid fa-arrows-rotate green"></i>
                            </div>
                            <div className="price-section">
                                <span className="green">Commision</span>
                                <span>3%</span>
                            </div>
                            <div className="mt-2 text-center">
                            <button className="custom-btn secondary-btn">Buy</button>
                            </div>
                        </div>
                    </div> */}
                    <div className="mint-section">
                    <button className="custom-btn secondary-btn">Mint</button>
                    </div>
                    </Col>
                </Row>
            </Container>
    </>
}
export default BuyHes;