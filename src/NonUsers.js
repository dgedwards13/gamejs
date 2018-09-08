import React, { Component } from 'react';
import PageHeader from "react-bootstrap/es/PageHeader";
import PanelGroup from "react-bootstrap/es/PanelGroup";
import Panel from "react-bootstrap/es/Panel";
import Grid from "react-bootstrap/es/Grid";
import Row from "react-bootstrap/es/Row";
import Col from "react-bootstrap/es/Col";
import block from "./images/block.png";
import allies from "./images/allies.png";
import combat from "./images/combat.png";

class NonUsers extends Component {
  render() {
    return (
      <div>
          <PageHeader>
              Types of Non-Magic Users <small>An Introduction to the Many Types of Non-magical Combat</small>
          </PageHeader>
          <PanelGroup accordion  defaultActiveKey="1" id="nomaj-accordion">
              <Panel eventKey="1">
                  <Panel.Heading>
                      <Panel.Title toggle>Warriors</Panel.Title>
                  </Panel.Heading>
                  <Panel.Body collapsible>
                      <Grid>
                          <Row>
                              <Col xs={12} md={6}>
                                  <h2>Warriors</h2>
                                  <p>A warrior is an all around fighter. These don't always specialize in the same weapon, nor do they typically specialize in general. They are adept at fighting with most any weapon they pick up.</p>
                                  <p>This is the only non-magic character type who can pick up any non-magic weapon, regardless of type, and fight equally well with no limitations.</p>
                              </Col>
                              <Col xs={12} md={6}>
                                  <img src={block} title="Victory" alt="Victory" />
                              </Col>
                          </Row>
                      </Grid>
                  </Panel.Body>
              </Panel>
              <Panel eventKey="2">
                  <Panel.Heading>
                      <Panel.Title toggle>Rangers</Panel.Title>
                  </Panel.Heading>
                  <Panel.Body collapsible>
                      <Grid>
                          <Row>
                              <Col xs={12} md={6}>
                                  <h2>Rangers</h2>
                                  <p>A ranger specializes in bows & arrows, but they'll typically have a smaller secondary weapon, for closer range fights. Their strength, however, will always be with their bow.</p>
                                  <p>They can use their action in the turn to attack characters at a distance, without getting locked in combat. You'll get the most use out of them if you never let them get locked into combat, by using other characters to block for them.</p>
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
                      <Panel.Title toggle>Berserkers</Panel.Title>
                  </Panel.Heading>
                  <Panel.Body collapsible>
                      <Grid>
                          <Row>
                              <Col xs={12} md={6}>
                                  <h2>Berserkers</h2>
                                  <p>A berserker is solely focused on offense, and has no thought for defense. Their attacks tend to get more powerful the lower their health gets.</p>
                                  <p>They typically wield larger weapons, and don't carry shields. The "beserk" state needs to be triggered, typically by damage being dealt to themselves.</p>
                                  <p>In gameplay, they enter the battlefield as a regular warrior, with no abilities unlocked. As soon as at least one damage is dealt to that character, you unlock all of the abilities of the character. That character also gets a second action per turn. When the character is brought down to one health, the rest of the damage that would be dealt that turn is prevented, and on that characters next turn they get three actions.</p>
                              </Col>
                              <Col xs={12} md={6}>
                                  <img src={combat} title="Winning" alt="Winning" />
                              </Col>
                          </Row>
                      </Grid>
                  </Panel.Body>
              </Panel>
              <Panel eventKey="4">
                  <Panel.Heading>
                      <Panel.Title toggle>Knights</Panel.Title>
                  </Panel.Heading>
                  <Panel.Body collapsible>
                      <Grid>
                          <Row>
                              <Col xs={12} md={6}>
                                  <h2>Knights</h2>
                                  <p>Knights are warriors of sorts, who have taken an oath of honor. As such, they will only attack those who are within 2 points of "power" less than them, but they will attack anything with greater power without hesitation.</p>
                                  <p>Knights are also typically astride some sort of steed, whether it's a horse or otherwise.</p>
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
                      <Panel.Title toggle>Thieves</Panel.Title>
                  </Panel.Heading>
                  <Panel.Body collapsible>
                      <Grid>
                          <Row>
                              <Col xs={12} md={6}>
                                  <h2>Thieves</h2>
                                  <p>A thief is typically very stealthy, and specializes in small, quiet weapons. They can assasinate or kill quietly, oftentimes before their opponent knows they're there.</p>
                                  <p>They will enter the battlefield with no equipment. They specialize in stealing the weapons and equipment of other characters, but only the equipment that is not currently equipped (unless the card specifies otherwise).</p>
                                  <p>Theives also can give the items they steal to other characters (except knights), if they so choose. If they drop a weapon, it can be picked up by any character (other than knights) on your side of the battlefield.</p>
                              </Col>
                              <Col xs={12} md={6}>
                                  <img src={combat} title="Winning" alt="Winning" />
                              </Col>
                          </Row>
                      </Grid>
                  </Panel.Body>
              </Panel>
              <Panel eventKey="6">
                  <Panel.Heading>
                      <Panel.Title toggle>Other Possibilities</Panel.Title>
                  </Panel.Heading>
                  <Panel.Body collapsible>
                      <Grid>
                          <Row>
                              <Col xs={12} md={6}>
                                  <h2>Other Possibilities</h2>
                                  <p>Other possibilities for non-magic users to potentially introduce:</p>
                                  <p>Ninjas, Rogues, Samurais, Monks, Cavaliers, Barbarians</p>
                                  <p>We're open to suggestions...</p>
                              </Col>
                              <Col xs={12} md={6}>
                                  <img src={combat} title="Winning" alt="Winning" />
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

export default NonUsers;
