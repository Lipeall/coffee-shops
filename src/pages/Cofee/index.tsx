import React, {useState} from "react";
//Components
import Header from "../../components/Header/Header";
import Kitchen from "../../assets/videos/Kitchen.mp4";
import MediaIcons from "../../components/Media-Icons/MediaIcons";
//Sections
import Home from "./Home";
import About from "./About";
import Gallery from "./Gallery";
import Contact from "./Contact";
//CSS
import "./style.scss";
import {CenteredContent} from "../../components/styled-components/CenteredContent";
//Types
import { PageSections } from "./types";
//Seções
const pagesections:PageSections = {
    Home: <Home />,
    About: <About />,
    Gallery: <Gallery />,
    Contact: <Contact />
};
//Media Icons
const socialMediaIcons = [
    {
      url: "http://www.facebook.com",
      src: "https://img.icons8.com/color/48/facebook-new.png",
      alt: "facebook",
      className: "fab fa-facebook-f",
    },
    {
      url: "http://www.instagram.com",
      src: "https://img.icons8.com/color/48/instagram-new--v1.png",
      alt: "instagram",
      className: "fab fa-instagram",
    },
    {
      url: "http://www.twitter.com",
      src: "https://img.icons8.com/color/48/twitter--v1.png",
      alt: "twitter",
      className: "fab fa-twitter",
    },
];

const Coffee: React.FC = () => {
    const [content, setContent] =  useState("Home");

    const headerOptions = [
        { title: "Sobre", url: () => setContent("About")},
        { title: "Galeria", url: () => setContent("Gallery") },
        { title: "Contato", url: () => setContent("Contact") },
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
                <MediaIcons mediaIcons={socialMediaIcons}/>
            </section>
        </>
    );
};

export default Coffee;
