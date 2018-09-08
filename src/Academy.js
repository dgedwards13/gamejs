import React, { Component } from 'react';
import PageHeader from "react-bootstrap/es/PageHeader";
import PanelGroup from "react-bootstrap/es/PanelGroup";
import Panel from "react-bootstrap/es/Panel";
import Grid from "react-bootstrap/es/Grid";
import Row from "react-bootstrap/es/Row";
import Col from "react-bootstrap/es/Col";
import dominaria from "./images/dominaria.png";
import mountains from "./images/mountains.png";
import zendikar from "./images/zendikar.png";

class Academy extends Component {
  render() {
    return (
      <div>
          <PageHeader>
              The Academy <small>Overview & History</small>
          </PageHeader>
          <PanelGroup accordion  defaultActiveKey="1" id="setup-accordion">
              <Panel eventKey="1">
                  <Panel.Heading>
                      <Panel.Title toggle>History of the Academy</Panel.Title>
                  </Panel.Heading>
                  <Panel.Body collapsible>
                      <Grid>
                          <Row>
                              <Col xs={12} md={6}>
                                  <h2>History of the Academy</h2>
                                  <p>There are certain places in the world where those trained to sense it can feel the ancient power of magic energy flowing through the environment. A small group of traveling magic users discovered one such place thousands of years ago, and set up a permanent settlement there. As the years progressed, and as they taught their children the ways of magic, they found that people learned faster here, and mastered concepts quicker, especially magical teachings. So began the academy.</p>
                                  <p>The academy was founded not too long afterwards, and people came from miles around. Over the years, it became legendary, and world-renowned. After a time, they began accepting not only all forms of magical arts, but also various non-magical students as well, and the school evolved.</p>
                                  <p>Today, the academy is known around the world as the best battle academy known to man, elf, giant, pixie, and every other species in between. People of all ages come from all over to learn from the best of the best, from teenage warriors all the way to ancient wizards nearing their seven hundredth year.</p>
                              </Col>
                              <Col xs={12} md={6}>
                                  <img src={dominaria} title="Victory" alt="Victory" />
                              </Col>
                          </Row>
                      </Grid>
                  </Panel.Body>
              </Panel>
              <Panel eventKey="2">
                  <Panel.Heading>
                      <Panel.Title toggle>Academy Structure</Panel.Title>
                  </Panel.Heading>
                  <Panel.Body collapsible>
                      <Grid>
                          <Row>
                              <Col xs={12} md={6}>
                                  <h2>Academy Structure & Curriculum</h2>
                                  <p>The academy has had to evolve over the years, and has become known for it's versatility, among other things. Today, the school is broken into two main sections, Users and Regs.</p>
                                  <p>The Users are those who do magic, and they are given all the resources necessary to become the best in their respective sphere of magic. Wizards, Shamans, Necromancers, Sorcerers, and all other types are given equal treatment and equal opportunity to learn.</p>
                                  <p>Regs are those who are regular, or who don't use magic (whether by choice or by nature). They also have equal opportunities to learn and become masters of their fields, from warriors and berserkers to rangers and thieves, the academy teaches it all.</p>
                                  <p>Sometimes a student will cross borders and study at both sections of the academy, creating new paths for themselves, which is encouraged. Students are given chances to interact between users and regs, in order to learn how each other thinks so as to be able to defeat them better after the academy.</p>
                                  <p>Even with that separation, however, the academy is split into three factions. These factions are based on a historical war (see below). Each of the three factions are made up of students from both the User side and the Reg side, in about equal parts. These factions train together and advance together.</p>
                                  <p>Because of the global nature of the academy, oftentimes students will come together from countries that are currently warring with each other. Fighting is not permitted on campus outside of the established battlefields, punishable by expulsion from the academy, no questions asked.</p>
                                  <p>Fighting on the battlefields is encouraged and even sanctioned by the academy, with full-scale war games and battles happening to allow all sides to best know how to strategize and win battles.</p>
                              </Col>
                              <Col xs={12} md={6}>
                                  <img src={mountains} title="Characters" alt="Characters" />
                              </Col>
                          </Row>
                      </Grid>
                  </Panel.Body>
              </Panel>
              <Panel eventKey="3">
                  <Panel.Heading>
                      <Panel.Title toggle>Academy Curriculum</Panel.Title>
                  </Panel.Heading>
                  <Panel.Body collapsible>
                      <Grid>
                          <Row>
                              <Col xs={12} md={6}>
                                  <h2>Academy Curriculum</h2>
                                  <p>Throughout each school year, the students are given intensive training in their respective fields.</p>
                                  <p>In addition to their regular studies, when they first arrive at the academy, the focus is on building the students awareness to the world around them, and what brought them to the current point they're at. They focus on what they need to do to become the best they can be, and the path they're already on.</p>
                                  <p>Once they advance to the second "stage" of their training, they focus intensively on skill building. All teaching time is devoted to building up the skill base of the students, in order to be capable warriors, wizards, or whatever their field is.</p>
                                  <p>In the third "stage," the focus shifts slightly. The students have the skills they need, they just need to gain mastery over them, getting to the point that they don't need to think about it anymore, and it becomes natural for them.</p>
                                  <p>The academy is very competitive, and only the best of the best make it to graduation. At the end of each year, there is a massive event, called War Games, that pits all three factions against each other. The winning faction, as well as a few specially selected students from the other factions, are allowed to move to the next "stage" of training. Everybody else stays at the stage they were at already. If you do not advance for three years in a row, you are expelled from the academy. Once you advance past the third stage, however, you are allowed to graduate!</p>
                              </Col>
                              <Col xs={12} md={6}>
                                  <img src={zendikar} title="Winning" alt="Winning" />
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

export default Academy;
