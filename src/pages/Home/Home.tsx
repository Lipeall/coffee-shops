import React from "react";
import "./Home.scss";

const Home: React.FC = () => {
    return (
        <section className="home">
            <div className="content">
                <div>
                <h1>COFFEE SHOPS.<br /><span>TIA ROSA</span></h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo iusto eveniet odit velit nam nemo in necessitatibus. Voluptas reprehenderit, asperiores pariatur, repellendus sequi iure voluptate possimus autem dignissimos, labore perferendis.</p>
                <a href="http://">Read More</a>
                </div>
            </div>
        </section>
    );
};

export default Home;
