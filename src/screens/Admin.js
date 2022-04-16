import { Col, Container, Row } from "react-bootstrap";
import Transfer from '../assets/images/transfer.png'
import BuySell from '../assets/images/buy-sell.png'
import Wallet from '../assets/images/wallet.png'
import WalletPartner from '../assets/images/wallet-partner.png'
import Amount from '../assets/images/amount.png'
import Dollar from '../assets/images/dollar.png'
import MakePayment from '../assets/images/make-payment.png'
import Calender from '../assets/images/calender.png'
import Pool from '../assets/images/pool.png'
import News from '../assets/images/new2.png'
import Info from '../assets/images/info.png'


import {HistoricGraph} from '../components/Index';

function Admin(){
    return <>
            <Container fluid>
                <div className="page-margin-top">
                <h5 className="section-title">INTRODUCE YOUR DATA</h5>
                <Row>
                    <Col lg={12}>
                      <ul className="admin-ul">
                          <li>
                              <img src={Transfer}/>
                              <span>TRANSFER <br/>OWNERSHIP</span>
                          </li>
                          <li>
                              <img src={BuySell}/>
                              <span>ADJUST BUY/SELL<br/> COMISSIONS</span>
                          </li>
                          <li>
                              <img src={Wallet}/>
                              <span>ADD/WITHDRAW<br/> WALLET (TEAM)</span>
                          </li>
                          <li>
                              <img src={WalletPartner}/>
                              <span>ADD/WITHDRAW <br/> WALLET (PARTNER)</span>
                          </li>
                          <li>
                              <img src={Amount}/>
                              <span>MODIFY DeFi<br/> AMOUNT</span>
                          </li>
                          <li>
                              <img src={Dollar}/>
                              <span>MODIFY CeFi<br/> AMOUNT</span>
                          </li>
                          <li>
                              <img src={MakePayment}/>
                              <span>MAKE <br/> PAYMENT</span>
                          </li>
                          <li>
                              <img src={Calender}/>
                              <span>SET PAYMENT <br/> DATE</span>
                          </li>
                          <li>
                              <img src={Pool}/>
                              <span>ADJUST <br/> MINIPOOLS</span>
                          </li>
                          <li>
                              <img src={News}/>
                              <span>ADD <br/> NEWS</span>
                          </li>
                          <li>
                              <img src={Info}/>
                              <span>MODIFY <br/> DISCLAIMERS</span>
                          </li>
                      </ul>
                    </Col>
                </Row>
                </div>
            </Container>
    </>
}
export default Admin;