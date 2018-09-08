import React, { Component } from 'react';
import PageHeader from "react-bootstrap/es/PageHeader";
import PanelGroup from "react-bootstrap/es/PanelGroup";
import Panel from "react-bootstrap/es/Panel";
import Row from "react-bootstrap/es/Row";
import Col from "react-bootstrap/es/Col";
import Grid from "react-bootstrap/es/Grid";
import escape from "./images/combat.png";
import block from "./images/block.png";
import gear from "./images/gear.png";

class Combat extends Component {
  render() {
    return (
      <div>
          <PageHeader>
              How Combat Works <small>Defeating Characters</small>
          </PageHeader>
          <PanelGroup accordion defaultActiveKey="1" id="combat-accordion">
              <Panel eventKey="1">
                  <Panel.Heading>
                      <Panel.Title toggle>Locked in Combat</Panel.Title>
                  </Panel.Heading>
                  <Panel.Body collapsible>
                      <Grid>
                          <Row>
                              <Col xs={12} md={6}>
                                  <h2>Locked in Combat</h2>
                                  <p><b>Each character is allowed one action per turn.</b> This action can vary depending on the situation he/she is in. One such action is to engage in combat with another character. When this happens, the character is then locked into combat with that character until either he/she wins the battle, is defeated, or escapes combat.</p>
                                  <p>To win the fight, he/she must activate abilities and/or cast spells to bring the life points of the opposing character to zero. If their own life points are brought to zero, they are defeated. A character which has been defeated is sent to the graveyard.</p>
                                  <p>If a character is locked in combat, he/she cannot leave the fight to do anything else until the fight is over. It is possible to end the fight early, but that will be discussed in more detail down below.</p>
                              </Col>
                              <Col xs={12} md={6}>
                                  <img src={block} title="Combat" alt="Combat" />
                              </Col>
                          </Row>
                      </Grid>
                  </Panel.Body>
              </Panel>
              <Panel eventKey="2">
                  <Panel.Heading>
                      <Panel.Title toggle>Escaping Combat</Panel.Title>
                  </Panel.Heading>
                  <Panel.Body collapsible>
                      <Grid>
                          <Row>
                              <Col xs={12} md={6}>
                                  <h2>Escaping Combat</h2>
                                  <p>If a character is locked in combat, just as in any other stage of the game, he/she gets one action per turn. Typically, that action will be attacking or triggering an ability, but if you so choose, you can use that action to attempt to escape the current combat.</p>
                                  <p>Escaping is not a sure thing, but the more adept your character is, the more likely they will be successful. If you want to attempt an escape, you simply roll the dice. If you roll a number lower than or equal to the power/casting cost of your character, he/she can successfully escape the combat. If you roll a higher number, that character is out of luck, and he/she must wait until your next turn to try again.</p>
                                  <p>It is generally advised to avoid attempting an escape unless absolutely necessary.</p>
                              </Col>
                              <Col xs={12} md={6}>
                                  <img src={escape} title="Escaping" alt="Escaping" />
                              </Col>
                          </Row>
                      </Grid>
                  </Panel.Body>
              </Panel>
              <Panel eventKey="3">
                  <Panel.Heading>
                      <Panel.Title toggle>Armor and Weapons</Panel.Title>
                  </Panel.Heading>
                  <Panel.Body collapsible>
                      <Grid>
                          <Row>
                              <Col xs={12} md={6}>
                                  <h2>Armor and Weapons</h2>
                                  <p>A character has the ability to "equip" two items (main-hand and off-hand), unless the card explicitly states otherwise. Typically a sword or other weapon will be held in the "main-hand," while a shield or other accessory goes in the "off-hand."</p>
                                  <p>A character may "own" more than these, but only those two can be equipped at once. An item that is owned, but not equipped, cannot give bonuses, nor can their effects be used, unless the card specifically says otherwise (an amulet, for example).</p>
                                  <p>If a character is not locked in combat, these items can be switched & exchanged, equipped & unequipped, at any time. However, if the character is currently locked in combat, he/she is stuck with their currently equipped items until combat has ended, unless you can roll for a switch (see below).</p>
                              </Col>
                              <Col xs={12} md={6}>
                                  <img src={gear} title="Armor" alt="Armor" />
                              </Col>
                          </Row>
                      </Grid>
                  </Panel.Body>
              </Panel>
              <Panel eventKey="4">
                  <Panel.Heading>
                      <Panel.Title toggle>Rolling for a Switch</Panel.Title>
                  </Panel.Heading>
                  <Panel.Body collapsible>
                      <Grid>
                          <Row>
                              <Col xs={12} md={6}>
                                  <h2>Rolling for a Switch</h2>
                                  <p>Just like when you roll to escape combat (see above), you can roll to attempt a switch of weapons (or other items). Switching items mid combat is a dangerous thing, and so not everyone will be able to execute it perfectly every time.</p>
                                  <p>If a character wants to switch items, he/she must roll the dice, rolling a number less than or equal to their own power/casting cost. If they are successful, you may swap out their currently equipped items for anything they own. You may also play a new item from your hand for them to equip at this time.</p>
                                  <p>NOTE: Rolling for a switch uses up that character's action for that turn, whether you are successful or not. Use it wisely!</p>
                              </Col>
                              <Col xs={12} md={6}>
                                  <img src={block} title="Armor" alt="Armor" />
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

export default Combat;
