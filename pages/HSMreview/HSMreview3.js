import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styless from "../../styles/about2.module.css";

export default function hsmreview3() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>sidebar</Col>
          <Col lg={10}>
            <div
              className={`${styless["HSMcontent"]} ${styless["reviewpage3"]}`}
            >
              <h1 className={styless.hsmreviewheading}>hsm reveiw</h1>
              {/* cardpart */}
              <div className={`${styless["reviewcard"]}`}>
                <div className={styless.reviewcardbody}>
                  <h4 className={styless.reviewcardtext}>
                    Top HR Trend to Watch HR Analytics and Human Resource
                    Information Systems (HRIS)
                  </h4>
                </div>
              </div>
              {/* history part of HSMreview page 2*/}
              <div md={12} className={styless.reviewpagep}>
                <p className="mt-5">
                  As Information Systems embedded with Big Data Analytics are
                  becoming ubiquitous, HR has started to capitalize on this
                  latest trend by amalgamating the tools and platforms used into
                  the overall HRM function. Key trends emerging in HR Analytics
                  can be leveraged by an organization for maximum impact by
                  using robust HR Information Systems and crafting People and
                  Talent strategies based on information gleaned from the data
                  insights resulting in better management of talent under their
                  purview.
                </p>
                <p>
                  Starting with the optimizing and streamlining of the hiring
                  processes, HR managers are now able to leverage talent
                  acquisition software, which allows HR to collect, store and
                  evaluate the CVs of what can be thousands of applications
                  received. Big Data also helps HR managers understand and
                  identify opportunities for growth and then incorporate
                  workforce analytics that can help respond and predict times
                  when growth will be beneficial to the organization.
                  Information Systems enable HR teams to be more informed and in
                  turn more strategic. Dashboards comprising real-time data that
                  has been collected and analyzed will support HR with being
                  able to understand the story of the organization, what’s
                  happening, and crucially what trends are being predicted based
                  on historical data. By profiling teams and individuals, HR
                  with the help of Big Data can locate patterns and trends
                  across teams and departments and thus highlight issues that
                  may be about to arise and respond in real time to attrition
                  issues as they unfold. The biggest benefit that HR Analytics
                  can provide to organizations is to Identify employee skills
                  gaps. By using predictive models and AI, it’s possible for HR
                  to identify development opportunities, maximize skill
                  crossover opportunities in project deployments, ensure
                  employees are working in the right roles and identify career
                  planning opportunities. HR analytics can also create KPIs and
                  appraisal systems by developing HR Scorecards that can not
                  only assess performance but can also provide an unbiased
                  Compensation and Benefits system. The same HRIS can identify
                  areas of Skill gaps, undergo TNA (Training Need Analysis) and
                  not only recommend but also develop self-paced virtual
                  training master classes. By using HRIS and HR Analytics, the
                  HRM function can truly maximize the outcomes of big data by
                  linking employee data metrics that are aligned with the wider
                  organization.
                </p>
                <p>
                  Keeping in mind the unprecedented need and benefits of HR
                  Analytics, the Department of Management at the Hasan Murad
                  School of Management, (UMT) is in launching a practice-based
                  MS degree program in Human Resource Information Systems (MS
                  HRIS), which will encompass People & Talent strategies based
                  on HR Management software’s and platforms, Benefit portals,
                  ERP’s, People Analytics, AI, HR Analytics, and HR Dashboards
                  etc, that will help upcoming human resources professionals to
                  make more data-driven HR decisions with the aid of HR
                  technology and information systems that will yield
                  transformative results in the HR function of an organization.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
