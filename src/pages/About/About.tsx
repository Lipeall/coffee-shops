import React from "react";
import Cafe from "../../assets/images/blackeye.png";

import "./About.scss";

const About: React.FC = () => {
    return (
        <section className="about">
            <div>
                <img src={Cafe} alt="Cafe" />
            </div>
            <div className="about-me">
                <h1>About Tia rosa</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio odit, consequatur nemo itaque, repellendus provident porro cumque, ipsam pariatur placeat quidem? Eaque consequatur temporibus possimus sed molestias inventore consectetur dolore.</p>
            </div>
        </section>
    );
};

export default About;