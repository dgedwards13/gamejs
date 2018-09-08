import React, { Component } from 'react';
import PageHeader from "react-bootstrap/es/PageHeader";
import PanelGroup from "react-bootstrap/es/PanelGroup";
import Panel from "react-bootstrap/es/Panel";
import Grid from "react-bootstrap/es/Grid";
import Row from "react-bootstrap/es/Row";
import Col from "react-bootstrap/es/Col";
import angel from "./images/angel.png";
import allies from "./images/allies.png";
import creature from "./images/creature.png";
import damage from "./images/damage.png";

class Turns extends Component {
  render() {
    return (
      <div>
          <PageHeader>
              Taking a Turn <small>Steps and Phases of Each Turn</small>
          </PageHeader>
          <PanelGroup accordion  defaultActiveKey="1" id="turns-accordion">
              <Panel eventKey="1">
                  <Panel.Heading>
                      <Panel.Title toggle>Turn Overview</Panel.Title>
                  </Panel.Heading>
                  <Panel.Body collapsible>
                      <Grid>
                          <Row>
                              <Col xs={12} md={6}>
                                  <h2>Turn Overview</h2>
                                  <p>Your turn is fairly straightforward. Draw a card, play your cards, do your actions, and move on. However, each step has a few nuances that require a little explanation. See below for how these steps work in actual gameplay.</p>
                              </Col>
                              <Col xs={12} md={6}>
                                  <img src={allies} title="Victory" alt="Victory" />
                              </Col>
                          </Row>
                      </Grid>
                  </Panel.Body>
              </Panel>
              <Panel eventKey="2">
                  <Panel.Heading>
                      <Panel.Title toggle>Draw Step</Panel.Title>
                  </Panel.Heading>
                  <Panel.Body collapsible>
                      <Grid>
                          <Row>
                              <Col xs={12} md={6}>
                                  <h2>Draw Step</h2>
                                  <p>Just like in most games, you begin your turn by drawing a card. However, unlike other games, you have a few options for how to do that.</p>
                                  <p>You can choose to just draw as normal, in which case you simply take to top card of your deck. Or, you could perform what is called a "mulligan."</p>
                                  <p>In  golf, if you take a bad shot, you can mulligan, meaning that you can redo the shot without penalty. Here, it operates similarly. If at anytime you have cards you don't want, you can choose to discard them at the start of you draw step, and draw that many cards again into your hand.</p>
                                  <p>For example, if you have a hand with six cards, but you don't have a use for four of them, you could choose to discard those four and draw four new cards instead of your usual draw step.</p>
                              </Col>
                              <Col xs={12} md={6}>
                                  <img src={angel} title="Characters" alt="Characters" />
                              </Col>
                          </Row>
                      </Grid>
                  </Panel.Body>
              </Panel>
              <Panel eventKey="3">
                  <Panel.Heading>
                      <Panel.Title toggle>Play Step</Panel.Title>
                  </Panel.Heading>
                  <Panel.Body collapsible>
                      <Grid>
                          <Row>
                              <Col xs={12} md={6}>
                                  <h2>Play Step</h2>
                                  <p>At the beginning of your play step, you roll the dice (2 six-sided). The resulting number is the amount you can "spend" to play character cards from your hand. During this step, you can play any character and item cards that you can.</p>
                                  <p>If you rolled an 8, you could play on character with a power of 8, two characters with a power of 4, or any other combination of numbers, up to a total of 8 power. You don't need to actually reach 8, but you cannot go over.</p>
                                  <p>Item cards are free to cast, but can only be attached to a character with a power/casting cost the same or higher than the power of the item you are playing.</p>
                              </Col>
                              <Col xs={12} md={6}>
                                  <img src={creature} title="Winning" alt="Winning" />
                              </Col>
                          </Row>
                      </Grid>
                  </Panel.Body>
              </Panel>
              <Panel eventKey="4">
                  <Panel.Heading>
                      <Panel.Title toggle>Action Step</Panel.Title>
                  </Panel.Heading>
                  <Panel.Body collapsible>
                      <Grid>
                          <Row>
                              <Col xs={12} md={6}>
                                  <h2>Action Step</h2>
                                  <p>The Action Step is where the bulk of the gameplay happens. This is where you go through each character you control, and they can do one action during that turn. That action can be attacking another character, casting a spell, using a medpack, or any other ability that the character is capable of using.</p>
                                  <p>Each character only gets one action per turn, unless this rule is modified by another card. All characters may perform an action, however you may choose to stay dormant that turn, not performing any actions.</p>
                                  <p>When you have performed all the actions that you are going to perform that turn, play passes to the next player!</p>
                              </Col>
                              <Col xs={12} md={6}>
                                  <img src={damage} title="Winning" alt="Winning" />
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

export default Turns;
