import svg from "/src/assets/processed.svg";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Processed = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const transitionTimeout = setTimeout(() => {
      navigate("/confirmed");
    }, 3000);
    return () => clearTimeout(transitionTimeout);
  }, [navigate]);
  return (
    <div className="flex flex-col justify-center items-center bg-[#191919] h-[100vh]">
      <img src={svg} alt="" />
      <h3 className="text-[18px] text-[#fff] mt-4">Proccesing</h3>
    </div>
  );
};

export default Processed;
