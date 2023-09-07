import React from "react";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../config/firebase";
import GoogleIcon from "@mui/icons-material/Google";

const GoogleSignup = () => {
  const navigate = useNavigate();

  const signUpWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate("/proccesing");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <button
      onClick={signUpWithGoogle}
        className=" w-[250px] p-2 bg-[#000] border border-[#7B7B7B]
           rounded-md mt-5 flex justify-center ml-[7.7rem] items-center gap-1 text-[#fff] text-[14px]"
      >
        <GoogleIcon color="primary" />
        Sign Up With Google
      </button>
    </div>
  );
};

export default GoogleSignup;
