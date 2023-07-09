import React, { type ReactElement } from "react";
import Body from "../components/layout/Body";
import { Icon } from "../components/icons/Icon";

const About = (): ReactElement => {
  return (
    <Body>
      <h1>About</h1>
      <Icon src="./icons/moneyBag.svg" width={50} />
      <Icon src="./icons/flyingMoney.svg" width={50} />
      <Icon src="./icons/coinStack.svg" width={50} />
    </Body>
  );
};

export default About;
