import React from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoIcon from "@mui/icons-material/Info";
import moonfall from "/src/assets/moonfall.png";
import Movie from "../movie/movie";

const Landing = () => {
  return (
    <main className="font-[poppins]">
      <section className="flex justify-start items-center gap-x-16 mt-2">
        <input
          type="text"
          placeholder="Search for movies, TV shows..."
          className="w-[792px] rounded-full h-10 bg-[#212121] text-[#666666] font-[poppins] font-semibold"
        />
      </section>
      <section className="flex">
        <div className="flex flex-col">
          <div className=" mt-4 relative">
            <img src={moonfall} alt="moonfall" className="w-[792px]" />
            <div className="flex items-center gap-2 text-[#fff] font-[poppins] font-semibold absolute top-[13rem] right-24">
              <button className="flex justify-center items-center bg-[#E8E8E8] bg-opacity-10 p-1 rounded-lg text-sm">
                <PlayArrowIcon fontSize="small" />
                Play
              </button>
              <button className="flex justify-center items-center bg-[#E8E8E8] bg-opacity-10 p-1 rounded-lg text-sm">
                <InfoIcon fontSize="small" />
                More Info
              </button>
            </div>
          </div>
          <div className="">
            <div className=" flex justify-between items-center font-[poppins] font-semibold">
              <h3 className="text-[#fff]">Trending</h3>
              <p className="text-[14px] text-[#666666]">See all</p>
            </div>
          </div>
          <Movie/>
        </div>
      </section>
    </main>
  );
};

export default Landing;
