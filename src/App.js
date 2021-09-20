import react from 'react';
import Counter from './Counter';
import CounterHooks from './CounterHooks';
import { useState } from 'react';
export const ThemeContext = react.createContext();

function App() {
  console.log("Render App");
  const [theme, setTheme] = useState("red")
  console.log(theme);
  return (
    <>
      <ThemeContext.Provider value={{ backgroundColor: theme,color:'white' }}>
        Counter
        <Counter init={0} />
        CounterHooks
        <CounterHooks initialCount={0} />
        <button onClick={() => setTheme(pt => {
          return pt === 'red' ? 'blue' : 'red';
        })}>Toggle Theme</button>
      </ThemeContext.Provider>
    </>
  )
}

export default App;
