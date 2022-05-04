// import {
//   BR,
//   AN,
//   AR,
//   AP,
//   AS,
//   CH,
//   CT,
//   DL,
//   DD,
//   GA,
//   GJ,
//   HR,
//   HP,
//   JK,
//   JH,
//   KA,
//   KL,
//   MP,
//   MH,
//   MN,
//   ML,
//   MZ,
//   NL,
//   OR,
//   PB,
//   RJ,
//   SK,
//   TN,
//   TG,
//   TR,
//   UT,
//   UP,
//   WB,
//   PY,
//   LA,
//   LD,
//   DN,
// } from "../AllMapData";
// import React, { useState, useEffect } from "react";
// import { useHistory } from "react-router";
// import { Modal } from "react-bootstrap";
// import Button from "@material-ui/core/Button";
// import SaveAltIcon from "@material-ui/icons/SaveAlt";
// import ReplayIcon from "@material-ui/icons/Replay";
// import { min, max, scaleLinear } from "d3";
// import ReactTooltip from "react-tooltip";
// import Tooltip from "@material-ui/core/Tooltip";
// import { connect } from "react-redux";
// import {
//   ComposableMap,
//   Geographies,
//   Geography,
//   ZoomableGroup,
// } from "react-simple-maps";
// import SaveIcon from "@material-ui/icons/Save";
// import { updateItem } from "../actions/itemActions";
// import RangeInput from "./RangeInput";
// import "../App.css";
// import html2canvas from "html2canvas";
// import { saveAs } from "file-saver";
// const INDIA_TOPO_JSON = require("../maps/INDIA_STATES copy.json");

// const PROJECTION_CONFIG = {
//   scale: 350,
//   center: [78.9629, 22.5937], // always in [East Latitude, North Longitude]
// };
// function App(props) {

//   const [Range, setRange] = useState({
//     AP: "1",
//     AR: "2",
//     AS: "3",
//     BR: "4",
//     CT: "5",
//     GA: "6",
//     GJ: "7",
//     HR: "6",
//     HP: "7",
//     JH: "9",
//     KA: "8",
//     KL: "10",
//     MP: "11",
//     MH: "12",
//     MN: "13",
//     ML: "14",
//     MZ: "15",
//     NL: "16",
//     OR: "17",
//     PB: "18",
//     RJ: "19",
//     SK: "20",
//     TN: "21",
//     TG: "22",
//     TR: "23",
//     UT: "24",
//     UP: "25",
//     WB: "26",
//     AN: "27",
//     CH: "28",
//     DN: "29",
//     DD: "30",
//     DL: "31",
//     JK: "32",
//     LA: "33",
//     LD: "34",
//     PY: "35",
//   });

//   const [tooltipContent, setTooltipContent] = useState("");
//   const [data, setData] = useState([
//     { id: "AP", st_nm: "Andhra Pradesh", value: 4 },
//     { id: "AR", st_nm: "Arunachal Pradesh", value: 2 },
//     { id: "AS", st_nm: "Assam", value: 3 },
//     { id: "BR", st_nm: "Bihar", value: 4 },
//     { id: "CT", st_nm: "Chhattisgarh", value: 8 },
//     { id: "GA", st_nm: "Goa", value: 21 },
//     { id: "GJ", st_nm: "Gujarat", value: 22 },
//     { id: "HR", st_nm: "Haryana", value: 9 },
//     { id: "HP", st_nm: "Himachal Pradesh", value: 24 },
//     { id: "JH", st_nm: "Jharkhand", value: 26 },
//     { id: "KA", st_nm: "Karnataka", value: 27 },
//     { id: "KL", st_nm: "Kerala", value: 29 },
//     { id: "MP", st_nm: "Madhya Pradesh", value: 2 },
//     { id: "MH", st_nm: "Maharashtra", value: 10 },
//     { id: "MN", st_nm: "Manipur", value: 11 },
//     { id: "ML", st_nm: "Meghalaya", value: 59 },
//     { id: "MZ", st_nm: "Mizoram", value: 12 },
//     { id: "NL", st_nm: "Nagaland", value: 59 },
//     { id: "OR", st_nm: "Odisha", value: 69 },
//     { id: "PB", st_nm: "Punjab", value: 17 },
//     { id: "RJ", st_nm: "Rajasthan", value: 13 },
//     { id: "SK", st_nm: "Sikkim", value: 22 },
//     { id: "TN", st_nm: "Tamil Nadu", value: 31 },
//     { id: "TG", st_nm: "Telangana", value: 41 },
//     { id: "TR", st_nm: "Tripura", value: 14 },
//     { id: "UT", st_nm: "Uttarakhand", value: 47 },
//     { id: "UP", st_nm: "Uttar Pradesh", value: 75 },
//     { id: "WB", st_nm: "West Bengal", value: 17 },
//     { id: "AN", st_nm: "Andaman and Nicobar Islands", value: 45 },
//     { id: "CH", st_nm: "Chandigarh", value: 28 },
//     { id: "DN", st_nm: "Dadra and Nagar Haveli", value: 19 },
//     { id: "DD", st_nm: "Daman and Diu", value: 20 },
//     { id: "DL", st_nm: "Delhi", value: 59 },
//     { id: "JK", st_nm: "Jammu and Kashmir", value: 25 },
//     { id: "LA", st_nm: "Ladakh", value: 7 },
//     { id: "LD", st_nm: "Lakshadweep", value: 6 },
//     { id: "PY", st_nm: "Puducherry", value: 5 },
//   ]);
//   const [colorMin, setcolorMin] = useState("#E8BABA");
//   const [colorMax, setcolorMax] = useState("#DC0404	");
//   const [smShow, setSmShow] = useState(false);
//   const [NameOfMap, setNameOfMap] = useState(INDIA_TOPO_JSON);
//   const [LastClick, setLastClick] = useState();
//   const [MapReturn, setMapReturn] = useState(false);
//   const [mapFind, setmapFind] = useState(props.mapFind);
//   const [Zoom, setZoom] = useState(1)
//   const history = useHistory();
//   const mapHide = props.updateMapCheck;
//   const viewId = props.viewId;
//   const [img, setimg] = useState();
//   const mapName = props.mapName;
//   const mapbool = props.mapFind;
//   const login = props.login;
//   const [submit, setsubmit] = useState(false);

//   useEffect(() => {
//     if (MapReturn) {
//       setNameOfMap(INDIA_TOPO_JSON);
//     }
//     if (mapFind) {
//       if (mapName == "BR") {
//         setNameOfMap(BR);
//         setZoom(2)
//       } else if (mapName == "AN") {
//         setNameOfMap(AN);
//       } else if (mapName == "AR") {
//         setNameOfMap(AR);
//       } else if (mapName == "AP") {
//         setNameOfMap(AP);
//       } else if (mapName == "AS") {
//         setNameOfMap(AS);
//       } else if (mapName == "CH") {
//         setNameOfMap(CH);
//       } else if (mapName == "CT") {
//         setNameOfMap(CT);
//       } else if (mapName == "DL") {
//         setNameOfMap(DL);
//       } else if (mapName == "DD") {
//         setNameOfMap(DD);
//       } else if (mapName == "GA") {
//         setNameOfMap(GA);
//       } else if (mapName == "GJ") {
//         setNameOfMap(GJ);
//       } else if (mapName == "HR") {
//         setNameOfMap(HR);
//       } else if (mapName == "HP") {
//         setNameOfMap(HP);
//       } else if (mapName == "JH") {
//         setNameOfMap(JH);
//       } else if (mapName == "JK") {
//         setNameOfMap(JK);
//       } else if (mapName == "KA") {
//         setNameOfMap(KA);
//       } else if (mapName == "KL") {
//         setNameOfMap(KL);
//       } else if (mapName == "MP") {
//         setNameOfMap(MP);
//       } else if (mapName == "MH") {
//         setNameOfMap(MH);
//       } else if (mapName == "MN") {
//         setNameOfMap(MN);
//       } else if (mapName == "ML") {
//         setNameOfMap(ML);
//       } else if (mapName == "MZ") {
//         setNameOfMap(MZ);
//       } else if (mapName == "NL") {
//         setNameOfMap(NL);
//       } else if (mapName == "OR") {
//         setNameOfMap(OR);
//       } else if (mapName == "PB") {
//         setNameOfMap(PB);
//       } else if (mapName == "RJ") {
//         setNameOfMap(RJ);
//       } else if (mapName == "SK") {
//         setNameOfMap(SK);
//       } else if (mapName == "TN") {
//         setNameOfMap(TN);
//       } else if (mapName == "TG") {
//         setNameOfMap(TG);
//       } else if (mapName == "TR") {
//         setNameOfMap(TR);
//       } else if (mapName == "UT") {
//         setNameOfMap(UT);
//       } else if (mapName == "UP") {
//         setNameOfMap(UP);
//       } else if (mapName == "WB") {
//         setNameOfMap(WB);
//       } else if (mapName == "PY") {
//         setNameOfMap(PY);
//       } else if (mapName == "LA") {
//         setNameOfMap(LA);
//       } else if (mapName == "LD") {
//         setNameOfMap(LD);
//       } else if (mapName == "DN") {
//         setNameOfMap(DN);
//       }
//       //   setZoom(2);
//     }
//   }, [NameOfMap, MapReturn]);

//   const handleChange = (event) => {
//     const value = event.target.value;
//     setRange({
//       ...Range,
//       [event.target.name]: value,
//     });
//   };

//   const closeClick = (e) => {
//     setData([
//       { id: "AP", st_nm: "Andhra Pradesh", value: Range.AP },
//       { id: "AR", st_nm: "Arunachal Pradesh", value: Range.AR },
//       { id: "AS", st_nm: "Assam", value: Range.AS },
//       { id: "BR", st_nm: "Bihar", value: Range.BR },
//       { id: "CT", st_nm: "Chhattisgarh", value: Range.CT },
//       { id: "GA", st_nm: "Goa", value: Range.GA },
//       { id: "GJ", st_nm: "Gujarat", value: Range.AR },
//       { id: "HR", st_nm: "Haryana", value: Range.HR },
//       { id: "HP", st_nm: "Himachal Pradesh", value: Range.HP },
//       { id: "JH", st_nm: "Jharkhand", value: Range.AR },
//       { id: "KA", st_nm: "Karnataka", value: Range.KA },
//       { id: "KL", st_nm: "Kerala", value: Range.KL },
//       { id: "MP", st_nm: "Madhya Pradesh", value: Range.MP },
//       { id: "MH", st_nm: "Maharashtra", value: Range.MH },
//       { id: "MN", st_nm: "Manipur", value: Range.MN },
//       { id: "ML", st_nm: "Meghalaya", value: Range.ML },
//       { id: "MZ", st_nm: "Mizoram", value: Range.MZ },
//       { id: "NL", st_nm: "Nagaland", value: Range.NL },
//       { id: "OR", st_nm: "Odisha", value: Range.OR },
//       { id: "PB", st_nm: "Punjab", value: Range.PB },
//       { id: "RJ", st_nm: "Rajasthan", value: Range.RJ },
//       { id: "SK", st_nm: "Sikkim", value: Range.SK },
//       { id: "TN", st_nm: "Tamil Nadu", value: Range.TN },
//       { id: "TG", st_nm: "Telangana", value: Range.TG },
//       { id: "TR", st_nm: "Tripura", value: Range.TR },
//       { id: "UT", st_nm: "Uttarakhand", value: Range.UT },
//       { id: "UP", st_nm: "Uttar Pradesh", value: Range.UP },
//       { id: "WB", st_nm: "West Bengal", value: Range.WB },
//       { id: "AN", st_nm: "Andaman and Nicobar Islands", value: Range.AN },
//       { id: "CH", st_nm: "Chandigarh", value: Range.CH },
//       { id: "DN", st_nm: "Dadra and Nagar Haveli", value: Range.DN },
//       { id: "DD", st_nm: "Daman and Diu", value: Range.DD },
//       { id: "DL", st_nm: "Delhi", value: Range.DL },
//       { id: "JK", st_nm: "Jammu and Kashmir", value: Range.JK },
//       { id: "LA", st_nm: "Ladakh", value: Range.LA },
//       { id: "LD", st_nm: "Lakshadweep", value: Range.LD },
//       { id: "PY", st_nm: "Puducherry", value: Range.PY },
//     ]);
//   };

//   const minProp = min(
//     INDIA_TOPO_JSON.objects.states.geometries.slice(0, 36),
//     (feature) => feature.properties.st_code
//   );
//   const maxProp = max(
//     INDIA_TOPO_JSON.objects.states.geometries.slice(0, 36),
//     (feature) => feature.properties.st_code
//   );

//   const colorScale = scaleLinear()
//     .domain([minProp, maxProp])
//     .range([colorMin, colorMax]);

//   const onMouseEnter = (geo, current = { value: "NA" }) => {
//     return () => {
//       setTooltipContent(`${geo.properties.st_nm}: ${current.value}`);
//       setLastClick(current.id);
//     };
//   };

//   const onMouseLeave = () => {
//     setTooltipContent("");
//   };

//   const handleChangeCompleteMin = (color) => {
//     setcolorMin(color.target.value);
//   };
//   const handleChangeCompleteMax = (color) => {
//     setcolorMax(color.target.value);
//   };

//   const currentIdOfMap = (current) => {
//     // console.log("check clicked");
//     setMapReturn(false);

//     if (LastClick == "BR") {
//       setNameOfMap(BR);
//     } else if (LastClick == "AN") {
//       setNameOfMap(AN);
//     } else if (LastClick == "AR") {
//       setNameOfMap(AR);
//     } else if (LastClick == "AP") {
//       setNameOfMap(AP);
//     } else if (LastClick == "AS") {
//       setNameOfMap(AS);
//     } else if (LastClick == "CH") {
//       setNameOfMap(CH);
//     } else if (LastClick == "CT") {
//       setNameOfMap(CT);
//     } else if (LastClick == "DL") {
//       setNameOfMap(DL);
//     } else if (LastClick == "DD") {
//       setNameOfMap(DD);
//     } else if (LastClick == "GA") {
//       setNameOfMap(GA);
//     } else if (LastClick == "GJ") {
//       setNameOfMap(GJ);
//     } else if (LastClick == "HR") {
//       setNameOfMap(HR);
//     } else if (LastClick == "HP") {
//       setNameOfMap(HP);
//     } else if (LastClick == "JH") {
//       setNameOfMap(JH);
//     } else if (LastClick == "JK") {
//       setNameOfMap(JK);
//     } else if (LastClick == "KA") {
//       setNameOfMap(KA);
//     } else if (LastClick == "KL") {
//       setNameOfMap(KL);
//     } else if (LastClick == "MP") {
//       setNameOfMap(MP);
//     } else if (LastClick == "MH") {
//       setNameOfMap(MH);
//     } else if (LastClick == "MN") {
//       setNameOfMap(MN);
//     } else if (LastClick == "ML") {
//       setNameOfMap(ML);
//     } else if (LastClick == "MZ") {
//       setNameOfMap(MZ);
//     } else if (LastClick == "NL") {
//       setNameOfMap(NL);
//     } else if (LastClick == "OR") {
//       setNameOfMap(OR);
//     } else if (LastClick == "PB") {
//       setNameOfMap(PB);
//     } else if (LastClick == "RJ") {
//       setNameOfMap(RJ);
//     } else if (LastClick == "SK") {
//       setNameOfMap(SK);
//     } else if (LastClick == "TN") {
//       setNameOfMap(TN);
//     } else if (LastClick == "TG") {
//       setNameOfMap(TG);
//     } else if (LastClick == "TR") {
//       setNameOfMap(TR);
//     } else if (LastClick == "UT") {
//       setNameOfMap(UT);
//     } else if (LastClick == "UP") {
//       setNameOfMap(UP);
//     } else if (LastClick == "WB") {
//       setNameOfMap(WB);
//     } else if (LastClick == "PY") {
//       setNameOfMap(PY);
//     } else if (LastClick == "LA") {
//       setNameOfMap(LA);
//     } else if (LastClick == "LD") {
//       setNameOfMap(LD);
//     } else if (LastClick == "DN") {
//       setNameOfMap(DN);
//     }

//     if (login) {
//       props.NameOfMapData(LastClick);
//       props.userViewId(viewId);
//     }
//   };

//   const ReturnMap = (e) => {
//     setNameOfMap(INDIA_TOPO_JSON);
//     setMapReturn(true);
//     setmapFind(false);
//   };
//   const onSubmit = async (e) => {
//     e.preventDefault();
//     saveImage();
//     setsubmit(true);
//   };

//   useEffect(() => {
//     if (submit) {
//       const loginUser = {
//         quantity: LastClick,
//         id: viewId,
//         img: img,
//       };
//       console.log(loginUser, "updated data");
//       props.updateItem(loginUser);
//       setTimeout(function () {
//         history.push({
//           pathname: "/",
//           state: {
//             mapModeHome: props.mapMode,
//           },
//         });
//       }, 10000);
//     }
//   }, [img]);

//   var exports = (type, name) => {
//     var img;
//     html2canvas(document.querySelector(`#capture`)).then((canvas) => {
//       canvas.toBlob(function (blob) {
//         let a = saveAs(blob, "MapProject.png");
//         var pngUrl = canvas.toDataURL(); // PNG is the default
//         setimg(pngUrl);
//         // console.log(typeof pngUrl);
//         // props.onClick(pngUrl)
//       });
//     });
//   };

//   const saveImage = () => {
//     exports("pdf", "my-content");
//   };

//   return (
//     <>
//       <div>
//         {/* <Tooltip title="Download Project" placement="top">
//           <Button
//             className="downloadBtn"
//             variant="contained"
//             color="secondary"
//             style={{
//               backgroundColor: "#000000",
//             }}
//             size="small"
//             onClick={props.onClick}
//           >
//             <SaveAltIcon />
//           </Button>
//         </Tooltip> */}
//         <Modal
//           className="modalL"
//           size="sm"
//           left
//           show={smShow}
//           onHide={() => setSmShow(false)}
//           aria-labelledby="example-modal-sizes-title-sm"
//         >
//           <Modal.Header closeButton>
//             <Modal.Title id="example-modal-sizes-title-sm"></Modal.Title>
//           </Modal.Header>
//           <Modal.Body className="modalBody">
//             <input type="color" onChange={handleChangeCompleteMin} />
//             ...
//           </Modal.Body>
//         </Modal>
//         <Modal
//           className="modalR"
//           size="sm"
//           left
//           show={smShow}
//           onHide={() => setSmShow(false)}
//           aria-labelledby="example-modal-sizes-title-sm"
//         >
//           <Modal.Header closeButton>
//             <Modal.Title id="example-modal-sizes-title-sm"></Modal.Title>
//           </Modal.Header>
//           <Modal.Body className="modalBody">
//             <input type="color" onChange={handleChangeCompleteMax} />
//           </Modal.Body>
//         </Modal>

//         <div className="full-width-height container">
//           {/* {mapFind ? ( */}
//           <Tooltip title="Save" placement="top">
//             <Button
//               variant="contained"
//               className="saveBtnV"
//               color="secondary"
//               size="small"
//               onClick={onSubmit}
//             >
//               <SaveIcon />
//             </Button>
//           </Tooltip>
//           <div id={`capture`}>
//             <ReactTooltip>{tooltipContent}</ReactTooltip>
//             {!mapHide ? (
//               <ComposableMap
//                 projectionConfig={PROJECTION_CONFIG}
//                 projection="geoMercator"
//                 width={680}
//                 height={220}
//                 style={{
//                   width: "100%",
//                   height: "auto",
//                 }}
//                 data-tip=""
//               >
//                 <ZoomableGroup zoom={Zoom}>
//                   <Geographies
//                     geography={NameOfMap ? NameOfMap : INDIA_TOPO_JSON}
//                   >
//                     {({ geographies }) =>
//                       geographies.map((geo) => {
//                         // console.log(geo, 'geo')
//                         const current = data.find(
//                           (s) => s.st_nm === geo.properties.st_nm
//                         );
//                         return (
//                           <>
//                             <Geography
//                               key={geo.rsmKey}
//                               geography={geo}
//                               fill={current ? colorScale(current.value) : null}
//                               // style={geographyStyle}
//                               onClick={currentIdOfMap}
//                               onMouseEnter={onMouseEnter(geo, current)}
//                               onMouseLeave={onMouseLeave}
//                             />
//                           </>
//                         );
//                       })
//                     }
//                   </Geographies>
//                 </ZoomableGroup>
//               </ComposableMap>
//             ) : null}
//           </div>

//           <div className="allBtnMap">
//             <div className="d-flex ml-5 ">
//               <div className="row ml-5">
//                 <Tooltip title="Reset Map" placement="top">
//                   <Button
//                     variant="contained"
//                     style={{
//                       color: "white",
//                       backgroundColor: "#000000",
//                     }}
//                     size="small"
//                     onClick={ReturnMap}
//                   >
//                     <ReplayIcon />
//                   </Button>
//                 </Tooltip>
//                 <Button
//                   className="btnAdjClr"
//                   variant="contained"
//                   size="small"
//                   style={{
//                     color: "white",
//                     backgroundColor: "#000000",
//                   }}
//                   onClick={() => setSmShow(true)}
//                 >
//                   Adjuct color
//                 </Button>{" "}
//                 <RangeInput
//                   handleChange={handleChange}
//                   Range={Range}
//                   closeClick={closeClick}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
// const mapStateProps = (state) => ({
//   item: state.item,
//   isAuthenticated: state.auth.isAuthenticated,
// });
// export default connect(mapStateProps, { updateItem })(App);

import React, { useRef, useEffect, useState } from "react";
import { select, geoPath, geoMercator, min, max, scaleLinear } from "d3";
import "d3-transition";
import indiaMap from "../maps/AllStateIndia.json";
import { useHistory } from "react-router";
import bihar from "../maps/bihar.json";
import useResizeObserver from "./UseResizeObserver";
import * as d3 from "d3";
import { updateItem } from "../actions/itemActions";
import { connect } from "react-redux";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import SaveIcon from "@material-ui/icons/Save";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Box from "@material-ui/core/Box";
import RangeInput from "./RangeInput";

function GeoChart(props) {
  console.log(props,'props');
  const history = useHistory();
  const property = props.history.location.state.property;
  // console.log(props, "property");
  const m = indiaMap.features[3];
  const del = indiaMap.features[25];
  const svgRef = useRef();
  const wrapperRef = useRef();
  const [data, setdata] = useState(indiaMap);

  const [lenOfMapData, setlenOfMapData] = useState(data.length);
  const dimensions = useResizeObserver(wrapperRef);

  const view = data.features.filter((feature) => {
    if (feature.properties.st_nm === `${props.history.location.state.mapName}`) {
      return feature;
    }
  });
  const [selectedCountry, setSelectedCountry] = useState(view[0]);
  const [smShow, setSmShow] = useState(false);
  const [colorMin, setcolorMin] = useState("#e4e4e4");
  const [colorMax, setcolorMax] = useState("#de7171");
  const [submit, setsubmit] = useState(false);
  const [image, setimg] = useState();
  const viewId = props.history.location.state.viewId;
  const [imgLin, setimgLin] = useState(true);

  const [Mapdata, setMapData] = useState([
    { id: "AP", st_nm: "Andhra Pradesh", value: 37 },
    { id: "AR", st_nm: "Arunachal Pradesh", value: 12 },
    { id: "AS", st_nm: "Assam", value: 18 },
    { id: "BR", st_nm: "Bihar", value: 10 },
    { id: "CT", st_nm: "Chhattisgarh", value: 22 },
    { id: "GA", st_nm: "Goa", value: 30 },
    { id: "GJ", st_nm: "Gujarat", value: 24 },
    { id: "HR", st_nm: "Haryana", value: 6 },
    { id: "HP", st_nm: "Himachal Pradesh", value: 2 },
    { id: "JH", st_nm: "Jharkhand", value: 20 },
    { id: "KA", st_nm: "Karnataka", value: 29 },
    { id: "KL", st_nm: "Kerala", value: 29 },
    { id: "MP", st_nm: "Madhya Pradesh", value: 23 },
    { id: "MH", st_nm: "Maharashtra", value: 27 },
    { id: "MN", st_nm: "Manipur", value: 14 },
    { id: "ML", st_nm: "Meghalaya", value: 17 },
    { id: "MZ", st_nm: "Mizoram", value: 15 },
    { id: "NL", st_nm: "Nagaland", value: 13 },
    { id: "OR", st_nm: "Odisha", value: 21 },
    { id: "PB", st_nm: "Punjab", value: 3 },
    { id: "RJ", st_nm: "Rajasthan", value: 8 },
    { id: "SK", st_nm: "Sikkim", value: 11 },
    { id: "TN", st_nm: "Tamil Nadu", value: 33 },
    { id: "TG", st_nm: "Telangana", value: 36 },
    { id: "TR", st_nm: "Tripura", value: 16 },
    { id: "UT", st_nm: "Uttarakhand", value: 5 },
    { id: "UP", st_nm: "Uttar Pradesh", value: 9 },
    { id: "WB", st_nm: "West Bengal", value: 19 },
    { id: "AN", st_nm: "Andaman and Nicobar Islands", value: 35 },
    { id: "CH", st_nm: "Chandigarh", value: 55 },
    { id: "DN", st_nm: "Dadra and Nagar Haveli and Daman and Diu", value: 26 },
    { id: "DD", st_nm: "Daman and Diu", value: 26 },
    { id: "DL", st_nm: "Delhi", value: 7 },
    { id: "JK", st_nm: "Jammu and Kashmir", value: 1 },
    { id: "LA", st_nm: "Ladakh", value: 38 },
    { id: "LD", st_nm: "Lakshadweep", value: 31 },
    { id: "PY", st_nm: "Puducherry", value: 34 },
  ]);

  const [Range, setRange] = useState({
    AP: "1",
    AR: "2",
    AS: "3",
    BR: "4",
    CT: "5",
    GA: "6",
    GJ: "7",
    HR: "6",
    HP: "7",
    JH: "9",
    KA: "8",
    KL: "10",
    MP: "11",
    MH: "12",
    MN: "13",
    ML: "14",
    MZ: "15",
    NL: "16",
    OR: "17",
    PB: "18",
    RJ: "19",
    SK: "20",
    TN: "21",
    TG: "22",
    TR: "23",
    UT: "24",
    UP: "25",
    WB: "26",
    AN: "27",
    CH: "28",
    DN: "29",
    DD: "30",
    DL: "31",
    JK: "32",
    LA: "33",
    LD: "34",
    PY: "35",
  });

  const closeClick = (e) => {
    setMapData([
      { id: "AP", st_nm: "Andhra Pradesh", value: Range.AP },
      { id: "AR", st_nm: "Arunachal Pradesh", value: Range.AR },
      { id: "AS", st_nm: "Assam", value: Range.AS },
      { id: "BR", st_nm: "Bihar", value: Range.BR },
      { id: "CT", st_nm: "Chhattisgarh", value: Range.CT },
      { id: "GA", st_nm: "Goa", value: Range.GA },
      { id: "GJ", st_nm: "Gujarat", value: Range.AR },
      { id: "HR", st_nm: "Haryana", value: Range.HR },
      { id: "HP", st_nm: "Himachal Pradesh", value: Range.HP },
      { id: "JH", st_nm: "Jharkhand", value: Range.AR },
      { id: "KA", st_nm: "Karnataka", value: Range.KA },
      { id: "KL", st_nm: "Kerala", value: Range.KL },
      { id: "MP", st_nm: "Madhya Pradesh", value: Range.MP },
      { id: "MH", st_nm: "Maharashtra", value: Range.MH },
      { id: "MN", st_nm: "Manipur", value: Range.MN },
      { id: "ML", st_nm: "Meghalaya", value: Range.ML },
      { id: "MZ", st_nm: "Mizoram", value: Range.MZ },
      { id: "NL", st_nm: "Nagaland", value: Range.NL },
      { id: "OR", st_nm: "Odisha", value: Range.OR },
      { id: "PB", st_nm: "Punjab", value: Range.PB },
      { id: "RJ", st_nm: "Rajasthan", value: Range.RJ },
      { id: "SK", st_nm: "Sikkim", value: Range.SK },
      { id: "TN", st_nm: "Tamil Nadu", value: Range.TN },
      { id: "TG", st_nm: "Telangana", value: Range.TG },
      { id: "TR", st_nm: "Tripura", value: Range.TR },
      { id: "UT", st_nm: "Uttarakhand", value: Range.UT },
      { id: "UP", st_nm: "Uttar Pradesh", value: Range.UP },
      { id: "WB", st_nm: "West Bengal", value: Range.WB },
      { id: "AN", st_nm: "Andaman and Nicobar Islands", value: Range.AN },
      { id: "CH", st_nm: "Chandigarh", value: Range.CH },
      { id: "DN", st_nm: "Dadra and Nagar Haveli", value: Range.DN },
      { id: "DD", st_nm: "Daman and Diu", value: Range.DD },
      { id: "DL", st_nm: "Delhi", value: Range.DL },
      { id: "JK", st_nm: "Jammu and Kashmir", value: Range.JK },
      { id: "LA", st_nm: "Ladakh", value: Range.LA },
      { id: "LD", st_nm: "Lakshadweep", value: Range.LD },
      { id: "PY", st_nm: "Puducherry", value: Range.PY },
    ]);
  };

  const handleChangeCompleteMin = (color) => {
    setcolorMin(color.target.value);
    // console.log(color.target.value);
  };
  const handleChangeCompleteMax = (color) => {
    setcolorMax(color.target.value);
    // console.log(color.target.value);
  };

  useEffect(() => {
    if (submit) {
      const loginUser = {
        quantity: selectedCountry.properties.id,
        id: viewId,
        img: imgLin,
      };
      props.updateItem(loginUser);
      setTimeout(function () {
        history.push({
          pathname: "/",
          state: {
            mapModeHome: props.history.location.state.mapMode,
          },
        });
      }, 4000);
    }

    const svg = select(svgRef.current);

    const minProp = min(
      data.features.slice(0, lenOfMapData),
      (feature) => feature.properties[property]
    );

    const maxProp = max(
      data.features.slice(0, lenOfMapData),
      (feature) => feature.properties[property]
    );

    const colorScale = scaleLinear()
      .domain([minProp, maxProp])
      .range([colorMin, colorMax]);

    const { width, height } =
      dimensions || wrapperRef.current.getBoundingClientRect();

    const projection = geoMercator()
      // .fitSize(console.log([width, height]), selectedCountry || data)
      .fitSize([1266, 417], selectedCountry || data)

      .precision(100);

    const pathGenerator = geoPath().projection(projection);

    svg
      .selectAll(".country")
      .data(data.features)
      .join("path")
      .on("click", (feature) => {
        setSelectedCountry(selectedCountry === feature ? null : feature);
      })
      .attr("class", "country")
      .transition()
      .duration(1000)
      .attr("d", (feature) => pathGenerator(feature))
      .attr("fill", (feature) => {
        const current = Mapdata.find(
          (s) => s.st_nm === feature.properties.st_nm
        );
        if (current) {
          return colorScale(current.value);
          // console.log(current.value);
        }
      });


    // var path = svg

    //   .append("path")
    //   // .insert("path")
    //   .attr(
    //     "d",
    //     `
    //     M563.702580092723,124.54307731246911

    //    L508.04562820157184,254.95723574480706
    //   `
    //   )
    //   .attr("fill", "none")
    //   .attr("stroke", "black");

    // var circle = svg
    //   .append("circle")
    //   .attr("r", 5)
    //   .attr("cx", 612)
    //   .attr("cy", 111);

    // var pathEl = path.node();
    // for (var i = 0; i < pathEl.getTotalLength(); i++) {
    //   var pt = pathEl.getPointAtLength(i);
    //   circle.transition().duration(5000).attr("cx", pt.x).attr("cy", pt.y);
    // }

    svg
      .selectAll(".label")
      .data([selectedCountry])
      .join("text")
      .attr("class", "label")
      .text(
        (feature) =>
          feature &&
          feature.properties.id +
            ": " +
            feature.properties[property].toLocaleString()
      )
      .attr("x", 550)
      .attr("y", 200);
      // .attr("x", 10)
      // .attr("y", 20);
  }, [
    Mapdata,
    colorMin,
    colorMax,
    submit,
    imgLin,
    data,
    dimensions,
    property,
    selectedCountry,
  ]);

  const onSubmit = async (e) => {
    expor("pdf", "my-content");
    setsubmit(true);
    // console.log(imgLin, "imga ka link");
    e.preventDefault();
  };
  const handleChange = (event) => {
    const value = event.target.value;
    setRange({
      ...Range,
      [event.target.name]: value,
    });
  };
  var expor = (type, name) => {
    var img;
    html2canvas(document.querySelector(`#capture`)).then((canvas) => {
      canvas.toBlob(function (blob) {
        let a = saveAs(blob, "MapProject.png");
        var pngUrl = canvas.toDataURL(); // PNG is the default
        setimgLin(pngUrl);
        // console.log(typeof pngUrl);
        // props.onClick(pngUrl);
      });
    });
  };

  return (
    <>
      {props.isAuthenticated ? (
        <div>
          <Tooltip title="Save" placement="top">
            <Button
              variant="contained"
              className="saveBtnV "
              color="secondary"
              size="small"
              onClick={onSubmit}
            >
              <SaveIcon />
            </Button>
          </Tooltip>

          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={smShow}
            // className="modalL"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClose={() => setSmShow(false)}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <>
              <Box
                boxShadow={3}
                bgcolor="background.paper"
                m={1}
                p={1}
                style={{ width: "16rem", height: "19rem" }}
              >
                <input type="color" onChange={handleChangeCompleteMin} />
              </Box>
              <Box
                boxShadow={3}
                bgcolor="background.paper"
                m={10}
                p={1}
                style={{ width: "16rem", height: "19rem" }}
              >
                <input type="color" onChange={handleChangeCompleteMax} />
              </Box>
            </>
          </Modal>

          <div ref={wrapperRef} style={{ marginTop: "5rem" }} id={`content`}>
            <Box boxShadow={3} bgcolor="background.paper" m={1} p={1}>
              <div id={`capture`} className="">
                <svg ref={svgRef} id="canvas"></svg>
              </div>
            </Box>

            <div className="allBtnMap">
              <div className="d-flex ml-5 ">
                <div className="row ml-5">
                  <Button
                    className="btnAdjClr"
                    // className="btnAdjClr"
                    variant="contained"
                    color="secondary"
                    size="small"
                    style={{
                      backgroundColor: "#0063B2FF",
                      marginTop: "1rem",
                    }}
                    onClick={() => setSmShow(true)}
                  >
                    Adjuct color
                  </Button>{" "}
                  <RangeInput
                    handleChange={handleChange}
                    Range={Range}
                    closeClick={closeClick}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

const mapStateProps = (state) => ({
  item: state.item,
  isAuthenticated: state.auth.isAuthenticated,
  // s:console.log(state.auth.isAuthenticated,'state.auth.isAuthenticated')
});
export default connect(mapStateProps, { updateItem })(GeoChart);
