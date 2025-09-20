import { useState } from "react";

import axios from "axios";

function Screen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [isLoading, setIsLoading] = useState("");
  const [errorMessage, SetErrorMessage] = useState("");
  const [successMessage, setSucceMessage] = useState("");

  const handleAdd = () => {
    setIsLoading(true);
    SetErrorMessage("");
    setSucceMessage("");
    axios({
      method: "POST",
      url: "http://127.0.0.1:5000/student/add/json",
      data: {
        name,
        email,
      },
    })
      .then((res) => {
        setSucceMessage("Student added.?Add Another");
        setEmail("");
        setName("");
      })
      .catch((e) => {
        console.log("error is", e);
        SetErrorMessage(
          typeof e?.response?.data?.error === "string"
            ? e?.response?.data?.error
            : "Error adding student try again"
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className=" h-full w-full flex justify-center items-center">
      <div className="w-[80%] md:w-[40%] rounded-md shadow-md flex-col gap-y-2 p-4">
        <div className=" flex justify-center">
          <span className=" text-4xl font-semibold text-violet-800">
            Add Student
          </span>
        </div>
        <div className=" flex flex-col">
          <label>Email</label>
          <input
            type="email"
            required={true}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className=" flex flex-col">
          <label>Name</label>
          <input
            type="text"
            required={true}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className=" w-full flex justify-center mt-4">
          <button
            onClick={handleAdd}
            className=" rounded-md text-white bg-violet-800 hover:opacity-50 cursor-pointer py-2 px-4"
          >
            Add
          </button>
        </div>
        <div>
          <span className=" animate-pulse  text-violet-600 font-semibold">
            {isLoading ? "Loading ..." : ""}
          </span>
          <span className="    text-red-500">
            {errorMessage ? errorMessage : ""}
          </span>
          <span className="    text-violet-600">
            {successMessage ? successMessage : ""}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Screen;