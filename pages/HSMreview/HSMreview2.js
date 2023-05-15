import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styless from "../../styles/about2.module.css";
import Image from "next/image";
import reviewpage2 from "../../public/Images/hsmreviewpage2.jpg";

export default function HSMreview2() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col lg={2}>sidebar</Col>
          <Col lg={10}>
            <div
              className={`${styless["HSMcontent"]} ${styless["reviewpage2"]}`}
            >
              <h1 className={styless.hsmreviewheading}>hsm reveiw</h1>
              {/* cardpart */}
              <div className={`${styless["reviewcard"]}`}>
                <div className={styless.reviewcardbody}>
                  <h4 className={styless.reviewcardtext}>
                    Machine Learning Predictions of Winners of World Cup Teams
                  </h4>
                </div>
              </div>
              {/* history part of HSMreview page 2*/}
              <div md={12} className={styless.reviewpagep}>
                <p className="mt-5">
                  Oxford mathematical model predicts route to the men's
                  @FIFAWorldCup
                </p>
                <p>
                  The model is based on correlating differences in a number of
                  goals with the differences in their ELO ratings.
                </p>
                <p>
                  There is a strong positive relationship between the number of
                  goals scored and the ELO ratings. So for each simulated match,
                  we can look at who the teams are and what their ratings are
                  according to eloratings.com, and use that to predict what the
                  number of goals difference will be.
                </p>
                <p>
                  Repeat this simulation 100,000 times for every match in the
                  tournament. This gives us a model of how often we expect each
                  team to win the trophy.
                </p>
                <p>
                  The model - - forecasts:
                  <div>
                    <ul>
                      <li>England to lose in the quarter-final</li>
                      <li>Argentina vs Brazil in the semi-final</li>
                      <li>Brazil to beat Belgium in the final</li>
                    </ul>
                  </div>
                </p>

                <Image
                  src={reviewpage2}
                  className="img-fluid"
                  width={950}
                  // height={500}
                  alt="Picture of the author"
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
