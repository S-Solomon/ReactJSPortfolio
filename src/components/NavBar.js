import React from 'react'
import avatar from '../img/avatar.png'

function NavBar() {
    return (
        <div className="NavBar">
            <div className="profile">
                <img src={avatar} alt="avatar"/>
            </div>
            <nav className="nav">
                <ul className="nav-items"></ul>
            </nav>
        </div>
    )
}

export default NavBar
