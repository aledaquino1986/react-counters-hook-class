import React, {useState} from "react";
import Counter from "./Counter"
import CounterHooks from "./CounterHooks"
export const ThemeContext = React.createContext();

function App() {

  const [theme, setTheme] = useState("red")
  return ( 
    <ThemeContext.Provider value={{backgroundColor: theme}}>
      <h2>Counter with State</h2>
      <Counter initialCount={0}  />
      <h2>Counter with Hooks</h2>
      <CounterHooks initialCount={0}  />
      <button onClick={() => setTheme(prevTheme => prevTheme === "red" ? "blue" : "red")}>Toggle theme</button>
    </ThemeContext.Provider>
  ) 
}

export default App;
