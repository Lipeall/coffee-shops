import React from "react";
import "./MediaIcons.scss";

const MediaIcons: React.FC = () => {
    return (
        <section className="media-icons">
            <a href="http://">
                <img
                    src="https://img.icons8.com/color/48/facebook-new.png"
                    alt="facebook"
                    className="fab fa-facebook-f"
                />
            </a>
            <a href="http://">
                <img
                    src="https://img.icons8.com/color/48/instagram-new--v1.png"
                    alt="instagram"
                    className="fab fa-instagram"
                />
            </a>
            <a href="https://">
                <img
                    src="https://img.icons8.com/color/48/twitter--v1.png"
                    alt="twitter"
                    className="fab fa-twitter"
                />
            </a>
        </section>
    );
};

export default MediaIcons;
