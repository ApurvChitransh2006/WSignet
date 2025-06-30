import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SuperUserDashboard from "./pages/SuperUserDashboard";
import UserDashboard from "./pages/UserDashPage/UserDashboard";
import MainDashHome from "./pages/UserDashPage/MainDashHome";
import UploadDb from "./pages/UserDashPage/UploadDb";
import ReportGeneration from "./pages/UserDashPage/ReportGeneration";
import ProtectedRoutes from "./pages/ProtectedRoutes";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/dash" element={<ProtectedRoutes/>}>
          <Route path="sudash" element={<SuperUserDashboard />} />
          <Route path="udash" element={<UserDashboard />}>
            <Route index element={<MainDashHome />} />
            <Route path="uploaddb" element={<UploadDb />} />
            <Route path="report" element={<ReportGeneration />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
