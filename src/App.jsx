import { BrowserRouter, Routes, Route } from "react-router-dom";
import Messenger from "./pages/Messenger";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Messenger />} />
        
      </Routes>
    </BrowserRouter>
  );
}
