import { useState } from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import styless from "../../../styles/about2.module.css";
import { list } from "../../api/buttondata";
import Sidebar from "../../sidebar";
import styleside from "../../../styles/sidebar.module.css";

function Visionpart() {
  const [isActive, setIsActive] = useState(false);

  const accordiondata = [
    {
      key: 1,
      title: "Leadership",
      content:
        "Leadership that cultivates the foundations of learning and instills confidence in participants, whilst creating a culture of empowerment in our faculty and staff.",
    },
    {
      key: 2,
      title: "Transformation",
      content:
        "Transformation by creating flexibility and aspiration towards developing knowledge-based responsiveness according to the emergent situations we operate in.",
    },
    {
      key: 3,
      title: "Inclusion",
      content:
        "Inclusion of all genders, social classes, races, ethnic backgrounds, economic groups, religious affiliations, etc. under the ambit of HSM.",
    },
    {
      key: 4,
      title: "Fairness",
      content:
        "Fairness is making decisions that are free from discrimination or bias and displaying integrity through uniformity of principles, consistency in actions, and transparency in measures.",
    },
    {
      key: 5,
      title: "Internationalization",
      content:
        "Internationalization through the inclusion of global context in the curriculum, exchange programs, memberships, and accreditations with acclaimed bodies.",
    },
    {
      key: 6,
      title: "Sustainability",
      content:
        "Sustainability of actions and practices through economic, social, and environmental initiatives with a focus on community service and social responsibility.",
    },
    {
      key: 7,
      title: " Indigenization",
      content:
        "Indigenization of curriculum and teaching methodology with a focus on local industry, culture, and stakeholders.",
    },
  ];
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
              <h1 className={`${styless["aboutheading"]}`}>
                vision and mission
              </h1>
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
              {/* history */}
              <Container>
                <h4 className={styless.visionh4}>Vision</h4>
                <p className={styless.visionp}>
                  Developing holistic leaders having the capability to transform
                  and influence the society at large.
                </p>
                <h4 className={styless.visionh4}> Mission </h4>
                <p className={styless.visionp}>
                  Our Mission is underpinned by two facets: development of those
                  who create value for institutions and business organizations.
                  We accomplish this through our degree programs (BBA, BS and
                  MBA, MS).
                </p>
                <p className={styless.visionp}>
                  We also seek to develop scholars who are able to generate and
                  disseminate cutting edge knowledge. We accomplish this through
                  our faculty research and PhD programs.
                </p>
              </Container>
              {/* accordion part */}
              <Container className={styless.visionaccordion}>
                <h3 className={styless.visionh3}>Core value</h3>
              </Container>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Visionpart;
