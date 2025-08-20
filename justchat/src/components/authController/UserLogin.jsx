
import axios from "axios";
import { useState } from "react";

const UserLoginResister = () => {
  const [checkerror, setcheckerror] = useState(false);

  const [state, setstate] = useState("login");

  const [userData, setuserData] = useState({});
  const oninputChange = (e) => {
    const val = e.target.name ==='file'?e.target.files[0]: e.target.value;
    setuserData((prev) => ({ ...prev, [e.target.name]: val }));
  };

  const registerUser = async (e) => {
    e.preventDefault();
};
  console.log(userData);
  return (
    <div className="fixed  top-0 left-0 right-0 bottom-0 z-10 bg-black/50 flex justify-center backdrop-blur-sm items-center">
      <form
        onSubmit={(e) => registerUser(e)}
        action=""
        className="relative bg-white p-10 rounded-xl text-slate-500 "
      >
        {checkerror && (
          <p className="text-red-700 text-center">*invalid credintial*</p>
        )}
        <h1 className="text-center font-blogFont text-4xl tracking-widest mb-3">
          Just<span className="text-orange-300">-Chat</span>
        </h1>
        {/* <h1 className="text-center text-2xl text-neutral-700 font-medium">
          {state}
        </h1> */}
     
        {state !== "login" && (
          <>
            <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-5">
              <img
                src="https://png.pngtree.com/png-vector/20220606/ourmid/pngtree-writing-black-icon-png-png-image_4698425.png"
                width={14}
                alt=""
              />
              <input
                name="name"
                onChange={(e) => oninputChange(e)}
                className="text-sm outline-none"
                type="text"
                placeholder="Full name"
              />
            </div>
          </>
        )}
        <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-4">
          <img
            src="https://png.pngtree.com/element_our/png/20181213/inbox-vector-icon-png_267453.jpg"
            width={14}
            alt=""
          />
          <input
            name="email"
            onChange={(e) => oninputChange(e)}
            className="text-sm outline-none"
            type="email"
            placeholder="Email ID"
          />
        </div>
        <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-4">
          <img
            src="https://png.pngtree.com/png-vector/20190215/ourmid/pngtree-vector-lock-icon-png-image_515444.jpg"
            width={14}
            alt=""
          />
          <input
            name="password"
            onChange={(e) => oninputChange(e)}
            className="text-sm outline-none"
            type="password"
            placeholder="Password"
          />
        </div>
       {state !=='login' &&  <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-4">
          <img
            src="https://png.pngtree.com/png-vector/20190215/ourmid/pngtree-vector-lock-icon-png-image_515444.jpg"
            width={14}
            alt=""
          />
          <input
            name="file"
            onChange={(e) => oninputChange(e)}
            className="text-sm outline-none"
            type="file"
            
          />
        </div>}
        <p className="text-sm text-blue-600 mb-4 mt-1 cursor-pointer">
          Forgot password?
        </p>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-full"
        >
          {state === "login" ? "login" : "create account"}
        </button>
        {state === "login" ? (
          <p onClick={() => setstate("register")} className="mt-5 text-center">
            Don't have an account?{" "}
            <span className="text-blue-600 cursor-pointer">Sign Up</span>
          </p>
        ) : (
          <p  className="mt-5 text-center">
            Already have an account?{" "}
            <span className="text-blue-600 cursor-pointer">login</span>
          </p>
        )}
        {/* <img
          // onClick={() => setshowlogin(false)}
          src={assets.cross_icon}
          className="absolute top-5 right-5 cursor-pointer"
          alt=""
        /> */}
      </form>
    </div>
  );
};

export default UserLoginResister;
