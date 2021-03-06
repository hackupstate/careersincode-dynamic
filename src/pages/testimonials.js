import React from "react";
import Layout from "../components/layout";
import Header from "../components/header";
import NavComponent from "../components/nav";
import JumbotronComponent from "../components/jumbotron";
import JumboButton from "../components/jumbobutton";
import SEO from "../components/seo";
import { Container, Row, Col } from "reactstrap";
import Kelly from "../images/students/kellycorey.jpg";
import Karin from "../images/students/karin.jpg";
import Ana from "../images/students/ana.jpg";
import Dana from "../images/students/dana.jpg";
import Kaitlyn from "../images/students/kaitlyn.jpg";
import Dakir from "../images/students/dakir.jpg";
import Tim from "../images/students/tim.jpeg";
import Linda from "../images/students/lindakovacs.jpeg";
import Joey from "../images/instructors/joeybuczek.jpg";
import Gus from "../images/instructors/gus.jpg";
import content from "../content/content.json";
import pageStyles from "./pages.module.css";
import testimonialStyles from "./testimonials.module.css";

const TestimonialsPage = () => (
  <Layout>
    <Header>
      <NavComponent />
      <JumbotronComponent
        heading={content.ui.about.testimonials_jumbotron.heading}
      >
        <JumboButton
          btnLink={content.ui.about.testimonials_jumbotron.button.link}
          btnText={content.ui.about.newsletter_jumbotron.button.text}
        />
      </JumbotronComponent>
    </Header>
    <SEO title="Testimonials" />
    <Container>
      <Row className={pageStyles.pageHeadings}>
        <Col>
          <h3>{content.ui.about.testimonials_main_content.students.header} </h3>
        </Col>
      </Row>
      <Row className={testimonialStyles.testimonialRowOdd}>
        <Col>
          <img
            className={testimonialStyles.imgSquare}
            src={Kelly}
            alt={
              content.ui.about.testimonials_main_content.students.kelly.alt_text
            }
          />
        </Col>
        <Col>
          <h4>
            {content.ui.about.testimonials_main_content.students.kelly.header}
          </h4>
          <p>
            {content.ui.about.testimonials_main_content.students.kelly.text}
          </p>
        </Col>
      </Row>
      <Row className={testimonialStyles.testimonialRow}>
        <Col>
          <h4>
            {content.ui.about.testimonials_main_content.students.karin.header}
          </h4>
          <p>
            {content.ui.about.testimonials_main_content.students.karin.text}
          </p>
        </Col>
        <Col>
          <img
            className={testimonialStyles.imgSquare}
            src={Karin}
            alt={
              content.ui.about.testimonials_main_content.students.karin.alt_text
            }
          />
        </Col>
      </Row>
      <Row className={testimonialStyles.testimonialRowOdd}>
        <Col>
          <img
            className={testimonialStyles.imgSquare}
            src={Ana}
            alt={
              content.ui.about.testimonials_main_content.students.ana.alt_text
            }
          />
        </Col>
        <Col>
          <h4>
            {content.ui.about.testimonials_main_content.students.ana.header}
          </h4>
          <p>{content.ui.about.testimonials_main_content.students.ana.text}</p>
        </Col>
      </Row>
      <Row className={testimonialStyles.testimonialRow}>
        <Col>
          <h4>
            {content.ui.about.testimonials_main_content.students.dana.header}
          </h4>
          <p>{content.ui.about.testimonials_main_content.students.dana.text}</p>
        </Col>
        <Col>
          <img
            className={testimonialStyles.imgSquare}
            src={Dana}
            alt={
              content.ui.about.testimonials_main_content.students.dana.alt_text
            }
          />
        </Col>
      </Row>
      <Row className={testimonialStyles.testimonialRowOdd}>
        <Col>
          <img
            className={testimonialStyles.imgSquare}
            src={Kaitlyn}
            alt={
              content.ui.about.testimonials_main_content.students.kaitlyn
                .alt_text
            }
          />
        </Col>
        <Col>
          <h4>
            {content.ui.about.testimonials_main_content.students.kaitlyn.header}
          </h4>
          <p>
            {content.ui.about.testimonials_main_content.students.kaitlyn.text}
          </p>
        </Col>
      </Row>
      <Row className={testimonialStyles.testimonialRow}>
        <Col>
          <h4>
            {content.ui.about.testimonials_main_content.students.dakir.header}
          </h4>
          <p>
            {content.ui.about.testimonials_main_content.students.dakir.text}
          </p>
        </Col>
        <Col>
          <img
            className={testimonialStyles.imgSquare}
            src={Dakir}
            alt={
              content.ui.about.testimonials_main_content.students.dakir.alt_text
            }
          />
        </Col>
      </Row>
      <Row className={testimonialStyles.testimonialRowOdd}>
        <Col>
          <img
            className={testimonialStyles.imgSquare}
            src={Tim}
            alt={
              content.ui.about.testimonials_main_content.students.tim.alt_text
            }
          />
        </Col>
        <Col>
          <h4>
            {content.ui.about.testimonials_main_content.students.tim.header}
          </h4>
          <p>{content.ui.about.testimonials_main_content.students.tim.text}</p>
        </Col>
      </Row>
      <Row className={testimonialStyles.testimonialRow}>
        <Col>
          <h4>
            {content.ui.about.testimonials_main_content.students.linda.header}
          </h4>
          <p>
            {content.ui.about.testimonials_main_content.students.linda.text}
          </p>
        </Col>
        <Col>
          <img
            className={testimonialStyles.imgSquare}
            src={Linda}
            alt={
              content.ui.about.testimonials_main_content.students.linda.alt_text
            }
          />
        </Col>
      </Row>

      {/* INSTRUCTORS AND TAs */}
      <Row className={pageStyles.pageHeadings}>
        <Col>
          <h3>
            {content.ui.about.testimonials_main_content.instructors.header}
          </h3>
        </Col>
      </Row>
      <Row className={testimonialStyles.testimonialRowOdd}>
        <Col>
          <img
            className={testimonialStyles.imgSquare}
            src={Joey}
            alt={
              content.ui.about.testimonials_main_content.instructors.joey
                .alt_text
            }
          />
        </Col>
        <Col>
          <h4>
            {content.ui.about.testimonials_main_content.instructors.joey.header}
          </h4>
          <p>
            {content.ui.about.testimonials_main_content.instructors.joey.text}
          </p>
        </Col>
      </Row>
      <Row className={testimonialStyles.testimonialRow}>
        <Col>
          <h4>
            {content.ui.about.testimonials_main_content.instructors.gus.header}
          </h4>
          <p>
            {content.ui.about.testimonials_main_content.instructors.gus.text}
          </p>
        </Col>
        <Col>
          <img
            className={testimonialStyles.imgSquare}
            src={Gus}
            alt={
              content.ui.about.testimonials_main_content.instructors.gus
                .alt_text
            }
          />
        </Col>
      </Row>
    </Container>
  </Layout>
);

export default TestimonialsPage;
