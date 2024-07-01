import React from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Components/FontAwesome";
import Main from "./Pages/Main";

function App() {

  return (
    <Container fluid="sm" className="pb-5">
      <Main/>
    </Container>
  );
}


export default App;
