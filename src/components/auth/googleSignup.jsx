import React from "react";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../config/firebase";
import GoogleIcon from "@mui/icons-material/Google";

const GoogleSignup = () => {
  const navigate = useNavigate();

  const signUpWithGoogle = async () => {
    try {
     const userCredential= await signInWithPopup(auth, provider);
     console.log(userCredential);
      const user = userCredential.user;
      localStorage.setItem("token", user.accessToken);
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/proccesing");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="flex justify-center items-center">
      <button
      onClick={signUpWithGoogle}
        className=" w-[250px] p-2 bg-[#000] border border-[#7B7B7B]
           rounded-md mt-5 items-center gap-1 text-[#fff] text-[14px]"
      >
        <GoogleIcon color="primary" />
        Sign Up With Google
      </button>
    </div>
  );
};

export default GoogleSignup;
