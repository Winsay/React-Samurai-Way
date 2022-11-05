import React from "react";


export default function Nav() {
    return (
        <nav className="nav">
            <ul className="navList">
                <li className="navItem">
                    <a href="#s" className="navLink">
                        Profile
                    </a>
                </li>
                <li className="navItem">
                    <a href="#s" className="navLink">
                        Messages
                    </a>
                </li>
                <li className="navItem">
                    <a href="#s" className="navLink">
                        News
                    </a>
                </li>
                <li className="navItem">
                    <a href="#s" className="navLink">
                        Music
                    </a>
                </li>
                <li className="navItem">
                    <a href="#s" className="navLink">
                        Settings
                    </a>
                </li>
            </ul>
        </nav>
    )
}