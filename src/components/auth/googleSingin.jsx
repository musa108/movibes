import React from "react";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../config/firebase";
import GoogleIcon from "@mui/icons-material/Google";

const GoogleSingin = () => {
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    try {
     const userCredential= await signInWithPopup(auth, provider);
     console.log(userCredential);
      const user = userCredential.user;
      localStorage.setItem("token", user.accessToken);
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/Home");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <button
        onClick={signInWithGoogle}
        className=" w-[250px] p-2 bg-[#000] border border-[#7B7B7B] 
         rounded-md mt-5 flex items-center justify-center gap-1 text-[#fff] text-[14px]"
      >
        <GoogleIcon color="primary" />
        Log in with Google
      </button>
    </div>
  );
};

export default GoogleSingin;
