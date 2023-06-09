import { Routes, Route } from "react-router-dom";
import Dash from "./App/Dash";
import Browse from "./App/Browse";
import Profile from "./App/Profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dash />} />
      <Route path="/browse" element={<Browse />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
