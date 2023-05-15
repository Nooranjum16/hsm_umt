import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "../sidebar";
import styleside from "../../styles/sidebar.module.css";
import styless from "../../styles/about2.module.css";
import reviewimg from "../../public/Images/hsmreveiw1.jpg";
import Image from "next/image";
// import Layout from "../components/Layout";

export default function HSMreveiw1() {
  return (
    <>
      <Container fluid>
        <Row className={styless.reviewpage1}>
          <Col lg={2}>
            <div id={styleside.sidebar}>
              <Sidebar />
            </div>
          </Col>
          <Col lg={10}>
            <div className={`${styless["HSMcontent"]} `}>
              <h1 className={styless.hsmreviewheading}>hsm reveiw</h1>
              {/* cardpart */}
              <div className={`${styless["reviewcard"]}`}>
                <div className={styless.reviewcardbody}>
                  <h4 className={styless.reviewcardtext}>
                    The Effect of Parent-child Buying Communication Strategies
                    on Self brand Connections (SBC)
                  </h4>
                </div>
              </div>

              {/* history part of HSMreview page 1*/}
              <div md={12} className={styless.reviewpagep}>
                <p>
                  Parents, educators, and social scientists have been concerned
                  with the increasing passion for brands among young consumers.
                  Several social scientists have emphasized that consumption has
                  become an important aspect of young people’s lives. Young
                  consumers have become more independent in their purchasing
                  power. Further, they not only consume brands to describe who
                  they are to others, but they also seek happiness through the
                  acquisition of these brands.
                </p>
                <p>
                  Our research reflects that parental intervention through
                  monitored buying decision-making may educate and guide
                  children to separate their sense of self from brands,
                  resulting into a lower degree of Self-brand Connection (SBC).
                  Further, it is suggested that the absence of parental input
                  (i.e., lack of applying certain rules to young consumers’
                  behavior) intensifies the influence of peers that motivates
                  young people to connect to brands for peer approval. We argue
                  that the parental buying-communication strategy is key to
                  restraining the usage of brands to seek peer acceptance. This
                  might help young people to focus more on their social skills
                  and values to gain peer approval. Moreover, our results
                  resound with the opinion that in the increasingly commercial
                  world of brands, parents might play a pivotal role in
                  isolating the effects of other active socialization agents,
                  such as peers.
                </p>
                <p>
                  There is evidence that successful brands have strong
                  peer-centric marketing campaigns, and their integrated
                  marketing communication is being developed to penetrate peer
                  groups. Our research suggests that peers lead to stronger
                  Self-brand Connection (SBC), and consequently to higher levels
                  of brand loyalty. However, it has negative social
                  implications. In a recent study, it is suggested that parents
                  and children alike are being brand bullied; young consumers
                  indulge in branded products mainly because of peer pressure at
                  school, and this attitude is more pronounced in the clothing
                  brand category. Further, clothing brands are considered the
                  most relevant category for the self-concept description of
                  young people. We argue that this brand bullying, particularly
                  with regard to the choice of clothes, maybe a negative
                  unintended consequence of the clothing branding industry.
                </p>
                <p>
                  We suggest that there is a need to scrutinize the nature of
                  marketing efforts targeted at young people so that unnecessary
                  peer pressure can be curtailed. We believe our research
                  provides somewhat a bigger picture, to develop a policy
                  framework to deal with rampant consumption-related issues
                  among young consumers. We emphasize that in any such policy
                  framework, a parent-child communication strategy can be made a
                  focal point to restrain an increasing brand orientation in
                  young people.
                </p>
              </div>
              <Image
                src={reviewimg}
                alt="backgroundimg"
                className="img-fluid"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
