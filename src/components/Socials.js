import React from 'react'
import Fb from '../assets/images/socials/fb.svg'
import Ig from '../assets/images/socials/ig.svg'
import Github from '../assets/images/socials/github.svg'
import Codewars from '../assets/images/socials/codewars.svg'
import LinkedIn from '../assets/images/socials/linkedin.svg'

const Socials = () => {
    return(
        <div id="social-links">
            <ul>
                <a href="#">
                    <li>
                        <img src={ Fb } alt="Fb" />
                    </li>
                </a>
                <a href="#">
                    <li>
                        <img src={ Ig } alt="Ig" />
                    </li>
                </a>
                <a href="#">
                    <li>
                        <img src={ Github } alt="Github" />
                    </li>
                </a>
                <a href="#">
                    <li>
                        <img src={ Codewars } alt="Codewars" />
                    </li>
                </a>
                <a href="#">
                    <li>
                        <img src={ LinkedIn } alt="LinkedIn" />
                    </li>
                </a>
            </ul>
        </div>
    );
}

export default Socials;