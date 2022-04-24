import React from "react";
import Cards from "./Cards";

const Feature = () => {
  return (
    <section class="contact bg-success ">
      <div class="container ">
        <h2 class="text-white">We love new friends!</h2>
        <div class="row">
          <div class="col-4">
          <Cards
          title={"Card title"}
          desc={"Some quick example text to build on the card title and make upthe bulk of the card's content."}
          btnDisplay={"Go somewhere"}
            />
          </div>
          <div class="col-4">
          <Cards
          title={"Card title"}
          desc={"Some quick example text to build on the card title and make upthe bulk of the card's content."}
          btnDisplay={"Go somewhere"}
            />
          </div>
          <div class="col-4">
            <Cards
          title={"Card title"}
          desc={"Some quick example text to build on the card title and make upthe bulk of the card's content."}
          btnDisplay={"Go somewhere"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
