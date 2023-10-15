import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app.css";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import Hotels from "./pages/hotels/Hotels";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/hotels/:id" element={<Hotel />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
