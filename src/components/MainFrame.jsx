import React from "react";
import { IoAddCircle } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { MdAccessTimeFilled } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";
import faizanPP from "../assets/faizan-profile-pic.png";
import { useRecoilValue } from "recoil";
import {
  educationAtom,
  langAtom,
  locationAtom,
  nameAtom,
  picAtom,
  primaryColorAtom,
  professionAtom,
  timezoneAtom,
} from "@/store/atoms/details";

const MainFrame = () => {
  const name = useRecoilValue(nameAtom);
  const profession = useRecoilValue(professionAtom);
  const location = useRecoilValue(locationAtom);
  const lang = useRecoilValue(langAtom);
  const time = useRecoilValue(timezoneAtom);
  const pic = useRecoilValue(picAtom);
  const education = useRecoilValue(educationAtom);
  const primaryColor = useRecoilValue(primaryColorAtom);

  return (
    <div className="flex flex-col items-center max-w-[400px] p-4 gap-4 font-Manrope bg-[#050505] rounded-2xl z-10">
      <section className="flex flex-col gap-3 p-4  rounded-xl bg-[#101010]">
        <div className="flex gap-2">
          <img
            src={pic ? pic : faizanPP}
            // src="https://framerusercontent.com/images/qwgsLRrKEdTUOWnmRQWb0Utxdh8.png"
            className="object-contain object-center w-24 rounded-xl"
          />
          <div>
            <div className="flex items-center  bg-[#191919] rounded-lg px-1 gap-2 justify-center w-auto py-1">
              <span className="block w-2 h-2 bg-red-400 rounded-full animate-pulse"></span>
              <h4 className="text-sm text-[#999999] flex">Available To Work</h4>
            </div>
            <h4 className="text-[#e6e6e6] font-semibold text-2xl">{name}</h4>
            <h6 className="font-light text-sm text-[#999999]">
              I'm a{" "}
              <span className={`text-[${primaryColor}] font-medium`}>
                {profession}
              </span>
            </h6>
          </div>
        </div>
        <div className="flex flex-wrap gap-1">
          <Label data={location} icon={<FaLocationDot />} />
          <Label data={lang} icon={<IoAddCircle />} />
          <Label data={time} icon={<MdAccessTimeFilled />} />
          <Label data={education} icon={<FaGraduationCap />} />
        </div>
        <div></div>
      </section>
      <section className="grid grid-cols-2 gap-2">
        <SmallBox title={"12"} desc={"Projects"} className="faizan" />
        <SmallBox title={"2"} desc={"Years"} />
        <SmallBox title={"3"} desc={"Startups"} />
        <SmallBox title={"35"} desc={"Failed"} className="faizan" />
      </section>
    </div>
  );
};
// #050505

const Label = ({ data, icon }) => {
  return (
    <span className="px-3 border border-[#191919] text-[#cccccc] bg-[#191919] h-7 flex items-center rounded-xl gap-1 text-sm">
      {icon ? icon : <IoAddCircle />}
      {data}
    </span>
  );
};

const SmallBox = ({ className, title, desc }) => {
  return (
    <div
      className={`rounded-xl h-[100px] w-[176px] p-[10px] bg-[#101010] flex flex-col justify-between items-center ${
        className ? className : ""
      }`}
    >
      <div className="flex items-center">
        <h3 className="inline-block text-5xl font-bold text-transparent bg-gradient-to-b from-[#A191FC]  bg-clip-text ">
          {title}
        </h3>
        <span className="text-[#A191FC] font-semibold text-xl">+</span>
      </div>
      <div className={"text-[#cccccc] font-semibold"}>{desc}</div>
      <div></div>
    </div>
  );
};

export default MainFrame;
