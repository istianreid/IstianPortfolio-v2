import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import PDF from '../assets/Documents/Istian-Resume.pdf'

class Contact extends Component {
    render() {
        return (
            <div id="contact">
                <div className="section-title">
                    <h3 className="title">CONTACT</h3>
                </div>
                <div>
                    <Container>
                        <Row >
                            <Col xs={12} sm={6} xl={6}>
                                <p className="sub">Start a conversation</p>
                                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=istianreid@gmail.com" target="_blank" rel="noreferrer" className="email">istianreid@gmail.com</a>
                                <p className="text">If you are interested in a new project, collaboration, or a reason to get a beer don't hesitate to shoot me an email.</p>

                                <div className="resume">
                                    <p>Want to hire me? Here’s my resume. <br/> 
                                    Click on the button below.</p>
                                    <a className="link-btn" href={ PDF } target="_blank" rel="noreferrer">
                                        Download Resume
                                    </a>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>    
            </div>
        );
    }
}

export default Contact;