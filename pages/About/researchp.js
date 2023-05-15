import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ArrowLeft } from "@fortawesome/free-solid-svg-icons";
// import { ArrowLeft } from 'react-bootstrap-icons';

function Researchpart() {
  return (
    <>
      <Container className="my-5 p-5 bg-warning">
        <Row>
          <Col>
            <div className="border-secondary border-end text-center ">
              <h1
                className="text-danger"
                style={{ fontWeight: "bolder", fontSize: 80 }}
              >
                06
              </h1>
              <p
                className="text-secondary"
                style={{ fontWeight: "bolder", fontSize: 20 }}
              >
                Research Journals
              </p>
            </div>
          </Col>
          <Col>
            <div className="border-secondary border-end text-center">
              <h1
                className="text-danger"
                style={{ fontWeight: "bolder", fontSize: 80 }}
              >
                03
              </h1>
              <p
                className="text-secondary"
                style={{ fontWeight: "bolder", fontSize: 20 }}
              >
                Research Journals
              </p>
            </div>
          </Col>
          <Col>
            <div className=" border-secondary border-end text-center">
              <h1
                className="text-danger"
                style={{ fontWeight: "bolder", fontSize: 80 }}
              >
                06
              </h1>
              <p
                className="text-secondary"
                style={{ fontWeight: "bolder", fontSize: 20 }}
              >
                Research Journals
              </p>
            </div>
          </Col>
          <div className="text-center mt-5">
            <Button variant="danger" className="rounded-circle me-2" size="lg">
              <FontAwesomeIcon icon={ArrowLeft} />
            </Button>
            <Button variant="danger" className="rounded-circle" size="lg">
              <FontAwesomeIcon icon={ArrowLeft} />
            </Button>
          </div>
        </Row>
      </Container>
    </>
  );
}
export default Researchpart;
