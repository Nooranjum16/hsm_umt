import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import styless from "../../styles/about2.module.css";

function Video() {
  return (
    <>
      <Container className={styless.videointro}>
        <Row>
          <Col md={4}>
            <div className={styless.videop}>
              <p>
                Education at HSM is rigorous, result-oriented, globally focused,
                and application-based. HSM’s programs are geared to equip future
                leaders, professionals, and executives with the knowledge,
                technology, skills, and insight essential to make a difference
                in the organizations.
              </p>
            </div>
          </Col>
          <Col md={8}>
            <div className="ratio ratio-16x9">
              <iframe
                className="videopart"
                width="100"
                height="450"
                src="https://www.youtube.com/embed/1jmXg9Pw9Gs?rel=0"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen=""
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Video;
