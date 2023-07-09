import React, { type ReactElement } from "react";
import Body from "../components/layout/Body";
import ThreeCards from "../components/common/ThreeCards";

const Home = (): ReactElement => {
  return (
    <Body>
      <div className=" max-w-5xl mx-auto">
        <div className="mt-12 space-y-12">
          <div className="text-center font-bold">
            {/* <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-700/5 to-sky-400/95"> */}
            <h2 className="text-7xl font-extrabold text-transparent bg-clip-text" style={{backgroundImage: "linear-gradient(52deg, #1cd689  3%, #22cfaf  97%)" }}>
              Feeling Lucky? 
            </h2>
            <h2 className="text-2xl text-gray-400 font-normal">
              Test your luck against roll of the dice and win 
            </h2>
          </div>
          <ThreeCards />
        </div>
      </div>
    </Body>
  );
};

export default Home;

// https://mantine.dev/
// Greyclif CF
// convert to svg to reduce initial load on home page
// linear-gradient(52deg, #1c7ed6 3%, #22b8cf 97%)
