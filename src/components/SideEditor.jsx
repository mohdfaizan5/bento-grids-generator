import React, { useState } from "react";
import { Input } from "./ui/input";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  box1Atom,
  box2Atom,
  box3Atom,
  box4Atom,
  educationAtom,
  langAtom,
  locationAtom,
  nameAtom,
  picAtom,
  primaryColorAtom,
  professionAtom,
  timezoneAtom,
} from "@/store/atoms/details";
import { Label } from "@radix-ui/react-label";

const themes = [
  {
    name: "orangeBlack",
    primary: "#EA5919",
    secondary: "#EA5919",
    neutral: "#FFFFFF",
    bg: "#E8E8E8",
  },
];

const SideEditor = () => {
  const [name, setName] = useRecoilState(nameAtom);
  const [profession, setProfession] = useRecoilState(professionAtom);
  const [location, setLocation] = useRecoilState(locationAtom);
  const [lang, setLang] = useRecoilState(langAtom);
  const [time, setTime] = useRecoilState(timezoneAtom);
  const [education, setEducation] = useRecoilState(educationAtom);
  const [box1, setBox1] = useRecoilState(box1Atom);
  const [box2, setBox2] = useRecoilState(box2Atom);
  const [box3, setBox3] = useRecoilState(box3Atom);
  const [box4, setBox4] = useRecoilState(box4Atom);
  const setPic = useSetRecoilState(picAtom);

  const [primaryColor, setPrimaryColor] = useRecoilState(primaryColorAtom);
  const root = document.querySelector(":root");
  return (
    <div className="items-center hidden px-5 text-black bg-white border-r-2 md:flex md:flex-col lg:w-96 ">
      <h1 className="py-10 text-4xl font-semibold">Bento Grids</h1>
      <form className="flex flex-col items-center gap-1">
        <Input
          className="w-64"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength={32}
        />
        <Input
          className="w-64"
          placeholder=""
          value={profession}
          onChange={(e) => setProfession(e.target.value)}
        />
        <div className="flex flex-wrap justify-center gap-1">
          <Input
            className="w-32"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <Input
            className="w-32"
            placeholder="Language"
            value={lang}
            onChange={(e) => setLang(e.target.value)}
          />
          <Input
            className="w-32"
            placeholder="Time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
          <Input
            className="w-32"
            placeholder="education"
            value={education}
            onChange={(e) => setEducation(e.target.value)}
          />
        </div>
        <div className="grid w-64 items-center gap-1.5">
          {/* <Label htmlFor="picture">Picture</Label> */}
          <Input
            onChange={(e) => {
              setPic(URL.createObjectURL(e.target.files[0]));
            }}
            accept={"image/jpg, image/jpeg, image/png"}
            id="picture"
            type="file"
          />
        </div>

        {/* <div className="flex">
          <input type="color" className="border-none rounded-full colorInput size-12"/>
          <input type="color" className="border-none rounded-full colorInput size-12"/>
          <input type="color" className="border-none rounded-full colorInput size-12"/>
          <input type="color" className="border-none rounded-full colorInput size-12"/>
        </div> */}

        <h2 className="mt-3 font-semibold text-prim text-md">Themes</h2>
        <div className="flex gap-2">
          <div
            onClick={() => {
              root.style.setProperty("--primary-color", "234, 89, 25");
            }}
          >
            <span className="block h-8 w-7 bg-[#eb4034] rounded-md"></span>
            {/* <span className="block h-7 w-3 bg-[#F8445E]"></span> */}
          </div>
          <div
            onClick={() => {
              root.style.setProperty("--primary-color", "20, 129, 251");
            }}
          >
            <span className="block h-8 w-7 bg-[#1481FB] rounded-md"></span>
            {/* <span className="block h-7 w-3 bg-[#F8445E]"></span> */}
          </div>
          <div
            onClick={() => {
              root.style.setProperty("--primary-color", "161, 145, 252");
            }}
          >
            <span className="block h-8 w-7 bg-[#a191fc] rounded-md"></span>
            {/* <span className="block h-7 w-3 bg-[#F8445E]"></span> */}
          </div>
          <div
            onClick={() => {
              root.style.setProperty("--primary-color", "0, 251, 39");
            }}
          >
            <span className="block h-8 w-7 bg-[#00FB27] rounded-md"></span>
            {/* <span className="block h-7 w-3 bg-[#F8445E]"></span> */}
          </div>
        </div>

        {/* Below */}
        <div className="flex flex-col flex-wrap justify-center gap-1">
          <BoxInput value={box1} setValue={setBox1} />
          <BoxInput value={box2} setValue={setBox2} />
          <BoxInput value={box3} setValue={setBox3} />
          <BoxInput value={box4} setValue={setBox4} />
        </div>
      </form>
    </div>
  );
};

const BoxInput = ({ value, setValue }) => {
  return (
    <div className="flex gap-1">
      <Input
        className="w-32"
        placeholder="..."
        value={value.title}
        onChange={(e) =>
          setValue((prev) => ({ ...prev, title: e.target.value }))
        }
      />
      <Input
        className="w-14"
        type="number"
        placeholder="0"
        value={value.value}
        min={0}
        onChange={(e) =>
          setValue((prev) => ({ ...prev, value: e.target.value }))
        }
      />
    </div>
  );
};

export default SideEditor;
