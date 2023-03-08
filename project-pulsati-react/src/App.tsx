import { useState } from "react";
import Header from "./pages/components/header/header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
    </div>
  );
}

export default App;
