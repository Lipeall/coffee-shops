import React from "react";
import Header from "../../components/Header/Header";
import Kitchen from "../../assets/videos/Kitchen.mp4";

import "./Home.scss";

const headerOptions = [
    { title: "About", url: "#" },
    { title: "Explore", url: "#" },
    { title: "Gallery", url: "#" },
    { title: "Contact", url: "#" },
];
const titleHeader = { title: "COFFEE SHOPS", url: "#" };

const Home: React.FC = () => {
    return (
        <>
            <Header titleHeader={titleHeader} navItems={headerOptions} />
            <section className="home">
                <video src={Kitchen} autoPlay muted loop />
                <div className="content">
                    <div>
                    <h1>COFFEE SHOPS.<br /><span>TIA ROSA</span></h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo iusto eveniet odit velit nam nemo in necessitatibus. Voluptas reprehenderit, asperiores pariatur, repellendus sequi iure voluptate possimus autem dignissimos, labore perferendis.</p>
                    <a href="http://">Read More</a>
                    </div>
                    <div className="media-icons">
                        <a href="http://"><img src="https://img.icons8.com/color/48/facebook-new.png" alt="facebook" className="fab fa-facebook-f"></img></a>
                        <a href="http://"><img src="https://img.icons8.com/color/48/instagram-new--v1.png" alt="instagram" className="fab fa-instagram"></img></a>
                        <a href="https://"><img src="https://img.icons8.com/color/48/twitter--v1.png" alt="twitter" className="fab fa-twitter"  /></a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
