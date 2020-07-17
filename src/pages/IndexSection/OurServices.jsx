import React from "react";
import { Col, Container, Row } from "reactstrap";
import Zoom from "react-reveal/Zoom";
import { red } from "@material-ui/core/colors";

const OurServices = ({ setRef }) => {
  const { innerWidth: windowScreen } = window;
  const whiteFilter = "brightness(0) invert(1)";
  const semiWhiteFilter = "brightness(0.3)";
  const [reactFilter, setReactFilter] = React.useState(whiteFilter);
  const [dockerFilter, setDockerFilter] = React.useState(whiteFilter);
  const [redisFilter, setRedisFilter] = React.useState(whiteFilter);
  const [nodejsFilter, setNodejsFilter] = React.useState(whiteFilter);
  const [mongoDBFilter, setMongoDBFilter] = React.useState(whiteFilter);
  const [PSDFilter, setPSDFilter] = React.useState(semiWhiteFilter);
  const [illustratorFilter, setIllustratorFilter] = React.useState(
    semiWhiteFilter
  );
  const [XDFilter, setXDFilter] = React.useState(semiWhiteFilter);
  const [cinemaFilter, setCinemaFilter] = React.useState(semiWhiteFilter);

  return (
    <div
      className="section section-basic"
      ref={setRef}
      style={{
        backgroundImage:
          "url(https://awv3node-homepage.surge.sh/build/assets/stars.svg)",
      }}
      aria-valuetext="Our Services"
    >
      <Container>
        <Row>
          <Col className="ml-auto mr-auto" md="12">
            <h1 className="title">
              <Zoom left cascade>
                Our
              </Zoom>
              <strong className="text-success">
                <Zoom right cascade>
                  Services
                </Zoom>
              </strong>
            </h1>
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <h3 className="rez-text text-success fs-50 text-center">
              <div>web</div>
              <div style={{ marginTop: "-25px" }}>development</div>
            </h3>
            <p className="text-center fs-15">
              A website is the online representation of your company! Doing it
              well can take your business to the next level. We create awesome
              and easy to navigate websites. Modern and responsive for all kind
              of devices.
            </p>
            <p className="text-center fs-15">
              If each company has its own essence, why should your site be
              similar to another?
            </p>
            <p className="text-center fs-15">
              We create specialized designs for each client, seeking to take
              their image to another level.
            </p>
            <div className="our-clients mt-5 mb-5 mb-md-0">
              <Container>
                <Row>
                  <Col className="ml-auto zIndex2" xs="4">
                    <img
                      alt="..."
                      src={require("assets/img/react.png")}
                      onMouseOver={() => setReactFilter("none")}
                      onMouseOut={() => setReactFilter(whiteFilter)}
                      style={{
                        cursor: "pointer",
                        filter: reactFilter,
                      }}
                    />
                  </Col>
                  <Col className="zIndex2" xs="4">
                    <img
                      alt="..."
                      src={require("assets/img/docker.png")}
                      onMouseOver={() => setDockerFilter("none")}
                      onMouseOut={() => setDockerFilter(whiteFilter)}
                      style={{
                        cursor: "pointer",
                        filter: dockerFilter,
                      }}
                    />
                  </Col>
                  <Col className="zIndex2" xs="4">
                    <img
                      alt="..."
                      src={require("assets/img/redis.png")}
                      onMouseOver={() => setRedisFilter("none")}
                      onMouseOut={() => setRedisFilter(whiteFilter)}
                      style={{
                        cursor: "pointer",
                        filter: redisFilter,
                      }}
                    />
                  </Col>
                  <Col xs="2" />
                  <Col className="zIndex2" xs="4" className="mt-5">
                    <img
                      alt="..."
                      src={require("assets/img/nodejs.png")}
                      onMouseOver={() => setNodejsFilter("none")}
                      onMouseOut={() => setNodejsFilter(whiteFilter)}
                      style={{
                        cursor: "pointer",
                        filter: nodejsFilter,
                      }}
                    />
                  </Col>
                  <Col className="zIndex2" xs="4" className="mt-5">
                    <img
                      alt="..."
                      src={require("assets/img/mongodb.png")}
                      onMouseOver={() => setMongoDBFilter("none")}
                      onMouseOut={() => setMongoDBFilter(whiteFilter)}
                      style={{
                        cursor: "pointer",
                        filter: mongoDBFilter,
                      }}
                    />
                  </Col>
                </Row>
              </Container>
            </div>
          </Col>
          <Col md="6" className="middle-align">
            <div
              className="image-container"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <img
                alt="..."
                src={require("assets/img/ipad-phone.png")}
                style={{ width: "75%" }}
              />
            </div>
          </Col>
        </Row>
        <div style={{ position: "absolute", top: "30%" }}>
          <img
            alt="..."
            src="https://awv3node-homepage.surge.sh/build/assets/cloud.svg"
            style={{ opacity: 0.05, width: "60%" }}
          />
        </div>
        <div style={{ position: "absolute", bottom: "10%", left: "40%" }}>
          <img
            alt="..."
            src="https://awv3node-homepage.surge.sh/build/assets/cloud.svg"
            style={{ opacity: 0.05, width: "30%" }}
          />
        </div>
        <div style={{ position: "absolute", right: "10%" }}>
          <img
            alt="..."
            src="https://awv3node-homepage.surge.sh/build/assets/cloud.svg"
            style={{ opacity: 0.05 }}
          />
        </div>
        {windowScreen >= 768 ? (
          <Row className="mt-5">
            <Col md="4" className="middle-align">
              <div className="image-container">
                <img
                  alt="..."
                  src={require("assets/img/branding-image.png")}
                  style={{ maxHeight: "40vh" }}
                />
              </div>
            </Col>
            <Col md="8">
              <h3 className="rez-text text-success fs-50 text-center">
                branding
              </h3>
              <p className="text-center fs-15">
                We design the corporate identity of your brand to reflect its
                value and build the perception of your customers. We plan and
                execute branding strategies to create solid, memorable brands
                and take your company to another level!
              </p>
              <div className="our-clients mt-5 mb-5 mb-md-0">
                <Container>
                  <Row>
                    <Col className="ml-auto zIndex2" xs="3">
                      <img
                        alt="..."
                        src={require("assets/img/psd.png")}
                        onMouseOver={() => setPSDFilter("none")}
                        onMouseOut={() => setPSDFilter(semiWhiteFilter)}
                        style={{
                          cursor: "pointer",
                          filter: PSDFilter,
                        }}
                      />
                    </Col>
                    <Col className="zIndex2" xs="3">
                      <img
                        alt="..."
                        src={require("assets/img/illustrator.png")}
                        onMouseOver={() => setIllustratorFilter("none")}
                        onMouseOut={() => setIllustratorFilter(semiWhiteFilter)}
                        style={{
                          cursor: "pointer",
                          filter: illustratorFilter,
                        }}
                      />
                    </Col>
                    <Col xs="3">
                      <img
                        alt="..."
                        src={require("assets/img/xd.png")}
                        onMouseOver={() => setXDFilter("none")}
                        onMouseOut={() => setXDFilter(semiWhiteFilter)}
                        style={{
                          cursor: "pointer",
                          filter: XDFilter,
                        }}
                      />
                    </Col>
                    <Col xs="3">
                      <img
                        alt="..."
                        src={require("assets/img/cinema.png")}
                        onMouseOver={() => setCinemaFilter("none")}
                        onMouseOut={() => setCinemaFilter(semiWhiteFilter)}
                        style={{
                          cursor: "pointer",
                          filter: cinemaFilter,
                        }}
                      />
                    </Col>
                  </Row>
                </Container>
              </div>
            </Col>
          </Row>
        ) : (
          <Row>
            <Col md="8">
              <h3 className="rez-text text-success fs-50 text-center">
                branding
              </h3>
              <p className="text-center fs-15">
                We design the corporate identity of your brand to reflect its
                value and build the perception of your customers. We plan and
                execute branding strategies to create solid, memorable brands
                and take your company to another level!
              </p>
              <div className="our-clients mt-5 mb-5 mb-md-0">
                <Container>
                  <Row>
                    <Col className="ml-auto zIndex2" xs="3">
                      <img
                        alt="..."
                        src={require("assets/img/psd.png")}
                        onMouseOver={() => setPSDFilter("none")}
                        onMouseOut={() => setPSDFilter(semiWhiteFilter)}
                        style={{
                          cursor: "pointer",
                          filter: PSDFilter,
                        }}
                      />
                    </Col>
                    <Col className="zIndex2" xs="3">
                      <img
                        alt="..."
                        src={require("assets/img/illustrator.png")}
                        onMouseOver={() => setIllustratorFilter("none")}
                        onMouseOut={() => setIllustratorFilter(semiWhiteFilter)}
                        style={{
                          cursor: "pointer",
                          filter: illustratorFilter,
                        }}
                      />
                    </Col>
                    <Col xs="3">
                      <img
                        alt="..."
                        src={require("assets/img/xd.png")}
                        onMouseOver={() => setXDFilter("none")}
                        onMouseOut={() => setXDFilter(semiWhiteFilter)}
                        style={{
                          cursor: "pointer",
                          filter: XDFilter,
                        }}
                      />
                    </Col>
                    <Col xs="3">
                      <img
                        alt="..."
                        src={require("assets/img/cinema.png")}
                        onMouseOver={() => setCinemaFilter("none")}
                        onMouseOut={() => setCinemaFilter(semiWhiteFilter)}
                        style={{
                          cursor: "pointer",
                          filter: cinemaFilter,
                        }}
                      />
                    </Col>
                  </Row>
                </Container>
              </div>
            </Col>
            <Col md="4" className="middle-align">
              <div className="image-container">
                <img
                  alt="..."
                  src={require("assets/img/branding-image.png")}
                  style={{ maxHeight: "40vh" }}
                />
              </div>
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
};

export default OurServices;
