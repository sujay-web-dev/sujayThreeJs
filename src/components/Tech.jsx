import React, { useState } from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const [timeoutBool, setimeoutBool] = useState(false);

  setTimeout(() => {
    setimeoutBool(true);
  }, 1000);

  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {timeoutBool &&
        technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
