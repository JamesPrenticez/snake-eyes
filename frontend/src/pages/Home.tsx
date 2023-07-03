import React, { type ReactElement } from "react";
import Body from "../components/layout/Body";
import ThreeCards from "../components/common/ThreeCards";

const Home = (): ReactElement => {
  return (
    <Body>
      <h1>Home</h1>
      <h2>Feeling Lucky? Test your luck against roll of the dice and win today</h2>
      <div className="mt-36">
        <ThreeCards />
      </div>
    </Body>
  );
};

export default Home;
