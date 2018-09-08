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

class SetUp extends Component {
  render() {
    return (
      <div>
          <PageHeader>
              Setting Up <small>Basics & Overview</small>
          </PageHeader>
          <PanelGroup accordion  defaultActiveKey="1" id="setup-accordion">
              <Panel eventKey="1">
                  <Panel.Heading>
                      <Panel.Title toggle>Initial Set-Up</Panel.Title>
                  </Panel.Heading>
                  <Panel.Body collapsible>
                      <Grid>
                          <Row>
                              <Col xs={12} md={6}>
                                  <h2>Initial Set-Up</h2>
                                  <p>Before you begin play, each player rolls a six-sided die. The player with the highest roll goes first. Play then continues clockwise.</p>
                                  <p>The player who goes first rolls two six-sided dice. The resulting number is the allowable power of your starting character. Each player searches his/her deck for a character card with a lesser or equal power to the number rolled. They then start the game with that character on the field.</p>
                                  <p>You should play the game on a large clear surface, with plenty of space for moving and placing cards. Your deck should be close to you, with room for both a discard pile and a graveyard pile close by.</p>
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
                      <Panel.Title toggle>Deck Building & Structure</Panel.Title>
                  </Panel.Heading>
                  <Panel.Body collapsible>
                      <Grid>
                          <Row>
                              <Col xs={12} md={6}>
                                  <h2>Deck Building & Structure</h2>
                                  <p>A deck has 48 cards in it. These are made up of varying card types, and you can have as many duplicates as you would like, except for certain cards labeled as "unique." You may only have one of those per deck.</p>
                                  <p>The structure of your deck will vary depending on strategy, but a good rule of thumb is as follows: 16 characters, 12 spells/abilities, 12 items, and 8 terrain cards.</p>
                                  <p>If your deck is heavy in socrerers, you may want more terrain cards, or if your heavy in non-magic users, you may want fewer spells. You can build your deck as you see fit, and you will find certain deck structures work better in certain situations.</p>
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
                      <Panel.Title toggle>Types of Cards</Panel.Title>
                  </Panel.Heading>
                  <Panel.Body collapsible>
                      <Grid>
                          <Row>
                              <Col xs={12} md={6}>
                                  <h2>Types of Cards</h2>
                                  <p>There are four card types in total: Character cards, Item Cards, Spell/Ability Cards, and Terrain Cards.</p>
                                  <p>Character cards are the meat of the game. They attack, defend, cast spells, and do combat; and once the last one dies the game is over.</p>
                                  <p>Item cards represent the tools and equipment that the characters can use. These may be swords, axes, shields, staffs, wands, orbs, armor, or other such items. A character can hold one main-hand item and one off-hand item at once, unless it states otherwise on it's card (after all, they'll typically only have two hands).</p>
                                  <p>Spell/Ability cards are the spells and abilities that the characters can cast/do. Magic users can cast spells (but only if they match the type of magic that character can cast), and no-magic users may have special abilities on these cards. These will typically have some sort of cost associated with them, and the character must pay this cost before it can be cast.</p>
                                  <p>Terrain cards represent the actual battlefield. When you draw one of these, you must play it immediately. This changes the battlefield to whatever the terrain card says. Sometimes these will give special bonuses to certain types of characters, or hinder others. Only one terrain card can be active at once, and if a terrain card you played gets overridden, you get to bring it to your side of the field, to be used later in the game (see sorcerers, below).</p>
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

export default SetUp;
