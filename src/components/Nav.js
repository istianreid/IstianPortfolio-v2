import React from "react"

const Nav = () => {
    return(
        <nav id="top">
            <p className="logo">{`<Istian />`}</p>
            <ul>
                <a href="#about">
                    <li>About</li>
                </a>
                <a href="#work">
                    <li>Works</li>
                </a>
                <a href="#contact">
                    <li>Contact</li>
                </a>
            </ul>
        </nav>
    );
}

export default Nav