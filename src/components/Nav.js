import React from "react"

const Nav = () => {
    return(
        <nav id="top">
            <p className="logo">{`<Istian />`}</p>
            <ul>
                <a href="#">
                    <li>About</li>
                </a>
                <a href="#">
                    <li>Works</li>
                </a>
                <a href="#">
                    <li>Contact</li>
                </a>
            </ul>
        </nav>
    );
}

export default Nav