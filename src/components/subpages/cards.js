import React from "react";

import { Container, Row, Col, Card, CardTitle, CardText } from "reactstrap";

const Cards = ({ totalInfo, getDataCOuntry, bgColor, blk, grn, red }) => {
  const cData = getDataCOuntry.latest_stat_by_country;

  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col xs="12" sm="6" md="3" style={{ marginBottom: "10px" }}>
            <Card body inverse style={{ backgroundColor: `${bgColor}` }}>
              <CardTitle>
                <h5>Total Cases</h5>
              </CardTitle>
              {cData && cData[0].total_cases === "" && (
                <span style={{ fontWeight: "bold" }}>0</span>
              )}
              <CardText style={{ fontWeight: "bold" }}>
                {cData ? cData[0].total_cases : totalInfo.total_cases}
              </CardText>
            </Card>
          </Col>

          <Col xs="12" sm="6" md="3" style={{ marginBottom: "10px" }}>
            <Card body inverse style={{ backgroundColor: `${blk}` }}>
              <CardTitle>
                <h5>Total Deaths</h5>
              </CardTitle>
              {cData && cData[0].total_deaths === "" && (
                <span style={{ fontWeight: "bold" }}>0</span>
              )}
              <CardText style={{ fontWeight: "bold" }}>
                {cData ? cData[0].total_deaths : totalInfo.total_deaths}
              </CardText>
            </Card>
          </Col>

          <Col xs="12" sm="6" md="3" style={{ marginBottom: "10px" }}>
            <Card body inverse style={{ backgroundColor: `${grn}` }}>
              <CardTitle>
                <h5>Total Recovered</h5>
              </CardTitle>
              {cData && cData[0].total_recovered === "" && (
                <span style={{ fontWeight: "bold" }}>0</span>
              )}
              <CardText style={{ fontWeight: "bold" }}>
                {cData ? cData[0].total_recovered : totalInfo.total_recovered}
              </CardText>
            </Card>
          </Col>

          <Col xs="12" sm="6" md="3" style={{ marginBottom: "10px" }}>
            <Card body inverse style={{ backgroundColor: `${red}` }}>
              <CardTitle>
                <h5>Acive Cases</h5>
              </CardTitle>
              {cData && cData[0].active_cases === "" && (
                <span style={{ fontWeight: "bold" }}>0</span>
              )}
              <CardText style={{ fontWeight: "bold" }}>
                {cData ? cData[0].active_cases : totalInfo.active_cases}
              </CardText>
            </Card>
          </Col>
        </Row>
        <hr />
        <Row>
          <h5 style={{ fontWeight: "bold", marginLeft: "15px" }}>
            New Deaths : {cData && cData[0].new_deaths === "" && <span>0</span>}
            <span style={{ color: "red" }}>
              {cData ? cData[0].new_deaths : totalInfo.new_deaths}
            </span>
          </h5>
          <h5 style={{ fontWeight: "bold", marginLeft: "15px" }}>
            Serious Critical:
            {cData && cData[0].serious_critical === "" && <span>0</span>}
            <span style={{ color: "red" }}>
              {cData ? cData[0].serious_critical : totalInfo.serious_critical}
            </span>
          </h5>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Cards;
