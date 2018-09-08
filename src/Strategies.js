import React, { Component } from 'react';
import PageHeader from "react-bootstrap/es/PageHeader";
import PanelGroup from "react-bootstrap/es/PanelGroup";
import Panel from "react-bootstrap/es/Panel";
import Grid from "react-bootstrap/es/Grid";
import Row from "react-bootstrap/es/Row";
import Col from "react-bootstrap/es/Col";
import casting from "./images/casting.png";
import allies from "./images/allies.png";
import combat from "./images/combat.png";
import angel from "./images/angel.png";

class Strategies extends Component {
  render() {
    return (
      <div>
          <PageHeader>
              Strategy <small>Five Basic Strategies for Winning the Game</small>
          </PageHeader>
          <PanelGroup accordion  defaultActiveKey="1" id="users-accordion">
              <Panel eventKey="1">
                  <Panel.Heading>
                      <Panel.Title toggle>Overview</Panel.Title>
                  </Panel.Heading>
                  <Panel.Body collapsible>
                      <Grid>
                          <Row>
                              <Col xs={12} md={6}>
                                  <h2>Overview</h2>
                                  <p>There are many possible strategies for winning, and we're sure we haven't thought of all of them. However, we've done our best to come up with the five most common and most versatile strategies that may be applied in the basic format.</p>
                                  <p>Listed below are the five basic strategies that we've come up with, as well as a brief description of how that particular strategy would play out and be used. This is not a comprehensive list, so feel free to improvise beyond the strategies listed here.</p>
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
                      <Panel.Title toggle>Numbers</Panel.Title>
                  </Panel.Heading>
                  <Panel.Body collapsible>
                      <Grid>
                          <Row>
                              <Col xs={12} md={6}>
                                  <h2>Numbers</h2>
                                  <p>The numbers strategy is simple. Bring into battle as many characters as possible, overwhelming the opponent with an unrelenting horde of characters. The opponent cannot attack all of them at once, and it takes too long to pick them off one at a time.</p>
                                  <p>You win, simply because you have too many enemies for your opponent to face alone, and therefore you will almost certainly hae the last character standing.</p>
                              </Col>
                              <Col xs={12} md={6}>
                                  <img src={allies} title="Characters" alt="Characters" />
                              </Col>
                          </Row>
                      </Grid>
                  </Panel.Body>
              </Panel>
              <Panel eventKey="3">
                  <Panel.Heading>
                      <Panel.Title toggle>Power</Panel.Title>
                  </Panel.Heading>
                  <Panel.Body collapsible>
                      <Grid>
                          <Row>
                              <Col xs={12} md={6}>
                                  <h2>Power</h2>
                                  <p>The power strategy is all about playing ultra-powerful characters. It doesn't matter as much how many you have in play, because the ones you do have are unbeatable.</p>
                                  <p>Your one or two characters can easily withstand the opponents five or ten characters, ending the battle in your favor.</p>
                              </Col>
                              <Col xs={12} md={6}>
                                  <img src={angel} title="Winning" alt="Winning" />
                              </Col>
                          </Row>
                      </Grid>
                  </Panel.Body>
              </Panel>
              <Panel eventKey="4">
                  <Panel.Heading>
                      <Panel.Title toggle>Control</Panel.Title>
                  </Panel.Heading>
                  <Panel.Body collapsible>
                      <Grid>
                          <Row>
                              <Col xs={12} md={6}>
                                  <h2>Control</h2>
                                  <p>Control is a somewhat unique strategy in that it's not so much about what you play, but about what your opponents play. This strategy is all about controlling the overall game, keeping the end goal in mind.</p>
                                  <p>You will manipulate what the other players can or cannot play, changing the rules and circumstances to fit your own needs, while hindering the plans of those around you.</p>
                                  <p>To win with a control strategy, you make it difficult to play characters, and hinder the characters that are played.</p>
                              </Col>
                              <Col xs={12} md={6}>
                                  <img src={combat} title="Winning" alt="Winning" />
                              </Col>
                          </Row>
                      </Grid>
                  </Panel.Body>
              </Panel>
              <Panel eventKey="5">
                  <Panel.Heading>
                      <Panel.Title toggle>Recycling</Panel.Title>
                  </Panel.Heading>
                  <Panel.Body collapsible>
                      <Grid>
                          <Row>
                              <Col xs={12} md={6}>
                                  <h2>Recycling</h2>
                                  <p>Recycling is exactly as it sounds, with you re-using the cards that have been played. This strategy makes good use of the discard piles and graveyards of those playing, bringing characters back from the dead and revisiting spells that have been cast.</p>
                                  <p>This strategy can been by having a neverending supply of good quality spells and characters, some of which belonged to your opponents at some point. It's hard to stand against your own favorite card, after all.</p>
                              </Col>
                              <Col xs={12} md={6}>
                                  <img src={allies} title="Winning" alt="Winning" />
                              </Col>
                          </Row>
                      </Grid>
                  </Panel.Body>
              </Panel>
              <Panel eventKey="6">
                  <Panel.Heading>
                      <Panel.Title toggle>Speed</Panel.Title>
                  </Panel.Heading>
                  <Panel.Body collapsible>
                      <Grid>
                          <Row>
                              <Col xs={12} md={6}>
                                  <h2>Speed</h2>
                                  <p>The speed strategy is about building up your forces and ending the game, as quickly as possible. You will find such things as resource ramping, direct damage spells, and other things to speed up the game and bring it to a close as soon as possible.</p>
                                  <p>This strategy can win by defeating the other players before they have a chance to set up their own strategies, preempting whatever they had planned.</p>
                              </Col>
                              <Col xs={12} md={6}>
                                  <img src={casting} title="Victory" alt="Victory" />
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

export default Strategies;
