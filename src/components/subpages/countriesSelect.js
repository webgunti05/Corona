import React from "react";
import CountryWideData from "../subpages/countrywidedata";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";

const CountriesSelect = ({
  effectCountrys,
  changeCountry,
  getDataCOuntry,
  clr,
}) => {
  let totalEffectCountries = [];
  totalEffectCountries = effectCountrys.affected_countries;

  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col xs={12}>
            <Form
              style={{
                margin: "20px",
                maxWidth: "300px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <FormGroup>
                <Input
                  type="select"
                  name="select"
                  id="exampleSelect"
                  onChange={(e) => changeCountry(e.target.value)}
                >
                  <option value="">Select Country</option>
                  {totalEffectCountries &&
                    totalEffectCountries
                      .filter((country) => country !== "")
                      .sort((a, b) => {
                        if (a < b) return -1;
                        if (a > b) return 1;
                        return 0;
                      })
                      .map((country) => (
                        <option key={country} value={country}>
                          {country}
                        </option>
                      ))}
                </Input>
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </Container>
      <CountryWideData getDataCOuntry={getDataCOuntry} clr={clr} />
    </React.Fragment>
  );
};

export default CountriesSelect;
