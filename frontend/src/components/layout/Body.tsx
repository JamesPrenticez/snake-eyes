import React, { type ReactElement, type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Body = ({ children }: Props): ReactElement => {
  return (
    <div className="w-full max-w-7xl mx-auto min-h-screenNav bg-white pt-12 px-4">
      {children}
    </div>
  );
};

export default Body;
