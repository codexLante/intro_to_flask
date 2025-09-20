import { useEffect, useState } from "react";

import axios from "axios";

function Screen() {
  const dumyData = [
    { id: 1, name: "sam", email: "sam@sam.com" },
    { id: 2, name: "john", email: "john@john.com" },
    { id: 3, name: "cain", email: "cain@john.com" },
  ];

  const [students, SetStudents] = useState([]);
  const [isLoading, setIsLoading] = useState("");

  useEffect(() => {
    setIsLoading(true);
    axios({ method: "GET", url: "http://127.0.0.1:5000/student/list" })
      .then((res) => {
        // console.log(res);
        let newStudents = res?.data?.students;
        console.log(newStudents);
        SetStudents(newStudents);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className=" h-full w-full flex items-center justify-between">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
        <span className=" animate-pulse  text-violet-600 font-semibold">
          {isLoading ? "Loading ..." : ""}
        </span>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Id
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Created At
              </th>
            </tr>
          </thead>
          <tbody>
            {students.map((item, index) => {
              return (
                <tr
                  className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200"
                  key={item.id}
                >
                  <td class="px-6 py-4">{item.id}</td>
                  <td class="px-6 py-4">{item.name}</td>
                  <td class="px-6 py-4">{item.email}</td>
                  <td class="px-6 py-4">{item.created_at}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Screen;