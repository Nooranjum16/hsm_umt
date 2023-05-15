import { Button, Col, Container, Row } from "react-bootstrap";
import styless from "../../../styles/about2.module.css";
import { list } from "../../api/buttondata";
import { accreditdata } from "../../api/accreditation";
import Sidebar from "../../sidebar";
import styleside from "../../../styles/sidebar.module.css";
import Footer from "../footer";
// import Image from 'next/image';

function Accrediation() {
  const listItems = accreditdata.map((items) => (
    <Row key={items.id} className={styless.accreditrow}>
      <Col md={3} className={`${styless.accreditimage} ${"text-center"}`}>
        <img
          src={items.imageId}
          alt="accredit"
          className="img-fluid"
          max-width="300"
          height="120"
        ></img>
      </Col>
      <Col md={9}>
        <div>
          <h4 className={styless.accredittitle}>{items.title}</h4>
          <p className={styless.aboutp2}>{" " + items.content + " "}</p>
        </div>
      </Col>
    </Row>
  ));
  return (
    <>
      <Container fluid>
        <Row>
          <Col lg={2}>
            <div id={styleside.sidebar}>
              <Sidebar />
            </div>
          </Col>
          <Col lg={10}>
            <div className={`${styless["maincontent"]} ${styless["bgimg2"]}`}>
              <h1 className={`${styless["aboutheading"]}`}>accreditation</h1>
              {/* buttons and cardpart */}
              <div>
                <div className="my-4">
                  {list.map((item) => (
                    <Button id={styless.btn} key={item.id}>
                      <text>{item.title}</text>
                    </Button>
                  ))}
                </div>
                <div className={`${styless["card"]}`}>
                  <div className={styless.cardbody}>
                    <h4 className={styless.cardtext}>
                      Providing meaningful insights for global business
                      leadership
                    </h4>
                  </div>
                </div>
              </div>
              {/* Accreditation accordion */}
              <div md={12} className="mt-5">
                <p className={styless.accreditp}>
                  Institutional accreditations determine the extent to which
                  university programs meet the rigorous quality criteria which
                  are required in specialized professional fields. We strongly
                  believe that relevant accreditations are the means through
                  which our programs are benchmarked against best practice.
                </p>
                <Row className=" mt-5">
                  <ul>{listItems}</ul>
                </Row>
              </div>
              <Footer />
            </div>
          </Col>
        </Row>
      </Container>

      {/* <div md={12} className="mt-5">
            <p className={styless.aboutp2}>
              Institutional accreditations determine the extent to which
              university programs meet the rigorous quality criteria which are
              required in specialized professional fields. We strongly believe
              that relevant accreditations are the means through which our
              programs are benchmarked against best practice.
            </p>
            <Row className=" mt-5">
              <ul>{listItems}</ul>
            </Row>
          </div> */}
    </>
  );
}
export default Accrediation;
