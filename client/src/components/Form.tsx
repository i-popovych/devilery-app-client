import { Box, Button, TextField } from '@mui/material';
import React from 'react';

const Form = () => {
    return (
        <Box>
            <form>
                <TextField
                    style={{ width: "200px", margin: "5px" }}
                    type="text"
                    label="setgoal"
                    variant="outlined"
                />
                <br />
                <TextField
                    style={{ width: "200px", margin: "5px" }}
                    type="text"
                    label="goal description"
                    variant="outlined"
                />
                <br />
                <TextField
                    style={{ width: "200px", margin: "5px" }}
                    type="text"
                    label="Diversity catagory"
                    variant="outlined"
                />
                <br />
                <TextField
                    style={{ width: "200px", margin: "5px" }}
                    type="text"
                    label="Attribute"
                    variant="outlined"
                />
                <br />
                <TextField
                    style={{ width: "200px", margin: "5px" }}
                    type="text"
                    label="goal stage"
                    variant="outlined"
                />
                <br />
                <TextField
                    style={{ width: "200px", margin: "5px" }}
                    type="number"
                    label="job id"
                    variant="outlined"
                />
                <br />
                <TextField
                    style={{ width: "200px", margin: "5px" }}
                    type="text"
                    label="job region"
                    variant="outlined"
                />
                <br />
                <Button variant="contained" color="primary">
                    save
                </Button>
            </form>
        </Box>
    );
};

export default Form;