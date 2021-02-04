import React from 'react'
import GlitchClip from 'react-glitch-effect/core/Clip';
import { Container, Row, Col } from 'react-bootstrap'
import IstianCover from '../assets/images/pictures/IstianCover.png'

const Hero = () => {


    return(
        <div id="hero">
            <Container>
                <Row>
                    <Col className="info" xs={12} sm={12} md={6} lg={6} xl={6}>
                        <h1>Christopher Reid</h1>
                        <GlitchClip>
                            <h2>Build functional websites.</h2>
                        </GlitchClip>
                        <p>
                            I create beautiful and functional websites that are both modern and user-friendly. I'm a Web developer based in Taguig City, Philippines.
                        </p>
                        <a className="link-btn" href="https://mail.google.com/mail/?view=cm&fs=1&to=istianreid@gmail.com" target="_blank" rel="noreferrer">
                            Get in Touch
                        </a>
                    </Col>
                    <Col className="img" xs={12} sm={12} md={6} lg={6} xl={6}>
                            <img src={ IstianCover } alt="Christopher Reid" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Hero