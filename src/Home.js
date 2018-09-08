import React, { Component } from 'react';
import Grid from "react-bootstrap/es/Grid";
import Row from "react-bootstrap/es/Row";
import Col from "react-bootstrap/es/Col";
import swamp from "./images/swamp.png";

class Home extends Component {
  render() {
    return (
        <div>
            <Grid>
                <Row>
                    <Col xs={12} md={6}>
                        <h2>Welcome!</h2>
                        <p>The game as it stands now is still in heavy development. We hope to have a functional prototype within the next few months, however. As we come up with new content and ideas, we'll try to get them uploaded here as soon as possible, allowing y'all to take a look.</p>
                        <p>If you have any questions or suggestions as you're reading through, feel free to let us know, and we can answer the questions, and make these pages a little more clear.</p>
                        <p>Thanks y'all!</p>
                    </Col>
                    <Col xs={12} md={6}>
                        <img src={swamp} title="Home" alt="Home" />
                    </Col>
                </Row>
            </Grid>
        </div>
    );
  }
}

export default Home;
