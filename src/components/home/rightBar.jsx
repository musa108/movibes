import React from "react";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";

const RightBar = () => {
  return (
    <main className="">
      <div className="flex justify-center items-center gap-4">
        <div className="bg-[#212121] rounded-full text-[12px] p-3">
          <NotificationsOutlinedIcon color="success" />
        </div>
        <img className="rounded-full w-[50px] h-[50px]" src="" alt="" />
      </div>
      <div className=" mt-2 ">
          <div className=" flex justify-center items-center gap-4">
            <h3 className="font-medium text-[#fff]">Categories</h3>
            <p className="text-[14px] text-[#666666]">Uncheck all</p>
          </div>
          <ul className="bg-[#666666] bg-opacity-30 rounded-2xl p-2 font-[poppins] font-medium mt-4">
            <li className="flex justify-between items-center text-[#fff] text-[14px] p-1 border-b-2 border-[#666666]">
              Action <CheckBoxIcon color="primary" />
            </li>
            <li className="flex justify-between items-center text-[#fff] text-[14px] p-1 border-b-2 border-[#666666]">
              Adventure <CheckBoxIcon color="primary" />
            </li>
            <li className="flex justify-between items-center text-[#fff] text-[14px] p-1 border-b-2 border-[#666666]">
              Animated <CheckBoxIcon color="primary" />
            </li>
            <li className="flex justify-between items-center text-[#fff] text-[14px] p-1 border-b-2 border-[#666666]">
              Comedy <CheckBoxIcon color="primary" />
            </li>
            <li className="flex justify-between items-center text-[#fff] text-[14px] p-1 border-b-2 border-[#666666]">
              Crime <CheckBoxIcon color="primary" />
            </li>
            <li className="flex justify-between items-center text-[#fff] text-[14px] p-1 border-b-2 border-[#666666]">
              Fantasy <CheckBoxIcon color="primary" />
            </li>
            <li className="text-center text-[#666666]">See more</li>
          </ul>

          <div className=" flex justify-center items-center gap-6 mt-4">
            <h3 className="font-medium text-[#fff]">Services</h3>
            <p className="text-[14px] text-[#666666]">Uncheck all</p>
          </div>
          <ul className="bg-[#666666] bg-opacity-30 rounded-2xl p-2 font-[poppins] font-medium mt-4">
            <li className="flex justify-between items-center text-[#fff] text-[14px] p-1 border-b-2 border-[#666666]">
              Netflix <CheckBoxIcon color="primary" />
            </li>
            <li className="flex justify-between items-center text-[#fff] text-[14px] p-1 border-b-2 border-[#666666]">
              Prime video <CheckBoxIcon color="primary" />
            </li>
            <li className="flex justify-between items-center text-[#fff] text-[14px] p-1 border-b-2 border-[#666666]">
              Disney + <CheckBoxIcon color="primary" />
            </li>
            <li className="flex justify-between items-center text-[#fff] text-[14px] p-1 border-b-2 border-[#666666]">
              HBO max <CheckBoxIcon color="primary" />
            </li>
            <li className="flex justify-between items-center text-[#fff] text-[14px] p-1 border-b-2 border-[#666666]">
              Hulu <CheckBoxIcon color="primary" />
            </li>
            <li className="flex justify-between items-center text-[#fff] text-[14px] p-1 border-b-2 border-[#666666]">
              Starz <CheckBoxIcon color="primary" />
            </li>
            <li className="text-center text-[#666666]">See more</li>
          </ul>

          <ul className=" p-2 font-[poppins] font-medium">
            <li className="flex justify-between items-center p-1 text-[#fff]">
              Filters <ExpandMoreIcon />
            </li>
            <li className="flex justify-between items-center p-1 text-[#fff]">
              Mood <ExpandMoreIcon />
            </li>
            <li className="flex justify-between items-center p-1 text-[#fff]">
              Year <ExpandMoreIcon />
            </li>
            <li className="flex justify-between items-center p-1 text-[#fff]">
              Language <ExpandMoreIcon />
            </li>
            <li className="flex justify-between items-center p-1 text-[#fff]">
              Age rating <ExpandMoreIcon />
            </li>
          </ul>
        </div>
    </main>
  );
};

export default RightBar;
