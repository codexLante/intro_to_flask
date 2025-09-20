import { Outlet } from "react-router-dom";

import { useNavigate } from "react-router-dom";

function MainDash() {
  return (
    <div className=" flex h-screen w-screen">
      <SideBar />
      <div className=" flex-1 h-screen p-4">
        <Outlet />
      </div>
    </div>
  );
}

function SideBar() {
  const navigate = useNavigate();
  return (
    <div className="w-fit p-4 h-screen flex flex-col gap-y-4 bg-gray-500 rounded-r-md">
      <button
        onClick={() => navigate("/student")}
        class=" cursor-pointer active:opacity-50 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Analytics
      </button>
      <button
        onClick={() => navigate("/student/add")}
        class=" cursor-pointer active:opacity-50 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add Student
      </button>
      <button
        onClick={() => navigate("/student/list")}
        class="cursor-pointer active:opacity-50 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        List Student
      </button>
    </div>
  );
}

export default MainDash;