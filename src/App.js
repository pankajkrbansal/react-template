import React from "react";
import NavBar from "./NavBar";
import Hero from "./Hero";
import Discover from "./Discover";
import Feature from "./Feature";
import Counter from "./Counter";

const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Counter/>
      <Discover/>
      <Feature/>
    </div>
  );
};

export default App;
