import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "../sidebar";
import stylecontact from "../../styles/contact.module.css";
import styless from "../../styles/about2.module.css";
import styleside from "../../styles/sidebar.module.css";
import { contactData } from "../api/contactaccordion";

function Contact() {
  const [isActive, setIsActive] = useState(false);
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
              className={`${stylecontact["maincontent"]} ${stylecontact["contactbg"]}`}
            >
              <h1 className={stylecontact.contactheading}>contact us</h1>
              {/*  contact information */}
              <div className={stylecontact.contactinfor}>
                <Container className={`${stylecontact["card"]}`}>
                  <div className={stylecontact.cardbody}>
                    <h3>DR HASAN MURAD SCHOOL OF MANAGEMENT (HSM)</h3>
                    <p className="mb-0">
                      University of Management & Technology
                    </p>
                    <p className="my-0">C-II, Johar Town, Lahore</p>
                    <p className="mb-0">54700 Pakistan.</p>
                    <p className="mb-0">UAN: +92 42 111 300 200 </p>
                    <p className="mb-0"> Tel.: +92 42 35212801-10</p>
                    <p className="mb-0 ">Fax: +92 42 35184789 </p>
                    <p className="mb-0 text-decoration-underline">
                      Email: hsm.info@umt.edu.pk
                    </p>
                  </div>
                </Container>
              </div>
              {/* contact accordion */}
              <Container className={stylecontact.accordion}>
                <ul>
                  {contactData.map((items, id) => (
                    <li className={stylecontact.accordionitem} key={items.id}>
                      <div
                        className={stylecontact.accordiontoggle}
                        onClick={() => setIsActive(!isActive)}
                      >
                        <h5>{items.title}</h5>
                        <span>{isActive ? "-" : "+"}</span>
                      </div>
                      {isActive && (
                        <div className={stylecontact.accordioncontent}>
                          {items.phone}
                          <br></br>
                          {items.content}
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </Container>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Contact;
