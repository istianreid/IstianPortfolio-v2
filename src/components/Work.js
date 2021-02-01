import React, {useState} from 'react'
import Card from '../components/Card'
import { Container, Row } from 'react-bootstrap'

import Figma from '../assets/images/figma.svg'
import Git from '../assets/images/github.svg'
import Website from '../assets/images/website.svg'
import Placeholder from '../assets/images/placeholder-image.jpg'

import PorfolioV1 from '../assets/images/works/Porfolio-V1.PNG'
import BloodMatch from '../assets/images/works/BloodMatch.PNG'
import Lab from '../assets/images/works/LabAtHome.PNG'
import Daisy from '../assets/images/works/Daisy-Ann-.co.svg'
import CEMS from '../assets/images/works/CEMS.PNG'
import CQuest from '../assets/images/works/Creative-Quest.PNG'
import Crud from '../assets/images/works/CRUD-app.PNG'
import HeyFoodies from '../assets/images/works/Heyfoodies.PNG'
import SteelKiwi from '../assets/images/works/SteelKiwi.PNG'
import Visla from '../assets/images/works/Visla.PNG'
import ChildCare from '../assets/images/works/Loving-child-care.PNG'
import Koala from '../assets/images/works/Cuala.PNG'

const Work = () => {

    const [show , setShow] = useState(false)


    return(
        <>
            <div id="work">
                <div className="section-title">
                    <h3 className="title">WORKS</h3>
                </div>
                <Container>
                    <Row>
                        <Card 
                            title="Porfolio" 
                            projectLink=""
                            worksImg={ PorfolioV1 }

                            figma={Figma}
                            linkFigma="https://www.figma.com/file/EjPqT81Z1LwqP8849INTgZ/porfolio?node-id=0%3A1"
                            altFigma="Figma"

                            git={Git}
                            linkGit="https://github.com/istianreid/IstianPortfolio-v2"
                            altGit="Github"

                            website={ Website }
                            linkWebsite="https://istian.tech/"
                            altWebsite="Website"

                            badge1="React JS"
                        />
                        <Card 
                            title="Blood Match" 
                            projectLink=""
                            worksImg={ BloodMatch }

                            figma={Figma}
                            linkFigma="https://www.figma.com/file/VUIBojLvyCp4j3wMcPlCzU/Blood-Match?node-id=0%3A1"
                            altFigma="Figma"

                            git={ Git }
                            linkGit="#"
                            altGit="Github"

                            website={ Website }
                            linkWebsite="#"
                            altWebsite="Website"

                            badge1="MERN Stack"
                        />
                        <Card 
                            title="Lab at Home" 
                            projectLink=""
                            worksImg={ Lab }

                            website={ Website }
                            linkWebsite="https://www.labathomeph.com/"
                            altWebsite="Wix"

                            badge1="Wix"
                        />
                        <Card 
                        title="Hey Foodies" 
                        projectLink=""
                        worksImg={ HeyFoodies }

                        website={ Website }
                        linkWebsite="http://foodies-istian-tech.stackstaging.com/"
                        altWebsite="Website"

                        badge1="Wordpress"
                        />
                        <Card 
                            title="CEMS Redesigned" 
                            projectLink=""
                            worksImg={ CEMS }

                            figma={ Figma }
                            linkFigma="https://www.figma.com/file/Xc6IsMhi21MyaDmPDaIHdK/Cems-Project?node-id=0%3A1"
                            altFigma="Figma"

                            git={ Git }
                            linkGit="https://github.com/istianreid/Cems.ph"
                            altGit="Github"

                            website={ Website }
                            linkWebsite="https://istianreid.github.io/Cems.ph/"
                            altWebsite="Website"

                            badge1="HTML"
                            badge2="CSS"
                            badge3="Bootstrap"
                            badge4="Javascript"
                        />
                        <Card 
                            title="Creative Quest" 
                            projectLink=""
                            worksImg={ CQuest }

                            figma={ Figma }
                            linkFigma="https://www.figma.com/file/W43BYINNAOW18rx12zQTYw/Creative-Quest?node-id=0%3A1"
                            altFigma="Figma"

                            badge1="Figma"
                        />
                        { show?
                        <>
                        <Card 
                            title="JS Application" 
                            projectLink=""
                            worksImg={ Crud }

                            git={ Git }
                            linkGit="https://github.com/istianreid/CRUD-application"
                            altGit="Github"

                            website={ Website }
                            linkWebsite="https://istianreid.github.io/CRUD-application/"
                            altWebsite="Website"

                            badge1="HTML"
                            badge2="CSS"
                            badge3="Javascript"
                        />
                        <Card 
                            title="Daisy Ann" 
                            projectLink=""
                            worksImg={ Daisy }

                            website={ Website }
                            linkWebsite="daisyco.istian.tech"
                            altWebsite="Website"

                            badge1="Wordpress"
                        />
                        <Card 
                            title="SteelKiwi Clone" 
                            projectLink=""
                            worksImg={ SteelKiwi }

                            git={ Git }
                            linkGit="https://github.com/istianreid/Steel-Kiwi-Cloned-Website"
                            altGit="Github"

                            website={ Website }
                            linkWebsite="https://istianreid.github.io/Steel-Kiwi-Cloned-Website/"
                            altWebsite="Website"

                            badge2="HTML"
                            badge3="CSS Flexbox"

                        />
                        <Card 
                            title="Visla" 
                            projectLink=""
                            worksImg={ Visla }

                            git={ Git }
                            linkGit="https://github.com/istianreid/Visla-Cloned-Website"
                            altGit="Github"

                            website={ Website }
                            linkWebsite="https://istianreid.github.io/Visla-Cloned-Website/"
                            altWebsite="Website"

                            badge2="HTML"
                            badge3="CSS"
                        />
                        <Card 
                            title="Koala Illustration" 
                            projectLink=""
                            worksImg={ Koala }

                            git={ Git }
                            linkGit="https://github.com/istianreid/CSS-Drawing"
                            altGit="Github"

                            website={ Website }
                            linkWebsite="https://istianreid.github.io/CSS-Drawing/"
                            altWebsite="website"

                            badge1="HTML"
                            badge2="CSS Animation"

                        />
                        <Card 
                            title="Loving Child Care" 
                            projectLink=""
                            worksImg={ ChildCare }

                            figma={ Figma }
                            linkFigma="https://www.figma.com/file/1vqphtJYg9t7z44P66Mi6r/Group-First-Project?node-id=0%3A1"
                            altFigma="Figma"

                            badge1="Figma"
                        />
                        </>
                        :null}
                    </Row>
                    <Row>
                        <p type="button" onClick={()=>setShow(!show)}>{show? 'Show less >' : 'Show more >'}</p>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Work