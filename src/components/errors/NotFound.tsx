import * as React from "react";
import { Link } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";  
import Container from "@mui/material/Container";

export default function NoMatch() {
  return (
    <div>
        <CssBaseline />
        <Container maxWidth="xl">
          <h2>Nothing to see here!</h2>
          <p>
            <Link to="/">Go to the home page</Link>
          </p>
        </Container>
    </div>
  )
}
