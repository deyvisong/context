// import { useContext } from "react";
// import { CounterContext } from "../context/CounterContext";

import { useTitleColorContext } from "../hooks/useTitltleColorContext";

import { useCounterContext } from "../hooks/useCounterContext";
const About = () => {
  // const { counter } = useContext(CounterContext);
  const { counter } = useCounterContext();

  // 5 - compltex context
  const { color } = useTitleColorContext();
  return (
    <div>
      <h1 style={{ color: color }}>About</h1>
      <p>Counter value: {counter}</p>
    </div>
  );
};

export default About;
