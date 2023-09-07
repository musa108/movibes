import React, { useState } from "react";
import logo_icon from "/src/assets/logo-icon.png";
import logo from "/src/assets/logo.png";
import { createUserWithEmailAndPassword} from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import { auth} from "../config/firebase";
import GoogleSignup from "./googleSignup";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
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
    <main className="flex ">
      <section className=" bg-cover bg-center  w-[75%] h-[100vh]  bg-[url('/src/assets/bg-image.png')]">
        <div className="flex items-center ml-8 mt-4">
          <img src={logo_icon} alt="" />
          <img src={logo} alt="" />
        </div>

        <div className="mt-[10rem] ml-8 text-[#fff] font-sans">
          <h3 className=" text-[24px] font-[500]">
            Benefits of your free IMDb account
          </h3>
          <div className="mt-5">
            <h1 className="text-[16px] font-[500]">
              Personalized Recommendations
            </h1>
            <p className="text-[12px]">Discover shows you'll love.</p>
          </div>
          <div className="mt-4">
            <h1 className="text-[16px] font-[500]">Your Ratings</h1>
            <p className="text-[12px]">
              Rate and remember everything you've seen.
            </p>
          </div>

          <div className="mt-4">
            <h1 className="text-[16px] font-[500]"> Contribute to IMDb</h1>
            <p className="text-[12px]">
              Add data that will be seen by millions of people and get cool
              badges.
            </p>
          </div>
        </div>
      </section>
      <section className=" bg-[#191919] w-[50%]">
        <div className="mt-20 flex flex-col items-center">
          <h1 className="text-[22px] text-white font-[500]">
            Create An Account
          </h1>
          <p className="text-[#BABABA] font-[sans]">
            Let's get started with your 30 days free trial.
          </p>
        </div>

        <form
          onSubmit={handleSignUp}
          className="flex flex-col items-center mt-10"
        >
          <input
            type="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            className=" bg-[#191919] border-b-[#7B7B7B] text-[#fff] border-b-[1px] w-[250px]"
          />

          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className=" bg-[#191919] border-b-[#7B7B7B] text-[#fff] border-b-[1px] mt-5 w-[250px]"
          />
          <button
            type="submit"
            className=" w-[250px] p-2 bg-[#fff] font-bold rounded-md mt-8 "
          >
            Create account
          </button>
        </form>
        <GoogleSignup/>
          <p className="text-[#7B7B7B] flex justify-center items-center text-[14px] mt-5 font-semibold">
            Already have an account?
            <Link to="/login" className="text-[#fff]">
              Log in
            </Link>
          </p>
      </section>
    </main>
  );
};

export default SignUp;
