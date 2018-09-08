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

class Users extends Component {
  render() {
    return (
      <div>
          <PageHeader>
              Types of Magic Users <small>An Introduction to the Many Types of Magic</small>
          </PageHeader>
          <PanelGroup accordion  defaultActiveKey="1" id="users-accordion">
              <Panel eventKey="1">
                  <Panel.Heading>
                      <Panel.Title toggle>Magicians</Panel.Title>
                  </Panel.Heading>
                  <Panel.Body collapsible>
                      <Grid>
                          <Row>
                              <Col xs={12} md={6}>
                                  <h2>Magicians</h2>
                                  <p>A magician, technically, cannot do magic. They have just become exceptionally skilled at using magical artifacts. The magic they perform is a result of the artifacts and items they have at their disposal.</p>
                                  <p>The only spells in the game that they are capable of casting are called "Ancient Magic" spells. The cost for these, as well as the cost for using the magical artifacts, will be listed on the card.</p>
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
                      <Panel.Title toggle>Wizards</Panel.Title>
                  </Panel.Heading>
                  <Panel.Body collapsible>
                      <Grid>
                          <Row>
                              <Col xs={12} md={6}>
                                  <h2>Wizards</h2>
                                  <p>A wizard is a magician who has been channeling magic for so long, that their body has developed the ability to generate mana (a fuel for casting magical spells) by itself. A wizard can cast ancient spells as well as special "wizardry" spells.</p>
                                  <p>Upon entering the battlefield, they get the amount of mana that is printed on their card (in the ability box). Then, each turn, the amount of mana they have to work with goes up by one. They use this mana to cast spells and activate abilities.</p>
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
                      <Panel.Title toggle>Faeries</Panel.Title>
                  </Panel.Heading>
                  <Panel.Body collapsible>
                      <Grid>
                          <Row>
                              <Col xs={12} md={6}>
                                  <h2>Faeries</h2>
                                  <p>A faerie is someone who was born with the ability that wizards have developed (see above). They inherently have a certain amount of mana available to them, however this number does not increase, like the wizards' do.</p>
                                  <p>Like wizards, however, they can cast mana magic spells, including ancient magic and faerie spells.</p>
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
                      <Panel.Title toggle>Sorcerers</Panel.Title>
                  </Panel.Heading>
                  <Panel.Body collapsible>
                      <Grid>
                          <Row>
                              <Col xs={12} md={6}>
                                  <h2>Sorcerers</h2>
                                  <p>Sorcerers draw their power from the lands they control. A sorcerer typically comes from wealthy backgrounds, using land that has been passed down for generations. Any land that they have a claim to can be used for power.</p>
                                  <p>Whenever you play a terrain card, the old terrain card that is being overridden goes to whichever side played it originally. That player may then attach it to a sorcerer if they wish.</p>
                                  <p>This simulates a sorcerer inheriting land, and they can then use that land as a source of power.</p>
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
                      <Panel.Title toggle>Elementalist</Panel.Title>
                  </Panel.Heading>
                  <Panel.Body collapsible>
                      <Grid>
                          <Row>
                              <Col xs={12} md={6}>
                                  <h2>Elementalist</h2>
                                  <p>An Elementalist draws his/her power from the land immediately around him/her. The terrain card in play is what dictates how much of each element is available, however certain elementalists can make better use of the elements available than others.</p>
                                  <p>Elementalists have mastered the ability to harness and control the elements themselves. Most only ever gain mastery of one or two. Some however, called "master elementalists" are born with the inherent ability to master all four elements easily. These become experts in all four, and can use them in unique ways unavailable to other elementalists.</p>
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
                      <Panel.Title toggle>Druids</Panel.Title>
                  </Panel.Heading>
                  <Panel.Body collapsible>
                      <Grid>
                          <Row>
                              <Col xs={12} md={6}>
                                  <h2>Druids</h2>
                                  <p>A druid is similar to an elementalist in function, in that it draws power from the land immediately around him/her (the terrain card in play). However, they use the amount of "nature magic" available in that land, not the elements themselves.</p>
                                  <p>The druids focus on nature, and the more natural the area they are in is, the more powerful they become.</p>
                              </Col>
                              <Col xs={12} md={6}>
                                  <img src={casting} title="Winning" alt="Winning" />
                              </Col>
                          </Row>
                      </Grid>
                  </Panel.Body>
              </Panel>
              <Panel eventKey="7">
                  <Panel.Heading>
                      <Panel.Title toggle>Shamans</Panel.Title>
                  </Panel.Heading>
                  <Panel.Body collapsible>
                      <Grid>
                          <Row>
                              <Col xs={12} md={6}>
                                  <h2>Shamans</h2>
                                  <p>A shaman draws it's power from the people who follow him/her. They are typically rather seductive, and experts at gaining followers. The more people who follow them, the more powerful they become.</p>
                                  <p>If there is one shaman on your side of the field, all the other characters are his/her followers. If you play another shaman, the characters you control cannot be reassigned (unless the original dies), but each new character played can be assigned to one or the other shaman, as you choose.</p>
                              </Col>
                              <Col xs={12} md={6}>
                                  <img src={allies} title="Winning" alt="Winning" />
                              </Col>
                          </Row>
                      </Grid>
                  </Panel.Body>
              </Panel>
              <Panel eventKey="8">
                  <Panel.Heading>
                      <Panel.Title toggle>Necromancers</Panel.Title>
                  </Panel.Heading>
                  <Panel.Body collapsible>
                      <Grid>
                          <Row>
                              <Col xs={12} md={6}>
                                  <h2>Necromancers</h2>
                                  <p>Necromancers get their power from the life force of those around them.</p>
                                  <p>Actual gameplay mechanics are still in flux.</p>
                              </Col>
                              <Col xs={12} md={6}>
                                  <img src={combat} title="Winning" alt="Winning" />
                              </Col>
                          </Row>
                      </Grid>
                  </Panel.Body>
              </Panel>
              <Panel eventKey="9">
                  <Panel.Heading>
                      <Panel.Title toggle>Witches</Panel.Title>
                  </Panel.Heading>
                  <Panel.Body collapsible>
                      <Grid>
                          <Row>
                              <Col xs={12} md={6}>
                                  <h2>Witches</h2>
                                  <p>Witches can steal the mana from the mana magic users around them (wizards, magicians, necromancers, etc).</p>
                                  <p>Actual gameplay mechanics are still in flux.</p>
                              </Col>
                              <Col xs={12} md={6}>
                                  <img src={combat} title="Winning" alt="Winning" />
                              </Col>
                          </Row>
                      </Grid>
                  </Panel.Body>
              </Panel>
              <Panel eventKey="10">
                  <Panel.Heading>
                      <Panel.Title toggle>Summoners</Panel.Title>
                  </Panel.Heading>
                  <Panel.Body collapsible>
                      <Grid>
                          <Row>
                              <Col xs={12} md={6}>
                                  <h2>Summoners</h2>
                                  <p>A summoner can summon creatures and familiars, and can then draw power from that familiar.</p>
                                  <p>Actual gameplay mechanics are still in flux.</p>
                              </Col>
                              <Col xs={12} md={6}>
                                  <img src={combat} title="Winning" alt="Winning" />
                              </Col>
                          </Row>
                      </Grid>
                  </Panel.Body>
              </Panel>
              <Panel eventKey="11">
                  <Panel.Heading>
                      <Panel.Title toggle>Mages</Panel.Title>
                  </Panel.Heading>
                  <Panel.Body collapsible>
                      <Grid>
                          <Row>
                              <Col xs={12} md={6}>
                                  <h2>Mages</h2>
                                  <p>A mage can borrow the magic from other magical creatures. For example, a dragon mage draws it's power from dragons.</p>
                                  <p>Actual gameplay mechanics are still in flux.</p>
                              </Col>
                              <Col xs={12} md={6}>
                                  <img src={combat} title="Winning" alt="Winning" />
                              </Col>
                          </Row>
                      </Grid>
                  </Panel.Body>
              </Panel>
              <Panel eventKey="12">
                  <Panel.Heading>
                      <Panel.Title toggle>Other Possibilities</Panel.Title>
                  </Panel.Heading>
                  <Panel.Body collapsible>
                      <Grid>
                          <Row>
                              <Col xs={12} md={6}>
                                  <h2>Other Possibilities</h2>
                                  <p>Other possibilities for magic users to potentially introduce:</p>
                                  <p>Shapeshifters, Mystics, Paladins, Clerics</p>
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

export default Users;
