// import { useContext } from "react";
import ChangeCounter from "../components/ChangeCounter";
// import { CounterContext } from "../context/CounterContext";

// 4 - refactoring the hook
import { useCounterContext } from "../hooks/useCounterContext";

// 5 - complex context
import { useTitleColorContext } from "../hooks/useTitltleColorContext";

const Home = () => {
  // const { counter } = useContext(CounterContext);
  const { counter } = useCounterContext();

  // 5 - complex context
  const { color } = useTitleColorContext();
  console.log(color);
  return (
    <div>
      <h1 style={{ color: color }}>Home</h1>
      <p>Counter value: {counter}</p>
      {/* 3 - changing context value */}
      <ChangeCounter />
    </div>
  );
};

export default Home;
