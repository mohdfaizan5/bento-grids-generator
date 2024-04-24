import React from "react";
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from "html-to-image";
import MainFrame from "./components/MainFrame";
import SideEditor, { EditorCore } from "./components/SideEditor";
import MobileEditor from "./components/MobileEditor";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "./components/ui/button";

const App = () => {
  const downImg = () => {
    toPng(document.getElementById("my-node"), { width: 600 }).then(function (
      dataUrl
    ) {
      var link = document.createElement("a");
      link.download = "my-image-name.png";
      link.href = dataUrl;
      console.log(dataUrl);
      link.click();
    });
  };
  return (
    <div className="flex flex-col min-h-screen text-white md:flex-row">
      <section className="md:hidden">
        <Drawer>
          <DrawerTrigger asChild>
            <Button className="flex mx-auto my-2">Edit details</Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Are you absolutely sure?</DrawerTitle>
              <DrawerDescription>
                  <EditorCore/>
              </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>

              <DrawerClose>
                <Button >Save changes</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </section>
      <SideEditor />
      <div className="flex flex-col items-center justify-center w-full">
        <div id="my-node" className="md:ml-32 pattern ">
          <MainFrame />
        </div>
        <div>
          <button
            onClick={() => downImg()}
            className="px-3 py-2 mt-10 text-[#cccccc] font-semibold text-muted bg-[#101010] border rounded-full"
          >
            Download
          </button>

          <button className="px-3 py-2 mt-10 text-[#cccccc] font-semibold text-muted bg-[#101010] border rounded-full">
            Made with 💖 by{" "}
            <a
              href="https://twitter.com/mohdfaizan_5"
              target="_blank"
              className="underline"
            >
              MohdFaizan5
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
