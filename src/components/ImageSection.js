import React from 'react' ;
import aboutman from '../img/aboutman.jpg'

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={aboutman} alt="about"/>
            </div>
            <div className="about-info">
                <h4>I am<span> Lorem Ipsum</span></h4>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Praesentium earum, consequatur ipsa maiores rem debitis, 
                    L'important c'est pas la chute mais l'atterisage.
                </p>
                <div className="about-details">
                    <div className="left-section">
                            <p>Full Name</p>
                            <p>Age</p>
                            <p>Nationality</p>
                            <p>Languages</p>
                            <p>Address</p>
                            <p>Countries</p>
                        </div>
                        <div className="right-section">
                            <p>: Lorem Ipsum</p>
                            <p>: 50</p>
                            <p>: French</p>
                            <p>: French, Spanish, English</p>
                            <p>: 2 Beightbridge, BN7 GB9, United kingdom</p>
                            <p>: France, Spain, Germany</p>
                        </div>
                    </div>
                    <button className="btn">Download Cv</button>
            </div>
        </div>
    )
}

export default ImageSection
