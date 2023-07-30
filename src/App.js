import React, { useState, useEffect } from "react";
import AppNavbar from "./AppNavbar";
import ColorBox from "./ColorBox";
import { Container } from "react-bootstrap";
import TestBox from "./TestBox";
import "./colorbox.css";

const App = () => {
  const [NewColor, serNewColor] = useState();
  useEffect(() => {
    serNewColor("red");
  }, []);
  const changeColor = (e) => {
    serNewColor(e.target.value);
    console.log(NewColor);
  };
  return (
    <>
      <Container>
        <AppNavbar newColor={NewColor}/>
        <ColorBox NewColor={NewColor} />
        <TestBox changeColor={changeColor} />
        <AppNavbar newColor={NewColor} />
      </Container>
    </>
  );
};

export default App;
