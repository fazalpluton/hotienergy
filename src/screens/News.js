import { Col, Container, Row } from "react-bootstrap";
import HorizontalLogo from '../assets/images/horizontal-logo.png'

function News(){
    return <>
            <Container fluid>
                <div className="page-margin-top">
                <Row>
                    <Col lg={6}>
                      <div className="token-section">
                          <div className="news-height">
                          <h5 className="title-section">News</h5>
                          <p className="light-p">TWITTER WIDGET</p>
                          </div>
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className="token-section">
                          <div className="news-height">
                          <h5 className="title-section">News</h5>
                          <p className="light-p">LINKEDIN WIDGET</p>
                          </div>
                      </div>
                    </Col>
                   
                  
                </Row>
                </div>
            </Container>
    </>
}
export default News;