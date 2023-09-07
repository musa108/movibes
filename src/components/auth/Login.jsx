import React, { useState } from "react";
import { signInWithEmailAndPassword} from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import { auth } from "../config/firebase";
import logo_icon from "/src/assets/logo-icon.png";
import logo from "/src/assets/logo.png";
import GoogleSingin from "./googleSingin";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredential);
      const user = userCredential.user;
      localStorage.setItem("token", user.accessToken);
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/proccesing");
    } catch (error) {
      console.log(error);
    }

  };

  return (
    <main className="flex">
      <section className="bg-[#191919] flex flex-col justify-center items-center   w-[50%] h-[100vh] ">
        <div className="flex items-center ml-8 mt-4">
          <img src={logo_icon} alt="logo_icon" />
          <img src={logo} alt="logo" />
        </div>
        <h1 className="text-[24px] text-[#fff] font-[500]">Welcome back,</h1>
        <p className="text-[#BABABA] font-[500] text-[14px]">
          Welcome back! Please enter your details.
        </p>
        <GoogleSingin/>
        <div className="flex items-center justify-center text-center gap-4 text-[#fff] mt-5">
          <hr className=" w-[100px]" /> or <hr className="w-[100px]" />
        </div>
        <form onSubmit={handleLogin} className=" flex flex-col items-center mt-5 ">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className=" bg-[#191919] border-b-[#7B7B7B] text-[#fff] border-b-[1px] mt-5 w-[250px]"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className=" bg-[#191919] border-b-[#7B7B7B] text-[#fff] border-b-[1px] mt-5 w-[250px]"
          />
          <button
            type="submit"
            className="w-[250px] p-2 bg-[#fff] font-bold rounded-md mt-8"
          >
            Login
          </button>
        </form>
        <p className="text-[#7B7B7B] text-[14px] mt-5 font-semibold">
          Don't have an account?
          <Link to="/signUp" className="text-[#fff]">
             Sign up
          </Link>
        </p>
      </section>
      <section className=" bg-cover bg-center w-[50%] h-[100vph] bg-[url('/src/assets/top-gun-image.png')]">
         
      </section>
    </main>
  );
}

export default Login;
