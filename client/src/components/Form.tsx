import { Box, Button, TextField } from '@mui/material';
import React from 'react';

export const Form = () => {
    return (
        <Box>
            <form>
                <TextField
                    style={{ width: "200px", margin: "5px" }}
                    type="text"
                    label="Name"
                    variant="outlined"
                />
                <br />
                <TextField
                    style={{ width: "200px", margin: "5px" }}
                    type="text"
                    label="Email"
                    variant="outlined"
                />
                <br />
                <TextField
                    style={{ width: "200px", margin: "5px" }}
                    type="text"
                    label="Phone"
                    variant="outlined"
                />
                <br />
                <TextField
                    style={{ width: "200px", margin: "5px" }}
                    type="text"
                    label="Address"
                    variant="outlined"
                />
            </form>
        </Box>
    );
};
