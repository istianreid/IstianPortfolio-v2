import React from 'react'
import { Col } from 'react-bootstrap'


const Card = (props) => {
    return(
        <Col sm={ 12 } md={ 6 } lg={ 4 } >
            <div className="card">
                {/* <a href={ props.projectLink }> */}
                    <div className="image-container">
                        <img src={ props.worksImg } alt={ props.title } />
                    </div>
                {/* </a> */}
                <div className="info-container">
                    <h3>{ props.title }</h3>
                    <div className="links">
                        <a href={ props.linkFigma } target="_blank" rel="noreferrer">
                            <img src={ props.figma } alt={ props.altFigma } />
                        </a>
                        <a href={ props.linkGit } target="_blank" rel="noreferrer">
                            <img src={ props.git } alt={ props.altGit } />
                        </a>
                        <a href={ props.linkWebsite } target="_blank" rel="noreferrer">
                            <img src={ props.website } alt={ props.altWebsite } />
                        </a>
                    </div>
                </div>
                <div className="badges">
                    <span className="badge">{ props.badge1 }</span>
                    <span className="badge">{ props.badge2 }</span>
                    <span className="badge">{ props.badge3 }</span>
                    <span className="badge">{ props.badge4 }</span>
                </div>
            </div>
        </Col>
    )
}

export default Card