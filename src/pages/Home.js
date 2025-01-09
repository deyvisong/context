// import { useContext } from "react";
import ChangeCounter from "../components/ChangeCounter";
// import { CounterContext } from "../context/CounterContext";

// 4 - refactoring the hook
import { useCounterContext } from "../hooks/useCounterContext";

const Home = () => {
  // const { counter } = useContext(CounterContext);
  const { counter } = useCounterContext();
  return (
    <div>
      <h1>Home</h1>
      <p>Counter value: {counter}</p>
      {/* 3 - changing context value */}
      <ChangeCounter />
    </div>
  );
};

export default Home;
