import React from "react";
import Header from "../../components/Header/Header";
import "./Home.scss";

const headerOptions = [
    { title: "Coffee ", url: "#" },
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
        </>
    );
};

export default Home;
