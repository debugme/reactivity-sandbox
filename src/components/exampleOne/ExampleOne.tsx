import { useSignal } from "@preact/signals-react";
import { useState } from "react";

export const ExampleOne = () => {
  return (
    <div className="flex flex-col gap-4">
      <UseStateExmple />
      <SignalExample />
    </div>
  );
}

const UseStateExmple = () => {
  const [count, setCount] = useState(0);
  const onClick = () => setCount(count + 1); 

  return (
    <div>
      <h4>useState</h4>
      <p>Count: {count}</p>
      <button onClick={onClick}>Increment</button>
    </div>
  );  
}

const SignalExample = () => {
  const count = useSignal(0);
  const onClick = () => count.value++;

  return (
    <div>
      <h4>useSignal example</h4>
      <p>Count: {count}</p>
      <button onClick={onClick}>Increment</button>
    </div>
  );
}