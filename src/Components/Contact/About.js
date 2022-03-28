import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./About.css";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import { Alert } from "@mui/material";
import { Button } from "@mui/material";

export default function About() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div className="About">
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Your Request
          </Alert>
        </Snackbar>
      </Stack>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 2, width: "30ch" },
          flexDirection: "column",
        }}
        noValidate
        autoComplete="off"
      >
        <h1 className="main">Contact Us</h1>

        <div className="Contact">
          <TextField
            id="outlined-multiline-flexible"
            label=" Full Name "
            multiline
            maxRows={4}
          />
          <TextField
            id="outlined-multiline-flexible"
            label="Email"
            placeholder="abc@gmail.com"
            multiline
            maxRows={4}
          />

          <TextField
            id="outlined-multiline-static"
            label="Message"
            size="large"
            multiline
            s
            rows={10}
          />

          <Button className="abtn" variant="contained" onClick={handleClick}>
            Submit
          </Button>
        </div>
      </Box>
    </div>
  );
}
