import React from "react";
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from "html-to-image";
import MainFrame from "./components/MainFrame";
import SideEditor from "./components/SideEditor";
import MobileEditor from "./components/MobileEditor";



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

    // htmlToImage
    //   .toPng(document.getElementById("my-node"))
    //   .then(function (dataUrl) {
    //     download(dataUrl, "my-node.png");
    //   });
    // htmlToImage
    //   .toPng(node)
    //   .then(function (dataUrl) {
    //     var img = new Image();
    //     img.src = dataUrl;
    //     document.body.appendChild(img);
    //   })
    //   .catch(function (error) {
    //     console.error("oops, something went wrong!", error);
    //   });
  };
  return (
    <div className="flex min-h-screen text-white">
      <SideEditor display={"hidden"}/>
      <div className="flex flex-col items-center justify-center w-full">
        <div id="my-node" className="ml-32 pattern w-[800px]">
          <MainFrame />
        </div>
        <div>
          <button
            onClick={() => downImg()}
            className="px-3 py-2 mt-10 text-[#cccccc] font-semibold text-muted bg-[#101010] border rounded-full"
          >
            Download
          </button>
          
          <button
            className="px-3 py-2 mt-10 text-[#cccccc] font-semibold text-muted bg-[#101010] border rounded-full"
          >
          Made with 💖 by <a href="https://twitter.com/mohdfaizan_5" target="_blank" className="underline">MohdFaizan5</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
