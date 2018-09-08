import React, { Component } from 'react';
import PageHeader from "react-bootstrap/es/PageHeader";
import PanelGroup from "react-bootstrap/es/PanelGroup";
import Panel from "react-bootstrap/es/Panel";
import Grid from "react-bootstrap/es/Grid";
import Row from "react-bootstrap/es/Row";
import Col from "react-bootstrap/es/Col";
import casting from "./images/casting.png";
import allies from "./images/allies.png";

class Future extends Component {
  render() {
    return (
      <div>
          <PageHeader>
              The Future of the Game <small>A Glimpse of What's to Come</small>
          </PageHeader>
          <PanelGroup accordion  defaultActiveKey="1" id="future-accordion">
              <Panel eventKey="1">
                  <Panel.Heading>
                      <Panel.Title toggle>Potions, etc.</Panel.Title>
                  </Panel.Heading>
                  <Panel.Body collapsible>
                      <Grid>
                          <Row>
                              <Col xs={12} md={6}>
                                  <h2>Potions, etc.</h2>
                                  <p>In a future set, we plan on introducing potion making into the game. You will have potion cards (items) that will incorporate into the existing decks, and a special deck for potion ingredients. The new character type of potions master will have special abilities to draw from that ingredient deck, allowing you to brew new potions that you can't always carry with you.</p>
                                  <p>There will also be other new items added as well, such as brewing stands and cauldrons, which will give potion masters certain bonuses while brewing.</p>
                                  <div className="horiz"></div>
                                  <p>There may be other additions to the basic format over time as well, and if you have any suggestions, we'd love to hear them!</p>
                              </Col>
                              <Col xs={12} md={6}>
                                  <img src={casting} title="Victory" alt="Victory" />
                              </Col>
                          </Row>
                      </Grid>
                  </Panel.Body>
              </Panel>
              <Panel eventKey="2">
                  <Panel.Heading>
                      <Panel.Title toggle>Alternative Formats</Panel.Title>
                  </Panel.Heading>
                  <Panel.Body collapsible>
                      <Grid>
                          <Row>
                              <Col xs={12} md={6}>
                                  <h2>Alternative Formats</h2>
                                  <p>This page is about the basic format. There will most certainly be other formats released that can be played with these same cards. Some of them will introduce new pieces as well, such as game boards, and others will simply be new ways to use the cards that are collected.</p>
                                  <p>We have several formats in the works already, but if you have an idea, we'd love to hear it! Check out our "Other Format" page to see what we're working on!</p>
                              </Col>
                              <Col xs={12} md={6}>
                                  <img src={allies} title="Characters" alt="Characters" />
                              </Col>
                          </Row>
                      </Grid>
                  </Panel.Body>
              </Panel>
          </PanelGroup>
      </div>
    );
  }
}

export default Future;
