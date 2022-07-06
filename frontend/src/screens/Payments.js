import { Col, Container, Row } from "react-bootstrap";
import HorizontalLogo from '../assets/images/horizontal-logo.png'
import {HistoricGraph} from '../components/Index';

function Payments(){
    return <>
            <Container fluid className="main-height">
                <div className="page-margin-top">
                <Row>
                    <Col lg={5}>
                      
                      <p className="mt-2 p-with-logo">In <img src={HorizontalLogo} className="in-text-logo"/> we believe in the cryptocurrencies for this reason, we created our own token, where we are sharing monthly a percentage of our earnings by our services and solutions offering into the energy sector, these payments come from our billing account, and it represents a way to support people that trust in our projects, activities and operations making them part of our growing up process.</p>
                      <div className="payment-top-margin">
                      <div className="payment-first-flex">
                        <div>
                            <span>DATE OF LAST DEPOSIT</span>
                        </div>
                        <div className="background-green">
                            .
                        </div>
                    </div>
                    <div className="payment-first-flex">
                        <div>
                            <span>TOTAL LAST DEPOSIT <span className="green">(USDT)</span>:</span>
                        </div>
                        <div className="background-green">
                            .
                        </div>
                    </div>
                    <div className="payment-first-flex">
                        <div>
                            <span>DEPOSIT MADE TO SUPPORT HEST <span className="green">(USD)</span>:</span>
                        </div>
                        <div className="background-green">
                            .
                        </div>
                    </div>
                    <div className="payment-first-flex">
                        <div>
                            <span>DEPOSIT MADE TO TEAM <span className="green">(USD)</span>:</span>
                        </div>
                        <div className="background-green">
                            .
                        </div>
                    </div>
                    <div className="payment-first-flex">
                        <div>
                            <span>DEPOSIT MADE TO PARTNERSHIP <span className="green">(USD)</span>:</span>
                        </div>
                        <div className="background-green">
                            .
                        </div>
                    </div>
                    <div className="payment-first-flex">
                        <div>
                            <span>TOTAL SHARING AMOUNT TO STAKE <span className="green">(USD)</span>:</span>
                        </div>
                        <div className="background-green">
                            .
                        </div>
                    </div>
                    <div className="payment-first-flex">
                        <div>
                            <span>TOTAL SHARING AMOUNT TO STAKE <span className="green">(HEST)</span>:</span>
                        </div>
                        <div className="background-green">
                            .
                        </div>
                    </div>
                    <div className="payment-first-flex">
                        <div>
                            <span>TOTAL SALED <span className="green">(HEST)</span>:</span>
                        </div>
                        <div className="background-green">
                            .
                        </div>
                    </div>
                      </div>
                    </Col>
                    <Col lg={7}>
                       <div className="token-section">
                           <div className="balance-section">
                               <h5 className="section-title">NEXT PAYMENT</h5>
                               <span>WILL RELEASE IN :</span>
                           </div>
                           <div className="payment-flex">
                               <div className="inner flex">
                               <div className="timer-icon-section">
                               <i class="fa-solid fa-stopwatch"></i>
                               </div>
                               <div className="inner flex-column">
                                   <div>
                                   <span>DAYS</span>
                                   <span>HRS</span>
                                   <span>MIN</span>
                                   <span>SEC</span>
                                   </div>
                                   <div className="green-background timer-section">
                                       <span>00</span>
                                       <span>00</span>
                                       <span>00</span>
                                       <span>00</span>
                                   </div>
                               </div>
                               </div>
                              
                               <div className="inner flex">
                                   <div className="inner-flex">
                                   <span>HEST WILL RECEIVE:</span>
                                   </div>
                                   <div className="flex-with-name">
                                   <div className="inner-flex green-background amount-section">
                                   <span>76,500.00</span>
                                   </div>
                                   <span className="name green">HEST</span>
                                   </div>
                               </div>
                           </div>
                           <div className="payment-flex">
                               <div className="inner flex">
                                   <div className="inner-flex">
                                   <span>VALUE:</span>
                                   </div>
                                   <div className="flex-with-name">
                                   <div className="inner-flex green-background amount-section">
                                   <span>150,000.00</span>
                                   </div>
                                   <span className="name green">USD</span>
                                   </div>
                               </div>
                               <div className="inner flex">
                                   <div className="inner-flex">
                                   <span>CLAIMABLE BALANCE:</span>
                                   </div>
                                   <div className="flex-with-name">
                                   <div className="inner-flex green-background amount-section">
                                   <span>58,500.00</span>
                                   </div>
                                   <span className="name green">USD</span>
                                   </div>
                               </div>
                           </div>
                       </div>
                       <div className="token-section mt-5">
                           <div className="historic-flex">
                           <div>
                           <h5 className="title-section">Historic Graph</h5>
                           <span>DEPOSITS</span>
                           </div>
                           <div className="filter">
                               <div className="flex">
                               <div>
                                   <input type="checkbox"/>
                                   <span>Team</span>
                               </div>
                               <div>
                                   <input type="checkbox"/>
                                   <span>All</span>
                               </div>
                               </div>
                              <div className="flex">
                              <div >
                                   <input type="checkbox"/>
                                   <span>Partners</span>
                               </div>
                               <div>
                                   <input type="checkbox"/>
                                   <span>Token</span>
                               </div>
                              </div>
                              <div className="flex">
                               <div>
                                   <input type="checkbox"/>
                                   <span>Stake - MiniPools</span>
                               </div>
                              </div>
                           </div>
                           </div>
                           <div className="chart-section w-100">
                               <HistoricGraph/>
                           </div>
                       </div>
                    </Col>
                  
                </Row>
                </div>
            </Container>
    </>
}
export default Payments;