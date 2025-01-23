import { BrowserRouter, Routes, Route } from "react-router-dom";
import Components from "./pages/Components";
import CodeDisplay from "./pages/Demo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Components />} />
        <Route path="/demo" element={<CodeDisplay />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
