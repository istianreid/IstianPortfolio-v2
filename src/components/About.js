import React , { useRef, useEffect }  from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import hoverEffect from "hover-effect";

//about icons
import htmlIcon from '../assets/images/tech/HTML.svg'
import cssIcon from '../assets/images/tech/CSS.svg'
import bootstrapIcon from '../assets/images/tech/Bootstrap.svg'
import javaScriptIcon from '../assets/images/tech/JS.svg'
import mongodbIcon from '../assets/images/tech/MongoDb.svg'
import expressIcon from '../assets/images/tech/Express.svg'
import reactIcon from '../assets/images/tech/React.svg'
import nodeIcon from '../assets/images/tech/Node.svg'
import reduxIcon from '../assets/images/tech/Redux.svg'
import wordpressIcon from '../assets/images/tech/Wordpress.svg'
import wixIcon from '../assets/images/tech/Wix.svg'

//image
import Profile from '../assets/images/plain-photo.png'

//distortion image
import distortion from '../assets/effects/Distortion/6.jpg'

const About = () => {

    const container = useRef();

    useEffect(() => {
        
        new hoverEffect({
          parent: container.current,
          intensity: 0.3,
          image1: Profile,
          image2: Profile,
          displacementImage: distortion
        });

    }, [container]);


    return(
        <div id="about">
            <div className="section-title">
                <h3 className="title">ABOUT</h3>
            </div>
            <Container >
                <Row className="about">
                    <Col xs={12} sm={12} md={10} lg={5} xl={5} className= "about-image" >
                        <div className="profile" id="imgContainer" ref={container}/>
                    </Col>
                    <Col xs={12} sm={12} md={10} lg={7} xl={7} className="about-text">
                        <div>
                            <h3>Hi , my name is</h3>
                            <h2>Christopher  <span className="color-white">"istian"</span>  Reid</h2>
                            <p>A career-shifter who creates beautiful and functional websites that are both modern and user-friendly. I'm a full stack developer who loves working with various frameworks such as HTML, CSS, Bootstrap, ReactJS and more.</p>
                            <div>
                                <ul>
                                    <li><img src={htmlIcon} alt="html"/></li>
                                    <li><img src={cssIcon} alt="css"/></li>
                                    <li><img src={bootstrapIcon} alt="bootstrap"/></li>
                                    <li><img src={javaScriptIcon} alt="javaScript"/></li>
                                    <li><img src={mongodbIcon} alt="mongodb"/></li>
                                    <li><img src={expressIcon} alt="express"/></li>
                                    <li><img src={reactIcon} alt="react"/></li>
                                    <li><img src={nodeIcon} alt="node"/></li>
                                    <li><img src={reduxIcon} alt="redux"/></li>
                                    <li><img src={wordpressIcon} alt="wordpress"/></li>
                                    <li><img src={wixIcon} alt="wix"/></li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default About