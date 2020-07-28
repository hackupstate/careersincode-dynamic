import React from "react";
import Layout from "../components/layout";
import Header from "../components/header";
import NavComponent from "../components/nav";
import JumbotronComponent from "../components/jumbotron";
import JumboButton from "../components/jumbobutton";
import SEO from "../components/seo";
import Banner from "../components/banner";

import BottomRowContainer from "../components/bottomrowcontainer";
import {
  Container,
  Button,
  Row,
  Col,
  CardDeck,
  Card,
  CardImg,
  CardTitle,
  CardText,
} from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Joey from "../images/instructors/joeybuczek.jpg";
import Kelly from "../images/students/kellycorey.jpg";
import Doug from "../images/team/dougcrescenzi.png";
import content from "../content/content.json";
import pageStyles from "./pages.module.css";
import bannerStyles from "../components/banner.module.css";
import testimonialStyles from "./testimonials.module.css";

const IndexPage = (props) => (
  <Layout>
    <Header>
      <NavComponent />
      <JumbotronComponent
        heading={content.ui.index_jumbotron.heading}
        subheading={content.ui.index_jumbotron.subheading}
      >
        <JumboButton
          btnLink={content.ui.index_jumbotron.button1.link}
          btnText={content.ui.index_jumbotron.button1.text}
        />
        <JumboButton
          btnLink={content.ui.index_jumbotron.button2.link}
          btnText={content.ui.index_jumbotron.button2.text}
        />
      </JumbotronComponent>
    </Header>
    <SEO title="Home" />
    <Banner>
      <Row className={bannerStyles.bannerGreen}>
        <Col className={pageStyles.centerText}>
          <a
            href={content.ui.index_banner.link}
            target="_blank"
            rel="noopener noreferrer"
            className={pageStyles.bannerLink}
          >
            {content.ui.index_banner.text}{" "}
            <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </a>
        </Col>
      </Row>
    </Banner>
    <Container fluid className={pageStyles.whiteContainer}>
      <Row className={pageStyles.pageHeadings}>
        <Col className={pageStyles.centerContentColumns}>
          <h3> {content.ui.index_main_content_top_text.copy}</h3>
          <p> {content.ui.index_main_content_top_text.description} </p>
          <Button className={pageStyles.blueButton}>
            <a
              href="https://medium.com/@hackupstate/announcing-hack-upstates-careers-in-code-a8ff0bfeddbf"
              target="_blank"
              rel="noopener noreferrer"
              className={pageStyles.btnLink}
            >
              {" "}
              {content.ui.index_main_content_top_text.button}{" "}
            </a>
          </Button>
        </Col>
      </Row>
      <Row className={pageStyles.pageHeadings}>
        <Col className={pageStyles.centerContentColumns}>
          <h3> {content.ui.index_main_content_bottom_text.copy} </h3>
          <p> {content.ui.index_main_content_bottom_text.description} </p>
          <Button className={pageStyles.blueButton}>
            <a
              href={content.ui.index_main_content_bottom_text.link}
              target="_blank"
              rel="noopener noreferrer"
              className={pageStyles.btnLink}
            >
              {content.ui.index_main_content_bottom_text.button}
            </a>
          </Button>
        </Col>
      </Row>
    </Container>
    <Container fluid className={testimonialStyles.blueContainer}>
      <Row>
        <CardDeck>
          <Col sm="4">
            <Card body className={("shadow-sm", testimonialStyles.cardStyle)}>
              <CardImg
                top
                width="100%"
                src={Doug}
                alt="Doug Crescenzi"
                className={testimonialStyles.cardImg}
              />
              <CardText>
                <p className={testimonialStyles.cardText}>
                  {content.ui.index_main_content_testimonials_one.snippet}
                </p>
              </CardText>
              <CardTitle>
                <p className={testimonialStyles.cardTitle}>
                  {content.ui.index_main_content_testimonials_one.name}
                </p>
              </CardTitle>
            </Card>
          </Col>
          <Col sm="4">
            <Card body className={("shadow-sm", testimonialStyles.cardStyle)}>
              <CardImg
                top
                width="100%"
                src={Kelly}
                alt="Kelly Corey"
                className={testimonialStyles.cardImg}
              />
              <CardText>
                <p className={testimonialStyles.cardText}>
                  {content.ui.index_main_content_testimonials_two.snippet}
                </p>
              </CardText>
              <CardTitle>
                <p className={testimonialStyles.cardTitle}>
                  {content.ui.index_main_content_testimonials_two.name}
                </p>
              </CardTitle>
            </Card>
          </Col>
          <Col sm="4">
            <Card body className={("shadow-sm", testimonialStyles.cardStyle)}>
              <CardImg
                top
                width="100%"
                src={Joey}
                alt="Joey Buzcek"
                className={testimonialStyles.cardImg}
              />
              <CardText>
                <p className={testimonialStyles.cardText}>
                  {content.ui.index_main_content_testimonials_three.snippet}
                </p>
              </CardText>
              <CardTitle>
                <p className={testimonialStyles.cardTitle}>
                  {content.ui.index_main_content_testimonials_three.name}
                </p>
              </CardTitle>
            </Card>
          </Col>
        </CardDeck>
      </Row>
    </Container>
    <Container fluid className={testimonialStyles.blueContainer}>
      <Button size="md" className={testimonialStyles.blueButton}>
        <a
          href={content.ui.index_main_content_testimonials_button.link}
          target="_blank"
          rel="noopener noreferrer"
          className={testimonialStyles.btnLink}
        >
          {content.ui.index_main_content_testimonials_button.copy}
        </a>
      </Button>
    </Container>
    <BottomRowContainer />
  </Layout>
);

export default IndexPage;
