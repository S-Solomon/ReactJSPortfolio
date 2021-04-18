import React from 'react' ;
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faYoutube} from '@fortawesome/free-brands-svg-icons';


function Homepage() {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am
                    <span> Lorem Ipsum</span>
                </h1>
                <p className="h-sub-text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing 
                    elit. Soluta veniam voluptate, numquam at est fugit 
                    aperiam sint omnis dignissimos voluptatum et ducimus 
                    ratione recusandae commodi distinctio dolorem! Ipsa, 
                    molestiae laborum. 
                </p>
                <div className="icons">
                    <Link to="test" className="icon-holder">
                        <FontAwesomeIcon icon={faFacebook} className="icon fb" />
                    </Link>
                    <Link to="test" className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon gh" />
                    </Link>
                    <Link to="test" className="icon-holder">
                        <FontAwesomeIcon icon={faYoutube} className="icon yt"/>
                    </Link>
                </div>
            </header>
        </div>
    )
}

export default Homepage
