import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Header from "../components/header"
import NavComponent from "../components/nav"
import JumbotronComponent from "../components/jumbotron"
import SEO from "../components/seo"
import content from "../content/content.json"
import { Container, Row, Col } from "reactstrap"
import pageStyles from "./pages.module.css"

const MissionPage = () => (
  <Layout>
    <Header>
      <NavComponent />
      <JumbotronComponent
        heading={content.ui.about.mission_jumbotron.heading}
      ></JumbotronComponent>
    </Header>
    <SEO title="Mission" />
    <Container>
      <Row className={pageStyles.pageHeadings}>
        <Col>
          <h3> {content.ui.about.mission_main_content.header1.title} </h3>
          <p> {content.ui.about.mission_main_content.header1.text1} </p>
          <p> {content.ui.about.mission_main_content.header1.text2} </p>
        </Col>
      </Row>
      <hr />
      <Row className={pageStyles.pageHeadings}>
        <Col>
          <h3> {content.ui.about.mission_main_content.header2.title} </h3>
          <p> {content.ui.about.mission_main_content.header2.text} </p>
          <h3> {content.ui.about.mission_main_content.header3} </h3>
        </Col>
      </Row>
      <hr />
      <Row className={pageStyles.pageHeadings}>
        <Col>
          <h3> {content.ui.about.mission_main_content.header4.title} </h3>
          <h4> {content.ui.about.mission_main_content.header4.subheader1} </h4>
          <p> {content.ui.about.mission_main_content.header4.text} </p>
          <h4>
            {" "}
            {
              content.ui.about.mission_main_content.header4.subheader2.title
            }{" "}
          </h4>
          <p>
            {" "}
            {content.ui.about.mission_main_content.header4.subheader2.text}{" "}
          </p>
          <h4>
            {" "}
            {
              content.ui.about.mission_main_content.header4.subheader3.title
            }{" "}
          </h4>
          <p>
            {" "}
            {content.ui.about.mission_main_content.header4.subheader3.text}{" "}
          </p>
        </Col>
      </Row>
      <hr />
      <Row className={pageStyles.pageHeadings}>
        <Col>
          <Link to="/">Go Home</Link>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default MissionPage