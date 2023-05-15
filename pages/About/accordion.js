import React, { useState } from "react";
import styless from "../../styles/about2.module.css";
import { accordionData } from "../api/Accordiondata";
import { Container } from "react-bootstrap";
const Accordion = () => {
  const [isActive, setIsActive] = useState({
    state: false,
    id: "",
  });

  return (
    <>
      <Container className={styless.accordion}>
        <h3 className={styless.accordionheading}>WHAT MAKES HSM GREAT</h3>
        <ul>
          {accordionData.map((items, id) => (
            <li className={styless.accordionitem} key={items.id}>
              <div
                className={styless.accordiontoggle}
                onClick={() => setIsActive({ state: !isActive.state, id: id })}
              >
                <h5>{items.title}</h5>
                <span>{isActive ? "-" : "+"}</span>
              </div>
              {isActive.state && isActive.id == id && (
                <div className={styless.accordioncontent}>{items.content}</div>
              )}
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
};

export default Accordion;
