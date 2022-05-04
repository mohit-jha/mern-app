// import MapApp from "./MapApp";
// import React, { useState } from "react";
// import html2canvas from "html2canvas";
// // import canvasToImage from "canvas-to-image";
// import { saveAs } from "file-saver";
// export default function App(props) {
//   const [img, setimg] = useState();

//   var expor = (type, name) => {
//     var img;
//     html2canvas(document.querySelector(`#capture`)).then((canvas) => {
//       canvas.toBlob(function (blob) {
//         let a = saveAs(blob, "MapProject.png");
//         var pngUrl = canvas.toDataURL(); // PNG is the default
//         setimg(pngUrl);
//         console.log(typeof pngUrl);
//         // props.onClick(pngUrl);
//       });
//     });
//   };

//   const saveImage = () => {
//     expor("pdf", "my-content");
//   };

//   return (
//     <div>
//       <div>
//         {/* <button onClick={saveImage}>click me now</button> */}
//         <MapApp
//         property={props.property} 
//           MapUpdate={props.MapUpdate}
//           NameOfMapData={props.NameOfMapData}
//           userViewId={props.userViewId}
//           login={props.login}
//           handleClick={props.handleClick}
//           onClickMapForSaveImg={props.onClickMapForSaveImg}
//           onClick={saveImage}
//         />
//       </div>
//     </div>
//   );
// }
