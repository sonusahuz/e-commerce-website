import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { productAction } from "../store/productSlice";
import { Spinner } from "@material-tailwind/react";
export default function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email === "") {
      alert("Please enter valid email");
    } else if (password === "") {
      alert("Please enter valid password");
    } else if (!email.includes("@gmail.com")) {
      alert("Please includes @ in your email");
    } else if (password.length < 6) {
      alert("Password must be 8 letter");
    } else {
      setLoading(true);
      createUserWithEmailAndPassword(auth, email, password).then(() => {
        navigate("/login");
        setLoading(false);
        dispatch(productAction.setLogin(false));
        alert(`Account successfully created Please Login Your Account"`);
      });
    }
  };

  return (
    <div className="flex items-center justify-center mx-auto h-[96.5vh] image">
      <div className="flex items-center bg-white flex-col justify-center w-[400px] h-[400px] rounded shadow-lg mx-auto">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold py-2 dark:text-black">Sign up</h1>
        </div>
        <form action="" onSubmit={handleSubmit}>
          <div className="flex flex-col justify-center items-center">
            <div className="flex items-center justify-center flex-col gap-6 w-full">
              <input
                type="text"
                className="border-2 w-[350px] text-sm rounded-lg px-2 p-3"
                placeholder="Email "
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <input
                type="password"
                className="border-2 w-[350px] text-sm rounded-lg px-2 p-3"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <button className="w-[350px] bg-black text-white p-3 rounded">
                {loading ? (
                  <Spinner
                    color="blue"
                    className="flex items-center text-white justify-center mx-auto"
                  />
                ) : (
                  "Sign up"
                )}
              </button>
              <small className=" dark:text-black">
                Already have an account{" "}
                <NavLink className="font-bold" to={"/login"}>
                  Login
                </NavLink>
              </small>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
