import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import VideoCameraBackOutlinedIcon from "@mui/icons-material/VideoCameraBackOutlined";
import SmartDisplayOutlinedIcon from "@mui/icons-material/SmartDisplayOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import Ticket_Confirmed from "/src/assets/Ticket Confirmed.svg";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";

const Sidebar = () => {
  const navigate = useNavigate();
  const logOut = async ()=>{
    try {
      await signOut(auth)
      navigate("/login")
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <main className="rounded-r-3xl bg-[#212121] flex flex-col justify-center items-center w-[200px] h-screen ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="80"
        height="80"
        viewBox="0 0 409 143"
        fill="none"
      >
        <path
          d="M66.4339 142.736L53.8409 142.57V62.9843L38.0247 107.823L27.3722 109.583L20.7561 83.6409L14.4613 55.4587L17.7811 82.6461L16.3711 142.096L0.794922 141.9C0.794922 139.225 3.15798 2.75399 3.15798 2.75399H13.5588L31.1569 80.8807L30.2 95.416L49.483 2.75399H62.7194L66.4339 142.736ZM130.22 19.9801L133.168 64.7884L131.455 109.212L120.017 139.496L94.9853 142.735L78.739 112.734L78.6421 39.3857C78.1308 37.4755 85.6226 9.79566 85.6226 9.79566L107.327 0.1875L117.224 2.70869L98.3046 14.8649L87.0361 39.8462L87.3886 92.8532C87.3886 92.8532 95.1979 123.917 95.9924 123.917C96.7868 123.917 106.223 132.327 106.223 132.327L115.798 124.879L123.48 98.7762L126.827 63.7069L121.016 35.3623L107.636 37.9256L99.362 66.4347L102.178 80.0434L112.037 77.6414L107.416 60.5078L113.885 59.0665C113.885 59.0665 116.526 79.9625 116.526 80.6845C116.526 81.2073 109.926 113.351 109.926 113.351L104.379 118.878L99.6262 91.0146L95.6634 66.4365L101.21 29.0407L119.765 9.88209L130.22 19.9801ZM192.925 2.10552L185.837 47.2528H177.071L185.499 49.3935L170.838 142.732L162.455 142.102L137.242 2.10382H153.352L163.846 84.5876L166.174 106.94L165.422 91.9626L178.202 2.10331H192.926L192.925 2.10552ZM228.91 130.045L237.029 130.083L236.464 142.735L207.652 142.685L207.005 131.367L214.164 130.891L214.911 109.429L213.459 30.1491L211.894 58.0786C211.464 43.5087 211.13 27.0826 210.914 16.5413L201.117 16.9487V3.07826L237.917 2.8207L237.352 15.907L228.733 15.7995L228.91 130.045ZM299.521 101.086C300.082 103.008 300.307 118.381 299.18 120.299C298.057 122.221 280.435 142.501 280.435 142.501L270.933 142.693L262.202 142.728L264.031 123.904L265.313 111.394L267.8 99.7255L272.057 89.7869L283.108 96.478L286.812 113.092L280.063 119.276L275.562 118.073L281.326 112.727L273.873 103.48L270.216 120.775L270.569 127.743L273.451 131.144L279.452 130.344L288.311 121.578L292.436 105.406L285.452 91.4354L276.453 81.0276L267.687 78.9867L262.625 87.7841L259.487 111.759C259.487 111.759 257.775 141.832 257.613 141.563V141.848L250.489 142.524C249.927 142.186 250.489 2.86675 250.489 2.86675L270.734 5.265L280.294 12.9513L289.292 31.6873L288.301 36.0917L283.858 29.7657C283.858 29.7657 273.732 17.9128 272.608 17.5939C271.485 17.275 262.111 15.3533 262.111 15.3533L257.048 26.8828V42.2559L267.921 49.3005L276.37 44.4963L280.201 37.7897L272.701 30.5837L267.639 33.0664L273.077 38.5125L269.982 42.2752L262.297 37.7749L263.703 27.7055L266.798 23.3817L278.326 29.5422L287.515 40.5107L278.047 56.6675L266.798 60.9913L279.17 68.6776L289.296 75.4033C289.296 75.4033 295.25 84.869 295.811 86.3105C296.373 87.752 298.96 99.1622 299.522 101.084L299.521 101.086ZM323.659 129.58L348.28 128.32V142.305L308.845 142.735L309.857 86.74L306.231 2.94761L346.617 2.86691L345.529 16.5413L316.964 15.8228L325.168 18.0403L320.435 61.8799L341.179 63.1597L341.822 78.5323L326.284 79.0627L325.277 71.2455L323.659 129.58ZM393.845 21.9556L382.297 16.1379L374.065 21.4457L372.888 33.3828L374.205 40.1661C377.908 44.5242 394.402 70.3579 394.402 70.3579L406.992 92.5454C406.992 92.5454 409.068 119.883 408.998 121.205C408.929 122.527 400.964 139.172 400.964 139.172L380.016 142.742L363.766 135.34L356.564 122.069L360 98.4098L377.37 90.8999L388.565 100.689L390.18 115.685L382.212 124.516L371.97 121.768L372.776 111.68L378.989 108.236L378.745 111.841L374.871 117.526L381.31 116.588L383.963 107.322L376.847 103.009L370.661 108.897L368.336 118.525L369.44 124.889L385.078 128.774L392.667 118.947L394.48 112.475L393.19 96.8216L381.728 73.4468L367.349 54.7188L359.779 30.253L364.622 9.91453L380.6 1.85518L399 7.75053L405.113 16.1363L405.295 33.2117L398.032 44.9833L384.242 44.5528L377.06 32.5465L380.113 24.084L385.439 22.4007L392.338 28.0463L391.257 33.2117L385.075 30.4831L391.621 38.9075L396.134 33.7497L393.845 21.9556Z"
          fill="#3DD2CC"
        />
      </svg>
      <ul className="text-[#666666] w-[200px]  font-[poppins]">
        <li
          className="flex justify-center items-center gap-2 p-4  hover:bg-[#3DD2CC]
         hover:bg-opacity-75 hover:border-r-4 hover:border-[#3DD2CC]"
        >
          <HomeOutlinedIcon />
          Home
        </li>
        <li
          className="flex justify-center items-center gap-2 p-4  hover:bg-[#3DD2CC]
         hover:bg-opacity-75 hover:border-r-4 hover:border-[#3DD2CC]"
        >
          <VideoCameraBackOutlinedIcon />
          Movies
        </li>
        <li
          className="flex justify-center items-center gap-2 p-4  hover:bg-[#3DD2CC]
         hover:bg-opacity-75 hover:border-r-4 hover:border-[#3DD2CC]"
        >
          <SmartDisplayOutlinedIcon />
          Tv Series
        </li>
        <li
          className="flex justify-center items-center gap-2 p-4  hover:bg-[#3DD2CC]
         hover:bg-opacity-75 hover:border-r-4 hover:border-[#3DD2CC]"
        >
          <CalendarMonthOutlinedIcon />
          UpComing
        </li>
      </ul>
      <section
        className="flex flex-col justify-center items-center w-[170px]
       bg-[#191919] rounded-2xl relative mt-6 font-[poppins]"
      >
        <div className="bg-[#3DD2CC] bg-opacity-40 rounded-full p-2 absolute top-[-1rem]">
          <img className="" src={Ticket_Confirmed} alt="ticket-confirmed" />
        </div>
        <div className="w-[137px] mt-12">
          <h1 className="text-[#fff] text-[18px]">
            Play movie quizes and earn free tickets
          </h1>
          <p className="text-[14px] text-[#666666]">
            50k people are playing now
          </p>
        </div>
        <button className="w-[112px] bg-[#3DD2CC] bg-opacity-40 text-[#fff] text-[14px] rounded-full mt-1 mb-2">
          Start Playing
        </button>
      </section>
      <button
       onClick={logOut}
       className="text-[#666666] text=[12px] font-[poppins] flex justify-center items-center mt-3 mb-3">
        <LogoutOutlinedIcon fontSize="small" />
        Log Out
      </button>
    </main>
  );
};

export default Sidebar;
