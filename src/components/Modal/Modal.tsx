import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";

//Types
import { ModalProps } from "./types";

const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "fit-content",
    p: 4,
};

const BasicModal: React.FC<ModalProps> = ({ show, isShow, content }) => {
    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={show}
                onClose={() => isShow(false)}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={show}>
                    <Box sx={style}>
                        {content}
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
};

export default BasicModal;
