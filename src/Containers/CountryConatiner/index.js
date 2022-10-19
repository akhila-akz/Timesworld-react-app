import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { Image, Row, Col } from "react-bootstrap";

import Card from "react-bootstrap/Card";

import Actions from "./action";

const CountryData = (props) => {
  useEffect(() => {
    props.fetchCountryData();
  }, []);

  return (
    <div className="cont-otr">
      <h1>Countries</h1>
      <div className="cont-inr">
        {props &&
          props.counrtyDataList.map((item, i) => {
            return (
              <Card style={{ width: "60rem" }} className="cardItem">
                <Card.Body>
                  <Row>
                    <Col lg={3} md={12} sm={12} xs={12}>
                      <Image src={item.flag} className="flags" />
                    </Col>
                    <Col lg={9} md={12} sm={12} xs={12}>
                      <h3>{item.name}</h3>
                      <p>{item.region}</p>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            );
          })}
      </div>
      <div className="icons">
        <i className="bi-google "></i>
        <span>
          <i className="bi-facebook " />
        </span>
        <span>
          <i className="bi-linkedin " />
        </span>
        <span>
          <i className="bi-twitter " />
        </span>
      </div>
      <div>
        <p style={{ textAlign: "center" }}>example@email.com</p>
        <p style={{ textAlign: "center" }}>
          Copyright © 2020 Name. All rights reserved.
        </p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { countryReducer } = state;
  return {
    ...countryReducer,
  };
};
export default connect(mapStateToProps, { ...Actions })(CountryData);
