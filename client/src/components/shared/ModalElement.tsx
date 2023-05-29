import React, {FC} from 'react';
import {Box, Button, Modal, Typography} from "@mui/material";

interface Props {
    onClose: () => void
    open: boolean
    title: string
    description: string
}

export const ModalElement: FC<Props> = ({open, onClose, title, description}) => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 430,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };


    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    {title}
                </Typography>
                <Typography id="modal-modal-description" sx={{mt: 2}}>
                    {description}
                </Typography>
                <Button onClick={onClose} sx={{margin: "15px 0px -10px -8px"}}>Close</Button>
            </Box>
        </Modal>
    );
};
