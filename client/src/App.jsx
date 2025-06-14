import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SuperUserDashboard from "./pages/SuperUserDashboard";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/sudash" element={<SuperUserDashboard />} />
      </Routes>
    </>
  );
}

export default App;
