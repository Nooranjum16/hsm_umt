import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "../sidebar";
import styleside from "../../styles/sidebar.module.css";
import styless from "../../styles/about2.module.css";
import { HSMreviewdata } from "../api/hsmreview";
import Link from "next/link";
export default function HSMreview() {
  const listItems = HSMreviewdata.map((items) => (
    <Row key={items.id} className="mt-5 mb-0">
      <Col md={3} className="text-center">
        <img
          src={items.imageId}
          alt="accredit"
          className="img-fluid img-thumbnail"
          max-width="300"
          height="120"
        ></img>
      </Col>
      <Col md={9}>
        <div>
          <Link href="/HSMreview/HSMreveiw1" className={styless.hsmreviewtitle}>
            {items.title}
          </Link>
          <p className={styless.reviewcontent}>{" " + items.content + " "}</p>
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
            <div
              className={`${styless["HSMcontent"]} ${styless["hsmreveiwimg"]}`}
            >
              <h1 className={styless.hsmreviewheading}>hsm reveiw</h1>
              {/* HSM review */}
              <div className="mt-5 mb-0">
                <Row>
                  <ul>{listItems}</ul>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
