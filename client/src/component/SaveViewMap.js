import MapApp from "./ViewMap";
import React, { useState } from "react";
import html2canvas from "html2canvas";
// import canvasToImage from "canvas-to-image";
import FileSaver from "file-saver";
import { saveAs } from "file-saver";

export default function App(props) {
  const [img, setimg] = useState();
  var expor = (type, name) => {
    var img;
    html2canvas(document.querySelector(`#capture`)).then((canvas) => {
      canvas.toBlob(function (blob) {
        let a = saveAs(blob, "MapProject.png");
        var pngUrl = canvas.toDataURL(); // PNG is the default
        setimg(pngUrl);
        // console.log(typeof pngUrl);
        // props.onClick(pngUrl)
      });
    });
  };
  return (
    <div>
      <div>
        <MapApp
          mapName={props.history.location.state.mapName}
          viewId={props.history.location.state.viewId}
          mapFind={props.history.location.state.mapFind}
          mapMode={props.history.location.state.mapMode}
          property={props.history.location.state.property}
          onClick={() => expor("pdf", "my-content")}
        />
      </div>
    </div>
  );
}
