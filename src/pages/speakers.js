import React from "react";
import Layout from "../components/layout";
import Header from "../components/header";
import NavComponent from "../components/nav";
import JumbotronComponent from "../components/jumbotron";
import SEO from "../components/seo";
import {
  Button,
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardBody,
  CardFooter,
} from "reactstrap";
import Ed from "../images/speakers/edforth.jpeg";
import Flood from "../images/speakers/mattflood.jpeg";
import Shaun from "../images/speakers/shaunburdick.jpeg";
import Kseniya from "../images/speakers/kseniyalifanova.jpg";
import Checksfield from "../images/speakers/mattchecksfield.jpeg";
import Yulia from "../images/speakers/yuliao.jpg";
import Linda from "../images/students/lindakovacs.jpeg";
import Pam from "../images/speakers/pampuri.jpg";
import Charissa from "../images/speakers/charissalawrence.jpeg";
import Doug from "../images/team/dougcrescenzi.png";
import Raj from "../images/speakers/rajsuchak.jpeg";
import Doc from "../images/speakers/doc.jpg";
import Josh from "../images/speakers/joshcreager.png";
import Seth from "../images/speakers/sethmulligan.jpeg";
import Ben from "../images/speakers/benlannon.jpeg";
import Glenn from "../images/speakers/glennallen.jpg";
import Indaria from "../images/speakers/indaria-jones.jpg";
import {
  FaEnvelopeSquare,
  FaTwitterSquare,
  FaLinkedin,
  FaGithubSquare,
  FaGlobe,
} from "react-icons/fa";
import content from "../content/content.json";
import pageStyles from "./pages.module.css";
import speakerStyles from "./speakers.module.css";

const Speakers = () => (
  <Layout>
    <Header>
      <NavComponent />
      <JumbotronComponent
        heading={content.ui.classroom.guest_speakers.jumbotron.heading}
      />
    </Header>
    <SEO title="Speakers" />
    <Container fluid className={pageStyles.whiteContainer}>
      <Row>
        <Col>
          <h1>
            {" "}
            {
              content.ui.classroom.guest_speakers.main_content.featured.header
            }{" "}
          </h1>
          <p>
            {" "}
            {
              content.ui.classroom.guest_speakers.main_content.featured
                .header_text_skills
            }{" "}
          </p>
          <p>
            {" "}
            {
              content.ui.classroom.guest_speakers.main_content.featured
                .header_text_program
            }{" "}
          </p>
          <Row className={pageStyles.centerItems}>
          <a
                href={
                  content.ui.classroom.guest_speakers.main_content.featured
                    .button.link
                }
                target="_blank"
                rel="noopener noreferrer"
                className={pageStyles.btnLink}
              >
            <Button className={pageStyles.blueButton}>
                {
                  content.ui.classroom.guest_speakers.main_content.featured
                    .button.text
                }
            </Button>
            </a>
          </Row>
        </Col>
      </Row>
    </Container>
    {/* guest speaker cards */}
    <Row className={pageStyles.pageHeadings}>
      <h2> {content.ui.classroom.guest_speakers.main_content.cards.header} </h2>
    </Row>
    <Container
      fluid
      className={(pageStyles.marginBottom, speakerStyles.speakerCardContainer)}
    >
      <Row className={speakerStyles.speakerCardRow}>
        <CardDeck>
          {/* ed forth */}
          <Col sm="4">
            <Card body className={("shadow-sm", speakerStyles.cardSize)}>
              <CardHeader tag="h3">
                {content.ui.classroom.guest_speakers.main_content.cards.ed.name}
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={Ed}
                alt="Ed Forth"
                className={speakerStyles.imgSize}
              />
              <CardBody>
                <CardTitle>
                  <p className={speakerStyles.cardTitle}>
                    {
                      content.ui.classroom.guest_speakers.main_content.cards.ed
                        .position.text
                    }
                    <a
                      href={
                        content.ui.classroom.guest_speakers.main_content.cards
                          .ed.position.link
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      {
                        content.ui.classroom.guest_speakers.main_content.cards
                          .ed.position.link_text
                      }{" "}
                    </a>
                  </p>
                </CardTitle>
                <CardText>
                  <p className={speakerStyles.cardText}>
                    {
                      content.ui.classroom.guest_speakers.main_content.cards.ed
                        .presentation.text
                    }
                    <a
                      href={
                        content.ui.classroom.guest_speakers.main_content.cards
                          .ed.presentation.link
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      {
                        content.ui.classroom.guest_speakers.main_content.cards
                          .ed.presentation.topic
                      }{" "}
                    </a>
                  </p>
                </CardText>
              </CardBody>
              <CardFooter>
                <a
                  href={
                    content.ui.classroom.guest_speakers.main_content.cards.ed
                      .social.email
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaEnvelopeSquare />{" "}
                </a>
                <a
                  href={
                    content.ui.classroom.guest_speakers.main_content.cards.ed
                      .social.linkedin
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaLinkedin />{" "}
                </a>
                <a
                  href={
                    content.ui.classroom.guest_speakers.main_content.cards.ed
                      .social.twitter
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaTwitterSquare />{" "}
                </a>
                <a
                  href={
                    content.ui.classroom.guest_speakers.main_content.cards.ed
                      .social.website
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaGlobe />{" "}
                </a>
              </CardFooter>
            </Card>
          </Col>
          {/* matt flood */}
          <Col sm="4">
            <Card body className={("shadow-sm", speakerStyles.cardSize)}>
              <CardHeader tag="h3">
                {
                  content.ui.classroom.guest_speakers.main_content.cards.flood
                    .name
                }
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={Flood}
                alt="Matt Flood"
                className={speakerStyles.imgSize}
              />
              <CardBody>
                <CardTitle>
                  <p className={speakerStyles.cardTitle}>
                    {
                      content.ui.classroom.guest_speakers.main_content.cards
                        .flood.position.text
                    }
                    <a
                      href={
                        content.ui.classroom.guest_speakers.main_content.cards
                          .flood.position.link
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      {
                        content.ui.classroom.guest_speakers.main_content.cards
                          .flood.position.link_text
                      }{" "}
                    </a>
                  </p>
                </CardTitle>
                <CardText>
                  <p className={speakerStyles.cardText}>
                    {
                      content.ui.classroom.guest_speakers.main_content.cards
                        .flood.presentation.text
                    }
                    <a
                      href={
                        content.ui.classroom.guest_speakers.main_content.cards
                          .flood.presentation.link
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      {
                        content.ui.classroom.guest_speakers.main_content.cards
                          .flood.presentation.topic
                      }{" "}
                    </a>
                  </p>
                </CardText>
              </CardBody>
              <CardFooter>
                <a
                  href={
                    content.ui.classroom.guest_speakers.main_content.cards.flood
                      .social.email
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaEnvelopeSquare />{" "}
                </a>
                <a
                  href={
                    content.ui.classroom.guest_speakers.main_content.cards.flood
                      .social.linkedin
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaLinkedin />{" "}
                </a>
                <a
                  href={
                    content.ui.classroom.guest_speakers.main_content.cards.flood
                      .social.github
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaGithubSquare />{" "}
                </a>
              </CardFooter>
            </Card>
          </Col>
          {/* shaun burdick */}
          <Col sm="4">
            <Card body className={("shadow-sm", speakerStyles.cardSize)}>
              <CardHeader tag="h3">
                {
                  content.ui.classroom.guest_speakers.main_content.cards.shaun
                    .name
                }
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={Shaun}
                alt="Shaun Burdick"
                className={speakerStyles.imgSize}
              />
              <CardBody>
                <CardTitle>
                  <p className={speakerStyles.cardTitle}>
                    {
                      content.ui.classroom.guest_speakers.main_content.cards
                        .shaun.position.text
                    }
                    <a
                      href={
                        content.ui.classroom.guest_speakers.main_content.cards
                          .shaun.position.link
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      {
                        content.ui.classroom.guest_speakers.main_content.cards
                          .shaun.position.link_text
                      }{" "}
                    </a>
                  </p>
                </CardTitle>
                <CardText>
                  <p className={speakerStyles.cardText}>
                    {
                      content.ui.classroom.guest_speakers.main_content.cards
                        .shaun.presentation.text
                    }
                    <a
                      href={
                        content.ui.classroom.guest_speakers.main_content.cards
                          .shaun.presentation.link
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      {
                        content.ui.classroom.guest_speakers.main_content.cards
                          .shaun.presentation.topic
                      }{" "}
                    </a>
                  </p>
                </CardText>
              </CardBody>
              <CardFooter>
                <a
                  href={
                    content.ui.classroom.guest_speakers.main_content.cards.shaun
                      .social.email
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaEnvelopeSquare />{" "}
                </a>
                <a
                  href={
                    content.ui.classroom.guest_speakers.main_content.cards.shaun
                      .social.linkedin
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaLinkedin />{" "}
                </a>
                <a
                  href={
                    content.ui.classroom.guest_speakers.main_content.cards.shaun
                      .social.twitter
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaTwitterSquare />{" "}
                </a>
                <a
                  href={
                    content.ui.classroom.guest_speakers.main_content.cards.shaun
                      .social.website
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaGlobe />{" "}
                </a>
                <a
                  href={
                    content.ui.classroom.guest_speakers.main_content.cards.shaun
                      .social.github
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaGithubSquare />{" "}
                </a>
              </CardFooter>
            </Card>
          </Col>
        </CardDeck>
      </Row>

      <Row className={speakerStyles.speakerCardRow}>
        <CardDeck>
          {/* kseniya lifanova */}
          <Col sm="4">
            <Card body className={("shadow-sm", speakerStyles.cardSize)}>
              <CardHeader tag="h3">
                {
                  content.ui.classroom.guest_speakers.main_content.cards.kseniya
                    .name
                }
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={Kseniya}
                alt="Kseniya Lifanova"
                className={speakerStyles.imgSize}
              />
              <CardBody>
                <CardTitle>
                  <p className={speakerStyles.cardTitle}>
                    {
                      content.ui.classroom.guest_speakers.main_content.cards
                        .kseniya.position.text
                    }
                    <a
                      href={
                        content.ui.classroom.guest_speakers.main_content.cards
                          .kseniya.position.link
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      {
                        content.ui.classroom.guest_speakers.main_content.cards
                          .kseniya.position.link_text
                      }{" "}
                    </a>
                  </p>
                </CardTitle>
                <CardText>
                  <p className={speakerStyles.cardText}>
                    {
                      content.ui.classroom.guest_speakers.main_content.cards
                        .kseniya.presentation.text
                    }
                    <a
                      href={
                        content.ui.classroom.guest_speakers.main_content.cards
                          .kseniya.presentation.link
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      {
                        content.ui.classroom.guest_speakers.main_content.cards
                          .kseniya.presentation.topic
                      }{" "}
                    </a>
                  </p>
                </CardText>
              </CardBody>
              <CardFooter>
                <a
                  href={
                    content.ui.classroom.guest_speakers.main_content.cards
                      .kseniya.social.email
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaEnvelopeSquare />{" "}
                </a>
                <a
                  href={
                    content.ui.classroom.guest_speakers.main_content.cards
                      .kseniya.social.linkedin
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaLinkedin />{" "}
                </a>
                <a
                  href={
                    content.ui.classroom.guest_speakers.main_content.cards
                      .kseniya.social.twitter
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaTwitterSquare />{" "}
                </a>
                <a
                  href={
                    content.ui.classroom.guest_speakers.main_content.cards
                      .kseniya.social.website
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaGlobe />{" "}
                </a>
                <a
                  href={
                    content.ui.classroom.guest_speakers.main_content.cards
                      .kseniya.social.github
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaGithubSquare />{" "}
                </a>
              </CardFooter>
            </Card>
          </Col>
          {/* matt checksfield */}
          <Col sm="4">
            <Card body className={("shadow-sm", speakerStyles.cardSize)}>
              <CardHeader tag="h3">
                {
                  content.ui.classroom.guest_speakers.main_content.cards
                    .checksfield.name
                }
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={Checksfield}
                alt="Matt Checksfield"
                className={speakerStyles.imgSize}
              />
              <CardBody>
                <CardTitle>
                  <p className={speakerStyles.cardTitle}>
                    {
                      content.ui.classroom.guest_speakers.main_content.cards
                        .checksfield.position.text
                    }
                    <a
                      href={
                        content.ui.classroom.guest_speakers.main_content.cards
                          .checksfield.position.link
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      {
                        content.ui.classroom.guest_speakers.main_content.cards
                          .checksfield.position.link_text
                      }{" "}
                    </a>
                  </p>
                </CardTitle>
                <CardText>
                  <p className={speakerStyles.cardText}>
                    {
                      content.ui.classroom.guest_speakers.main_content.cards
                        .checksfield.presentation.text
                    }
                    <a
                      href={
                        content.ui.classroom.guest_speakers.main_content.cards
                          .checksfield.presentation.link
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      {
                        content.ui.classroom.guest_speakers.main_content.cards
                          .checksfield.presentation.topic
                      }{" "}
                    </a>
                  </p>
                </CardText>
              </CardBody>
              <CardFooter>
                <a
                  href={
                    content.ui.classroom.guest_speakers.main_content.cards
                      .checksfield.social.linkedin
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaLinkedin />{" "}
                </a>
                <a
                  href={
                    content.ui.classroom.guest_speakers.main_content.cards
                      .checksfield.social.twitter
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaTwitterSquare />{" "}
                </a>
              </CardFooter>
            </Card>
          </Col>
          {/* yulia ovchinnikova */}
          <Col sm="4">
            <Card body className={("shadow-sm", speakerStyles.cardSize)}>
              <CardHeader tag="h3">
                {
                  content.ui.classroom.guest_speakers.main_content.cards.yulia
                    .name
                }
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={Yulia}
                alt="Yulia Ovchinnikova"
                className={speakerStyles.imgSize}
              />
              <CardBody>
                <CardTitle>
                  <p className={speakerStyles.cardTitle}>
                    {
                      content.ui.classroom.guest_speakers.main_content.cards
                        .yulia.position.text
                    }
                    <a
                      href={
                        content.ui.classroom.guest_speakers.main_content.cards
                          .yulia.position.link
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      {
                        content.ui.classroom.guest_speakers.main_content.cards
                          .yulia.position.link_text
                      }{" "}
                    </a>
                  </p>
                </CardTitle>
                <CardText>
                  <p className={speakerStyles.cardText}>
                    {
                      content.ui.classroom.guest_speakers.main_content.cards
                        .yulia.presentation.text
                    }
                    <a
                      href={
                        content.ui.classroom.guest_speakers.main_content.cards
                          .yulia.presentation.link
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      {
                        content.ui.classroom.guest_speakers.main_content.cards
                          .yulia.presentation.topic
                      }{" "}
                    </a>
                  </p>
                </CardText>
              </CardBody>
              <CardFooter>
                <a
                  href={
                    content.ui.classroom.guest_speakers.main_content.cards.yulia
                      .social.linkedin
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaLinkedin />{" "}
                </a>
                <a
                  href={
                    content.ui.classroom.guest_speakers.main_content.cards.yulia
                      .social.twitter
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaTwitterSquare />{" "}
                </a>
                <a
                  href={
                    content.ui.classroom.guest_speakers.main_content.cards.yulia
                      .social.website
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaGlobe />{" "}
                </a>
                <a
                  href={
                    content.ui.classroom.guest_speakers.main_content.cards.yulia
                      .social.github
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaGithubSquare />{" "}
                </a>
              </CardFooter>
            </Card>
          </Col>
        </CardDeck>
      </Row>

      <Row className={speakerStyles.speakerCardRow}>
        <CardDeck>
          {/* linda kovacs */}
          <Col sm="4">
            <Card body className={("shadow-sm", speakerStyles.cardSize)}>
              <CardHeader tag="h3">
                {
                  content.ui.classroom.guest_speakers.main_content.cards.linda
                    .name
                }
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={Linda}
                alt="Linda Kovacs"
                className={speakerStyles.imgSize}
              />
              <CardBody>
                <CardTitle>
                  <p className={speakerStyles.cardTitle}>
                    {
                      content.ui.classroom.guest_speakers.main_content.cards
                        .linda.position.text
                    }
                    <a
                      href={
                        content.ui.classroom.guest_speakers.main_content.cards
                          .linda.position.link
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      {
                        content.ui.classroom.guest_speakers.main_content.cards
                          .linda.position.link_text
                      }{" "}
                    </a>
                  </p>
                </CardTitle>
                <CardText>
                  <p className={speakerStyles.cardText}>
                    {
                      content.ui.classroom.guest_speakers.main_content.cards
                        .linda.presentation.success.text
                    }
                    <a
                      href={
                        content.ui.classroom.guest_speakers.main_content.cards
                          .linda.presentation.success.link
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      {
                        content.ui.classroom.guest_speakers.main_content.cards
                          .linda.presentation.success.topic
                      }{" "}
                    </a>
                    <br />
                    {
                      content.ui.classroom.guest_speakers.main_content.cards
                        .linda.presentation.dream.text
                    }
                    <a
                      href={
                        content.ui.classroom.guest_speakers.main_content.cards
                          .linda.presentation.dream.link
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {
                        content.ui.classroom.guest_speakers.main_content.cards
                          .linda.presentation.dream.topic
                      }
                    </a>
                  </p>
                </CardText>
              </CardBody>
              <CardFooter>
                <a
                  href={
                    content.ui.classroom.guest_speakers.main_content.cards.linda
                      .social.email
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaEnvelopeSquare />{" "}
                </a>
                <a
                  href={
                    content.ui.classroom.guest_speakers.main_content.cards.linda
                      .social.linkedin
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaLinkedin />{" "}
                </a>
                <a
                  href={
                    content.ui.classroom.guest_speakers.main_content.cards.linda
                      .social.twitter
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaTwitterSquare />{" "}
                </a>
                <a
                  href={
                    content.ui.classroom.guest_speakers.main_content.cards.linda
                      .social.website
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaGlobe />{" "}
                </a>
                <a
                  href={
                    content.ui.classroom.guest_speakers.main_content.cards.linda
                      .social.github
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaGithubSquare />{" "}
                </a>
              </CardFooter>
            </Card>
          </Col>
          {/* pam puri */}
          <Col sm="4">
            <Card body className={("shadow-sm", speakerStyles.cardSize)}>
              <CardHeader tag="h3">
                {
                  content.ui.classroom.guest_speakers.main_content.cards.pam
                    .name
                }
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={Pam}
                alt="Pam Puri"
                className={speakerStyles.imgSize}
              />
              <CardBody>
                <CardTitle>
                  <p className={speakerStyles.cardTitle}>
                    {
                      content.ui.classroom.guest_speakers.main_content.cards.pam
                        .position.text
                    }
                    <a
                      href={
                        content.ui.classroom.guest_speakers.main_content.cards
                          .pam.position.link
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      {
                        content.ui.classroom.guest_speakers.main_content.cards
                          .pam.position.link_text
                      }{" "}
                    </a>
                  </p>
                </CardTitle>
                <CardText>
                  <p className={speakerStyles.cardText}>
                    {
                      content.ui.classroom.guest_speakers.main_content.cards.pam
                        .presentation.text
                    }
                    <a
                      href={
                        content.ui.classroom.guest_speakers.main_content.cards
                          .pam.presentation.link
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      {
                        content.ui.classroom.guest_speakers.main_content.cards
                          .pam.presentation.topic
                      }{" "}
                    </a>
                  </p>
                </CardText>
              </CardBody>
              <CardFooter>
                <a
                  href={
                    content.ui.classroom.guest_speakers.main_content.cards.pam
                      .social.email
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaEnvelopeSquare />{" "}
                </a>
                <a
                  href={
                    content.ui.classroom.guest_speakers.main_content.cards.pam
                      .social.linkedin
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaLinkedin />{" "}
                </a>
                <a
                  href={
                    content.ui.classroom.guest_speakers.main_content.cards.pam
                      .social.twitter
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaTwitterSquare />{" "}
                </a>
              </CardFooter>
            </Card>
          </Col>
          {/* charissa lawrence */}
          <Col sm="4">
            <Card body className={("shadow-sm", speakerStyles.cardSize)}>
              <CardHeader tag="h3">
                {
                  content.ui.classroom.guest_speakers.main_content.cards
                    .charissa.name
                }
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={Charissa}
                alt="Charissa Lawrence"
                className={speakerStyles.imgSize}
              />
              <CardBody>
                <CardTitle>
                  <p className={speakerStyles.cardTitle}>
                    {
                      content.ui.classroom.guest_speakers.main_content.cards
                        .charissa.position.text
                    }
                    <a
                      href={
                        content.ui.classroom.guest_speakers.main_content.cards
                          .charissa.position.link
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      {
                        content.ui.classroom.guest_speakers.main_content.cards
                          .charissa.position.link_text
                      }{" "}
                    </a>
                  </p>
                </CardTitle>
                <CardText>
                  <p className={speakerStyles.cardText}>
                    {
                      content.ui.classroom.guest_speakers.main_content.cards
                        .charissa.presentation.text
                    }
                    <a
                      href={
                        content.ui.classroom.guest_speakers.main_content.cards
                          .charissa.presentation.link
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      {
                        content.ui.classroom.guest_speakers.main_content.cards
                          .charissa.presentation.topic
                      }{" "}
                    </a>
                  </p>
                </CardText>
              </CardBody>
              <CardFooter>
                <a
                  href={
                    content.ui.classroom.guest_speakers.main_content.cards
                      .charissa.social.linkedin
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaLinkedin />{" "}
                </a>
                <a
                  href={
                    content.ui.classroom.guest_speakers.main_content.cards
                      .charissa.social.twitter
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaTwitterSquare />{" "}
                </a>
                <a
                  href={
                    content.ui.classroom.guest_speakers.main_content.cards
                      .charissa.social.github
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaGithubSquare />{" "}
                </a>
              </CardFooter>
            </Card>
          </Col>
        </CardDeck>
      </Row>

      <Row className={speakerStyles.speakerCardRow}>
        <CardDeck>
          {/* doug crescenzi */}
          <Col sm="4">
            <Card body className={("shadow-sm", speakerStyles.cardSize)}>
              <CardHeader tag="h3">
                {
                  content.ui.classroom.guest_speakers.main_content.cards.doug
                    .name
                }
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={Doug}
                alt="Doug Crescenzi"
                className={speakerStyles.imgSize}
              />
              <CardBody>
                <CardTitle>
                  <p className={speakerStyles.cardTitle}>
                    {
                      content.ui.classroom.guest_speakers.main_content.cards
                        .doug.position.text
                    }
                    <a
                      href={
                        content.ui.classroom.guest_speakers.main_content.cards
                          .doug.position.link
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      {
                        content.ui.classroom.guest_speakers.main_content.cards
                          .doug.position.link_text
                      }{" "}
                    </a>
                  </p>
                </CardTitle>
                <CardText>
                  <p className={speakerStyles.cardText}>
                    {
                      content.ui.classroom.guest_speakers.main_content.cards
                        .doug.presentation.text
                    }
                    <a
                      href={
                        content.ui.classroom.guest_speakers.main_content.cards
                          .doug.presentation.link
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      {
                        content.ui.classroom.guest_speakers.main_content.cards
                          .doug.presentation.topic
                      }{" "}
                    </a>
                  </p>
                </CardText>
              </CardBody>
              <CardFooter>
                <a
                  href={
                    content.ui.classroom.guest_speakers.main_content.cards.doug
                      .social.email
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaEnvelopeSquare />{" "}
                </a>
                <a
                  href={
                    content.ui.classroom.guest_speakers.main_content.cards.doug
                      .social.linkedin
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaLinkedin />{" "}
                </a>
                <a
                  href={
                    content.ui.classroom.guest_speakers.main_content.cards.doug
                      .social.twitter
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaTwitterSquare />{" "}
                </a>
                <a
                  href={
                    content.ui.classroom.guest_speakers.main_content.cards.doug
                      .social.github
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaGithubSquare />{" "}
                </a>
              </CardFooter>
            </Card>
          </Col>
          {/* raj suchak */}
          <Col sm="4">
            <Card body className={("shadow-sm", speakerStyles.cardSize)}>
              <CardHeader tag="h3">
                {
                  content.ui.classroom.guest_speakers.main_content.cards.raj
                    .name
                }
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={Raj}
                alt="Raj Suchak"
                className={speakerStyles.imgSize}
              />
              <CardBody>
                <CardTitle>
                  <p className={speakerStyles.cardTitle}>
                    {
                      content.ui.classroom.guest_speakers.main_content.cards.raj
                        .position.text
                    }
                    <a
                      href={
                        content.ui.classroom.guest_speakers.main_content.cards
                          .raj.position.link
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      {
                        content.ui.classroom.guest_speakers.main_content.cards
                          .raj.position.link_text
                      }{" "}
                    </a>
                  </p>
                </CardTitle>
                <CardText>
                  <p className={speakerStyles.cardText}>
                    {
                      content.ui.classroom.guest_speakers.main_content.cards.raj
                        .presentation.text
                    }
                    <a
                      href={
                        content.ui.classroom.guest_speakers.main_content.cards
                          .raj.presentation.link
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      {
                        content.ui.classroom.guest_speakers.main_content.cards
                          .raj.presentation.topic
                      }{" "}
                    </a>
                  </p>
                </CardText>
              </CardBody>
              <CardFooter>
                <a
                  href={
                    content.ui.classroom.guest_speakers.main_content.cards.raj
                      .social.email
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaEnvelopeSquare />{" "}
                </a>
                <a
                  href={
                    content.ui.classroom.guest_speakers.main_content.cards.raj
                      .social.linkedin
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaLinkedin />{" "}
                </a>
                <a
                  href={
                    content.ui.classroom.guest_speakers.main_content.cards.raj
                      .social.twitter
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaTwitterSquare />{" "}
                </a>
              </CardFooter>
            </Card>
          </Col>
          {/* andrew "doc" docherty */}
          <Col sm="4">
            <Card body className={("shadow-sm", speakerStyles.cardSize)}>
              <CardHeader tag="h3" className={speakerStyles.longNameStyles}>
                {
                  content.ui.classroom.guest_speakers.main_content.cards.doc
                    .name
                }
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={Doc}
                alt="Andrew Docherty"
                className={speakerStyles.imgSize}
              />
              <CardBody>
                <CardTitle>
                  <p className={speakerStyles.cardTitle}>
                    {
                      content.ui.classroom.guest_speakers.main_content.cards.doc
                        .position.text
                    }
                    <a
                      href={
                        content.ui.classroom.guest_speakers.main_content.cards
                          .doc.position.link
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      {
                        content.ui.classroom.guest_speakers.main_content.cards
                          .doc.position.link_text
                      }{" "}
                    </a>
                  </p>
                </CardTitle>
                <CardText>
                  <p className={speakerStyles.cardText}>
                    {
                      content.ui.classroom.guest_speakers.main_content.cards.doc
                        .presentation.text
                    }
                    <a
                      href={
                        content.ui.classroom.guest_speakers.main_content.cards
                          .doc.presentation.link
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      {
                        content.ui.classroom.guest_speakers.main_content.cards
                          .doc.presentation.topic
                      }{" "}
                    </a>
                  </p>
                </CardText>
              </CardBody>
              <CardFooter>
                <a
                  href={
                    content.ui.classroom.guest_speakers.main_content.cards.doc
                      .social.linkedin
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaLinkedin />{" "}
                </a>
              </CardFooter>
            </Card>
          </Col>
        </CardDeck>
      </Row>

      <Row className={speakerStyles.speakerCardRow}>
        <CardDeck>
          {/* josh creager */}
          <Col sm="4">
            <Card body className={("shadow-sm", speakerStyles.cardSize)}>
              <CardHeader tag="h3">
                {
                  content.ui.classroom.guest_speakers.main_content.cards.josh
                    .name
                }
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={Josh}
                alt="Josh Creager"
                className={speakerStyles.imgSize}
              />
              <CardBody>
                <CardTitle>
                  <p className={speakerStyles.cardTitle}>
                    {
                      content.ui.classroom.guest_speakers.main_content.cards
                        .josh.position.text
                    }
                    <a
                      href={
                        content.ui.classroom.guest_speakers.main_content.cards
                          .josh.position.link
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      {
                        content.ui.classroom.guest_speakers.main_content.cards
                          .josh.position.link_text
                      }{" "}
                    </a>
                  </p>
                </CardTitle>
                <CardText>
                  <p className={speakerStyles.cardText}>
                    {
                      content.ui.classroom.guest_speakers.main_content.cards
                        .josh.presentation.text
                    }
                    <a
                      href={
                        content.ui.classroom.guest_speakers.main_content.cards
                          .josh.presentation.link
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      {
                        content.ui.classroom.guest_speakers.main_content.cards
                          .josh.presentation.topic
                      }{" "}
                    </a>
                  </p>
                </CardText>
              </CardBody>
              <CardFooter>
                <a
                  href={
                    content.ui.classroom.guest_speakers.main_content.cards.josh
                      .social.linkedin
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaLinkedin />{" "}
                </a>
                <a
                  href={
                    content.ui.classroom.guest_speakers.main_content.cards.josh
                      .social.twitter
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaTwitterSquare />{" "}
                </a>
              </CardFooter>
            </Card>
          </Col>
          {/* seth mulligan */}
          <Col sm="4">
            <Card body className={("shadow-sm", speakerStyles.cardSize)}>
              <CardHeader tag="h3">
                {
                  content.ui.classroom.guest_speakers.main_content.cards.seth
                    .name
                }
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={Seth}
                alt="Seth Mulligan"
                className={speakerStyles.imgSize}
              />
              <CardBody>
                <CardTitle>
                  <p className={speakerStyles.cardTitle}>
                    {
                      content.ui.classroom.guest_speakers.main_content.cards
                        .seth.position.text
                    }
                    <a
                      href={
                        content.ui.classroom.guest_speakers.main_content.cards
                          .seth.position.link
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      {
                        content.ui.classroom.guest_speakers.main_content.cards
                          .seth.position.link_text
                      }{" "}
                    </a>
                  </p>
                </CardTitle>
                <CardText>
                  <p className={speakerStyles.cardText}>
                    {
                      content.ui.classroom.guest_speakers.main_content.cards
                        .seth.presentation.text
                    }
                    <a
                      href={
                        content.ui.classroom.guest_speakers.main_content.cards
                          .seth.presentation.link
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      {
                        content.ui.classroom.guest_speakers.main_content.cards
                          .seth.presentation.topic
                      }{" "}
                    </a>
                  </p>
                </CardText>
              </CardBody>
              <CardFooter>
                <a
                  href={
                    content.ui.classroom.guest_speakers.main_content.cards.seth
                      .social.email
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaEnvelopeSquare />{" "}
                </a>
                <a
                  href={
                    content.ui.classroom.guest_speakers.main_content.cards.seth
                      .social.linkedin
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaLinkedin />{" "}
                </a>
                <a
                  href={
                    content.ui.classroom.guest_speakers.main_content.cards.seth
                      .social.twitter
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaTwitterSquare />{" "}
                </a>
                <a
                  href={
                    content.ui.classroom.guest_speakers.main_content.cards.seth
                      .social.website
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaGlobe />{" "}
                </a>
              </CardFooter>
            </Card>
          </Col>
          {/* ben lannon */}
          <Col sm="4">
            <Card body className={("shadow-sm", speakerStyles.cardSize)}>
              <CardHeader tag="h3">
                {
                  content.ui.classroom.guest_speakers.main_content.cards.ben
                    .name
                }
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={Ben}
                alt="Ben Lannon"
                className={speakerStyles.imgSize}
              />
              <CardBody>
                <CardTitle>
                  <p className={speakerStyles.cardTitle}>
                    {
                      content.ui.classroom.guest_speakers.main_content.cards.ben
                        .position.text
                    }
                    <a
                      href={
                        content.ui.classroom.guest_speakers.main_content.cards
                          .ben.position.link
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      {
                        content.ui.classroom.guest_speakers.main_content.cards
                          .ben.position.link_text
                      }{" "}
                    </a>
                  </p>
                </CardTitle>
                <CardText>
                  <p className={speakerStyles.cardText}>
                    {
                      content.ui.classroom.guest_speakers.main_content.cards.ben
                        .presentation.text
                    }
                    <a
                      href={
                        content.ui.classroom.guest_speakers.main_content.cards
                          .ben.presentation.link
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      {
                        content.ui.classroom.guest_speakers.main_content.cards
                          .ben.presentation.topic
                      }{" "}
                    </a>
                  </p>
                </CardText>
              </CardBody>
              <CardFooter>
                <a
                  href={
                    content.ui.classroom.guest_speakers.main_content.cards.ben
                      .social.email
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaEnvelopeSquare />{" "}
                </a>
                <a
                  href={
                    content.ui.classroom.guest_speakers.main_content.cards.ben
                      .social.linkedin
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaLinkedin />{" "}
                </a>
                <a
                  href={
                    content.ui.classroom.guest_speakers.main_content.cards.ben
                      .social.twitter
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaTwitterSquare />{" "}
                </a>
                <a
                  href={
                    content.ui.classroom.guest_speakers.main_content.cards.ben
                      .social.website
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaGlobe />{" "}
                </a>
                <a
                  href={
                    content.ui.classroom.guest_speakers.main_content.cards.ben
                      .social.github
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaGithubSquare />{" "}
                </a>
              </CardFooter>
            </Card>
          </Col>
        </CardDeck>
      </Row>

      <Row className={speakerStyles.speakerCardRow}>
        <CardDeck>
          {/* glenn allen */}
          <Col sm="6">
            <Card body className={("shadow-sm", speakerStyles.cardSize)}>
              <CardHeader tag="h3">
                {
                  content.ui.classroom.guest_speakers.main_content.cards.glenn
                    .name
                }
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={Glenn}
                alt="Glenn Allen"
                className={speakerStyles.imgSize}
              />
              <CardBody>
                <CardTitle>
                  <p className={speakerStyles.cardTitle}>
                    {
                      content.ui.classroom.guest_speakers.main_content.cards
                        .glenn.position.text
                    }
                    <a
                      href={
                        content.ui.classroom.guest_speakers.main_content.cards
                          .glenn.position.link
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      {
                        content.ui.classroom.guest_speakers.main_content.cards
                          .glenn.position.link_text
                      }{" "}
                    </a>
                  </p>
                </CardTitle>
                <CardText>
                  <p className={speakerStyles.cardText}>
                    {
                      content.ui.classroom.guest_speakers.main_content.cards
                        .glenn.presentation.text
                    }
                    <a
                      href={
                        content.ui.classroom.guest_speakers.main_content.cards
                          .glenn.presentation.link
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      {
                        content.ui.classroom.guest_speakers.main_content.cards
                          .glenn.presentation.topic
                      }{" "}
                    </a>
                  </p>
                </CardText>
              </CardBody>
              <CardFooter>
                <a
                  href={
                    content.ui.classroom.guest_speakers.main_content.cards.glenn
                      .social.email
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaEnvelopeSquare />{" "}
                </a>
                <a
                  href={
                    content.ui.classroom.guest_speakers.main_content.cards.glenn
                      .social.linkedin
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaLinkedin />{" "}
                </a>
                <a
                  href={
                    content.ui.classroom.guest_speakers.main_content.cards.glenn
                      .social.twitter
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaTwitterSquare />{" "}
                </a>
                <a
                  href={
                    content.ui.classroom.guest_speakers.main_content.cards.glenn
                      .social.website
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaGlobe />{" "}
                </a>
                <a
                  href={
                    content.ui.classroom.guest_speakers.main_content.cards.glenn
                      .social.github
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaGithubSquare />{" "}
                </a>
              </CardFooter>
            </Card>
          </Col>
          {/* indaria jones */}
          <Col sm="6">
            <Card body className={("shadow-sm", speakerStyles.cardSize)}>
              <CardHeader tag="h3">
                {
                  content.ui.classroom.guest_speakers.main_content.cards.indaria
                    .name
                }
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={Indaria}
                alt="Indaria Jones"
                className={speakerStyles.imgSize}
              />
              <CardBody>
                <CardTitle>
                  <p className={speakerStyles.cardTitle}>
                    {
                      content.ui.classroom.guest_speakers.main_content.cards
                        .indaria.position.text
                    }
                    <a
                      href={
                        content.ui.classroom.guest_speakers.main_content.cards
                          .indaria.position.link
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      {
                        content.ui.classroom.guest_speakers.main_content.cards
                          .indaria.position.link_text
                      }{" "}
                    </a>
                  </p>
                </CardTitle>
                <CardText>
                  <p className={speakerStyles.cardText}>
                    {
                      content.ui.classroom.guest_speakers.main_content.cards
                        .indaria.presentation.text
                    }
                    <a
                      href={
                        content.ui.classroom.guest_speakers.main_content.cards
                          .indaria.presentation.link
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      {
                        content.ui.classroom.guest_speakers.main_content.cards
                          .indaria.presentation.topic
                      }{" "}
                    </a>
                  </p>
                </CardText>
              </CardBody>
              <CardFooter>
                <a
                  href={
                    content.ui.classroom.guest_speakers.main_content.cards
                      .indaria.social.email
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaEnvelopeSquare />{" "}
                </a>
                <a
                  href={
                    content.ui.classroom.guest_speakers.main_content.cards
                      .indaria.social.linkedin
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaLinkedin />{" "}
                </a>
                <a
                  href={
                    content.ui.classroom.guest_speakers.main_content.cards
                      .indaria.social.twitter
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaTwitterSquare />{" "}
                </a>
                <a
                  href={
                    content.ui.classroom.guest_speakers.main_content.cards
                      .indaria.social.website
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaGlobe />{" "}
                </a>
              </CardFooter>
            </Card>
          </Col>
        </CardDeck>
      </Row>
    </Container>
  </Layout>
);

export default Speakers;
