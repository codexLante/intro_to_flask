import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./screen/login";
import StudentDashBoard from "./screen/dashboard";
import StudentAnalytics from "./screen/dashboard/analytics";
import AddStudent from "./screen/dashboard/add";
import ListStudent from "./screen/dashboard/sudentList";

function APP() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Login />}></Route>
        {/* Nested */}
        <Route path="/student" element={<StudentDashBoard />}>
          <Route path="" element={<StudentAnalytics />} />
          <Route path="add" element={<AddStudent />} />
          <Route path="list" element={<ListStudent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default APP;