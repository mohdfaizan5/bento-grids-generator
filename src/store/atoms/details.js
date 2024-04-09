import { atom } from "recoil";

export const nameAtom = atom({
  key: "nameAtom",
  default: "Mohammed Faizan",
});
export const professionAtom = atom({
  key: "professionAtom",
  default: "Entrepreneur2",
});

//
export const locationAtom = atom({
  key: "locationAtom",
  default: "India",
});

export const langAtom = atom({
  key: "langAtom",
  default: "English",
});

export const timezoneAtom = atom({
  key: "timezoneAtom",
  default: "IST",
});

export const educationAtom = atom({
  key: "educationAtom",
  default: "Developer",
});

// colors
export const primaryColorAtom = atom({
  key: "primaryColorAtom",
  // default: "#a290fc",
  default: "#00000",
});

//
export const box2Atom = atom({
  key: "box2Atom",
  default: {
    title: "Project",
    value: 12,
  },
});
export const box3Atom = atom({
  key: "box3Atom",
  default: {
    title: "Years",
    value: 2,
  },
});
export const box4Atom = atom({
  key: "box4Atom",
  default: {
    title: "Failed",
    value: 35,
  },
});
export const box1Atom = atom({
  key: "box1Atom",
  default: {
    title: "Startups",
    value: 3,
  },
});

export const picAtom = atom({
  key: "picAtom",
  default: ""
});


