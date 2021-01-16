import React from "react";
import { Accordion, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./Profiles.css";

const Profiles = ({profiles}) =>{
        return (
          <div className="profiles">
            {profiles.map((profile) =>
                <div className="profiles__card" key={profile.CreditCardNumber}>
                    <Accordion>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="1">
                                <div className="profiles__personalInfo">
                                  <h2 className="profiles__title">PROFILE DETAILS</h2>
                                  <p className="profiles__personal">
                                    <strong>Full Name:</strong> {profile.FirstName} {profile.LastName}
                                  </p>
                                  <p className="profiles__personal">
                                    <strong>Username:</strong> {profile.UserName}
                                  </p>
                                  <p className="profiles__personal">
                                    <strong>E-mail Address:</strong> {profile.Email}
                                  </p>

                                  <p className="profiles__personal">
                                    <strong>Gender:</strong> {profile.Gender}
                                  </p>
                                  <p className="profiles__personal">
                                    <strong>Phone:</strong> {profile.PhoneNumber}
                                  </p>
                                </div>
                            </Accordion.Toggle>
                            
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>
                                  <div className="profiles__paymentInfo">   
                                    <p className="profiles__location">
                                      <strong>Lat/Long:</strong> {profile.Latitude} /{" "}
                                      {profile.Longitude}
                                    </p>
                                    <p className="profiles__paymentCard">
                                      <strong>Card Number:</strong> {profile.CreditCardNumber}
                                    </p>
                                    <p className="profiles__payment">
                                      <strong>Credit Card Type:</strong> {profile.CreditCardType}
                                    </p>
                                    <p className="profiles__payment">
                                      <strong>Payment Method:</strong> {profile.PaymentMethod}
                                    </p>
                                    <p className="profiles__domain">
                                      <strong>Domain Information:</strong> {profile.DomainName}
                                      {profile.URL}
                                    </p>
                                    <p className="profiles__login">
                                      <strong>Last Login: </strong>
                                      {profile.LastLogin}
                                    </p>
                                    <p className="profiles__macaddress"><strong>Mac-Address:</strong> {profile.MacAddress}</p>
                                  </div>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
              </div>
              )}
            </div>
        );
    }


export default Profiles;
