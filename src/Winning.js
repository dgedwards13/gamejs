import React, { Component } from 'react';
import PageHeader from "react-bootstrap/es/PageHeader";
import PanelGroup from "react-bootstrap/es/PanelGroup";
import Panel from "react-bootstrap/es/Panel";
import Grid from "react-bootstrap/es/Grid";
import Row from "react-bootstrap/es/Row";
import Col from "react-bootstrap/es/Col";
import angel from "./images/angel.png";
import allies from "./images/allies.png";
import combat from "./images/combat.png";

class Winning extends Component {
  render() {
    return (
      <div>
          <PageHeader>
              How to Win <small>Instructions for Ending the Game</small>
          </PageHeader>
          <PanelGroup accordion  defaultActiveKey="1" id="winning-accordion">
              <Panel eventKey="1">
                  <Panel.Heading>
                      <Panel.Title toggle>Last Character Standing</Panel.Title>
                  </Panel.Heading>
                  <Panel.Body collapsible>
                      <Grid>
                          <Row>
                              <Col xs={12} md={6}>
                                  <h2>Last Character Standing</h2>
                                  <p>Each player begins the game with one character card on the field. Throughout the game, you will play other characters, cast spells in their behalf, engage them in combat, defeating the other characters your opponents control. <b>To win, simply be the last character standing.</b></p>
                                  <p>Character cards are the most important part of the deck. They engage in battle for you, they cast the spells to target opponents, and the will make or break the game for you.</p>
                                  <p>A character is easy to tell apart from the rest of the cards in your deck, as these are printed (and played) sideways. At the top of the card in the left corner, there is a number which is the casting cost. These numbers will typically correspond to the relative skills and abilities of the character, with a higher number corresponding to a more powerful character.</p>
                              </Col>
                              <Col xs={12} md={6}>
                                  <img src={angel} title="Victory" alt="Victory" />
                              </Col>
                          </Row>
                      </Grid>
                  </Panel.Body>
              </Panel>
              <Panel eventKey="2">
                  <Panel.Heading>
                      <Panel.Title toggle>Utilizing Your Characters</Panel.Title>
                  </Panel.Heading>
                  <Panel.Body collapsible>
                      <Grid>
                          <Row>
                              <Col xs={12} md={6}>
                                  <h2>Utilizing Your Characters</h2>
                                  <p>You, as a player, don't exist. Sounds harsh, no? As the player, you are there to facilitate battle between the characters you control. You make decisions on behalf of them, and if they are all defeated, you lose the game.</p>
                                  <p>There are several different types of characters, both within the scope of magic users and non-magic users. It is up to you to find the right balance, and use these characters appropriately in order to help your team to victory.</p>
                                  <p>Each turn, you will have a chance to engage your characters in battle with other characters, cast spells in their behalf, and otherwise activate abilities to win. There will be more information on combat in a section below.</p>
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
                      <Panel.Title toggle>Alternate Win Conditions</Panel.Title>
                  </Panel.Heading>
                  <Panel.Body collapsible>
                      <Grid>
                          <Row>
                              <Col xs={12} md={6}>
                                  <h2>Alternate Win Conditions</h2>
                                  <p>There are other, alternative, ways to win (or lose) the game. Running out of cards in your deck is NOT one of them. When your deck runs out, you shuffle your discard pile (not your graveyard - more on that below) back into your deck. Play then continues until someone runs out of characters on the battlefield.</p>
                                  <p>One potential scenario that may come up happens when you (intentionally or otherwise) create a situation that would result in a draw. If you do this, you lose the game (so try to avoid that).</p>
                                  <p>Other scenarios may come up in playtesting, or upon further game development. Stay tuned, and if you have any ideas, let us know!</p>
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

export default Winning;
