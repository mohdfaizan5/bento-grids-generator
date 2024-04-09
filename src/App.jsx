import React from "react";
// import * as htmlToImage from "html-to-image";
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from "html-to-image";
import MainFrame from "./components/MainFrame";
import SideEditor from "./components/SideEditor";

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
      <SideEditor />
      <div className="flex flex-col items-center w-full">
        <button
          onClick={() => downImg()}
          className="px-2 py-1 mt-10 text-black bg-white border rounded-full"
        >
          Download
        </button>
        <div id="my-node" className="mx-auto pattern max-w-fit">
          <MainFrame />
        </div>
      </div>
    </div>
  );
};

export default App;
