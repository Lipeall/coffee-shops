import React, { useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import BasicModal from "../Modal/Modal";
//Types
import { GalleryContent, GalleryProps } from "./types";

const Content: React.FC<GalleryContent> = ({ img, title, description }) => {
    return (
        <>
            <div
                style={{
                    display: "grid",
                    placeItems: "center",
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    backdropFilter: "blur(10px)",
                    borderRadius: "10px",
                    padding: "20px",
                    width: 600,
                    height: 400,
                    zIndex: 2,
                }}
            >
                <img
                    src={img}
                    height={200}
                    width={200}
                    style={{ borderRadius: 5 }}
                    alt=""
                />
                <h6>{title}</h6>
                <p>{description}</p>
            </div>
        </>
    );
};


const Gallery: React.FC<GalleryProps> = ( { data }) => {
    const [isShow, setIsShow] = useState<boolean>(false);
    const [content, setContent] = useState<GalleryContent | null>(null);

    const handleOpen = (show: boolean, item: GalleryContent | null) => {
        setIsShow(show);
        setContent(item);
    };

    return (
		<>
			<div style={{padding: "0 40px"}}>
				<ImageList
					cols={4}
					sx={{ width: 800, height: 500, borderRadius: 2}}
				>
					{data.map((item, index) => (
						<ImageListItem key={index}>
							<img
								src={`${item.img}?w=248&fit=crop&auto=format`}
								srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
								alt={item.title}
								loading="lazy"
							/>
							<ImageListItemBar
								title={item.title}
								actionIcon={
									<IconButton
										sx={{ color: "rgba(255, 255, 255, 0.54)" }}
										aria-label={`info about ${item.title}`}
										onClick={() => {
											handleOpen(true, item);
										}}
									>
										<InfoIcon />
									</IconButton>
								}
							/>
						</ImageListItem>
					))}
				</ImageList>
			</div>
            {isShow && content && (
                <BasicModal
                    show={isShow}
                    isShow={setIsShow}
                    content={<Content {...content} />}
                />
            )};
		</>
    );
};

export default Gallery;
