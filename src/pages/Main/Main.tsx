import React, {useState} from "react";
//Pages
import Header from "../../components/Header/Header";
import Kitchen from "../../assets/videos/Kitchen.mp4";
import Home from "../Home/Home";
//CSS
import "./Main.scss";
//Types
import { PageContent } from "./types";

const pageContent:PageContent = {
    Home: <Home />,
    // About: <About />,
};

const Main: React.FC = () => {
    const [content, setContent] =  useState("")

    const headerOptions = [
        { title: "About", url: () => setContent("Home")},
        { title: "Explore", url: () => setContent("Explore") },
        { title: "Gallery", url: () => setContent("Gallery") },
        { title: "Contact", url: () => setContent("Contact") },
    ];
    const titleHeader = { title: "COFFEE SHOPS", url: () => setContent("Home") };
    
    return (
        <>
            <Header titleHeader={titleHeader} navItems={headerOptions} />
            <section className="main">
                <video src={Kitchen} autoPlay muted loop />
                <div className="content">
                    {pageContent[content]}
                </div>
            </section>
        </>
    );
};

export default Main;
