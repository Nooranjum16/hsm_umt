import { Container, Row, Col } from "react-bootstrap";
import styless from "../../styles/about2.module.css";

function Footer() {
  return (
    <>
      <Container fluid className={styless.footer}>
        <Row>
          <Col>1</Col>
          <Col>2</Col>
          <Col>3</Col>
          <Col>4</Col>
          <Col>5</Col>
          <Col>6</Col>
          <Col>7</Col>
        </Row>
      </Container>
    </>
  );
}
export default Footer;
