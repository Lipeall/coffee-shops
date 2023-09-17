import React, {useState} from "react";
//Components
import Header from "../../components/Header/Header";
import Kitchen from "../../assets/videos/Kitchen.mp4";
import MediaIcons from "../../components/Media-Icons/MediaIcons";
//Sections
import Home from "./Home";
import About from "./About";
import Gallery from "./Gallery";
//CSS
import "./style.scss";
import {CenteredContent} from "../../components/styled-components/CenteredContent";
//Types
import { PageSections } from "./types";


const pagesections:PageSections = {
    Home: <Home />,
    About: <About />,
    Gallery: <Gallery />
};

const Coffee: React.FC = () => {
    const [content, setContent] =  useState("Home");

    const headerOptions = [
        { title: "About", url: () => setContent("About")},
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
                <CenteredContent>
                    <div className={`content`}>
                        {pagesections[content]}
                    </div>
                </CenteredContent>
                <MediaIcons />
            </section>
        </>
    );
};

export default Coffee;
