function Screen() {
  return (
    <div className=" w-screen h-screen flex items-center justify-center">
      <div className="w-[80%] md:w-[40%] rounded-md shadow-md flex-col gap-y-2 p-4">
        <div className=" flex justify-center">
          <span className=" text-4xl font-semibold text-violet-800">Login</span>
        </div>
        <div className=" flex flex-col">
          <label>Email</label>
          <input
            type="email"
            required={true}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className=" flex flex-col">
          <label>Password</label>
          <input
            type="password"
            required={true}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className=" w-full flex justify-center mt-4">
          <button className=" rounded-md text-white bg-violet-800 hover:opacity-50 cursor-pointer py-2 px-4">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Screen;