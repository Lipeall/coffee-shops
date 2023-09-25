import React from "react";
//Types
import { MediaIconsProps } from "./types"
//CSS
import "./MediaIcons.scss";


const MediaIcons: React.FC<MediaIconsProps> = ({ mediaIcons }) => {
    return (
      <section className="media-icons">
        {mediaIcons.map((icon, index) => (
          <a href={icon.url} key={index}>
            <img
              src={icon.src}
              alt={icon.alt}
              className={icon.className}
            />
          </a>
        ))}
      </section>
    );
  };

export default MediaIcons;