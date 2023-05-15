import { Container, Button, Row, Col } from "react-bootstrap";
import styless from "../../styles/about2.module.css";
import { list } from "../api/buttondata";
import Video from "./videop";
import Researchpart from "./researchp";
import Accordion from "./accordion";
import Sidebar from "../sidebar";
import styleside from "../../styles/sidebar.module.css";
function about2() {
  return (
    <>
      <div className={styless.mainintro}>
        <div id={styleside.sidebar}>
          <Sidebar />
        </div>
        <div className={`${styless["maincontent"]} ${styless["bgimg2"]}`}>
          <h1 className={`${styless["aboutheading"]}`}>about hsm</h1>

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
                  Providing meaningful insights for global business leadership
                </h4>
              </div>
            </div>
          </div>

          {/* DR hassan murad history */}
          <Container>
            <Row>
              <Col md={12}>
                <p className={styless.aboutp2} style={{ marginTop: 50 }}>
                  Dr Hasan Murad School of Management (HSM) at the University of
                  Management and Technology (UMT) is ranked in the top few
                  business schools of Pakistan. The corporate world at home and
                  abroad testifies the quality of its programs by readily
                  absorbing the HSM graduates in various commercial activities
                  of their organizations.
                </p>
                <p className={styless.aboutp2}>
                  Business Administration programs at the Dr Hasan Murad School
                  of Management (HSM) are rigorous, result-oriented, globally
                  focused and application-based. The programs are geared to
                  equip future leaders, professionals and executives with the
                  knowledge, technology, skills and insight essential to make a
                  difference in the organizations. The graduates are groomed by
                  one of the finest business faculties in the country for the
                  roles of leaders and managers in the fields of Marketing,
                  Management, Human Resource Management, Supply Chain
                  Management, Information Systems and Finance.
                </p>
              </Col>
            </Row>
          </Container>
          {/* calling next about page components */}
          <Video />
          <Researchpart />
          <Accordion />
        </div>
      </div>
    </>
  );
}
export default about2;
