import React, { useState, useEffect } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { connect } from "react-redux";
import { addItem } from "../actions/itemActions";
import PropTypes from "prop-types";
import MapApp from "./MapApp";
import Axios from "axios";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import Tooltip from "@material-ui/core/Tooltip";
import propTypes from "prop-types";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";
function ItemModel(props) {
  // class ItemModel extends Component {
  const [modal, setmodal] = useState(true);
  const [name, setname] = useState();
  const [dataName, setdataName] = useState();
  const [MapOfSelectedDataName, setMapOfSelectedDataName] = useState();
  const [viewId, setviewId] = useState();
  const [login, setlogin] = useState(props.isAuthenticated);
  const [show, setshow] = useState(false);
  const [imgLin, setimgLin] = useState(true);
  const [img, setimg] = useState(true);
  const [submit, setsubmit] = useState(false);
  const [property, setProperty] = useState("st_code");

  ItemModel.propTypes = {
    isAuthenticated: PropTypes.bool,
  };

  var expor = (type, name) => {
    var img;
    html2canvas(document.querySelector(`#capture`)).then((canvas) => {
      canvas.toBlob(function (blob) {
        let a = saveAs(blob, "MapProject.png");
        var pngUrl = canvas.toDataURL(); // PNG is the default
        setimgLin(pngUrl);
        console.log(typeof pngUrl);
        // props.onClick(pngUrl);
      });
    });
  };

  const saveImage = () => {
    expor("pdf", "my-content");
  };
  const toggle = () => {
    setmodal(!modal);
  };

  const onChange = (e) => {
    setname({ [e.target.name]: e.target.value });
    setdataName(e.target.value);
  };

  const onSubmit = async (e) => {
    expor("pdf", "my-content");

    setsubmit(true);
    // console.log(imgLin, "imga ka link");
    e.preventDefault();
  };
  const NameOfMapData = (e) => {
    setMapOfSelectedDataName(e);
  };
  

  const OnhandleClick = () => {
  };
  const userViewId = (e) => {
    setviewId(e);
  };

  useEffect(() => {
    if (submit) {
      if (MapOfSelectedDataName) {
        // console.log(imgLin,'imgLin');
        const loginUser = {
          quantity: MapOfSelectedDataName,
          name: dataName,
          img: imgLin,
          userId:props.userId.id
        };
        props.addItem(loginUser);
      } else {
        const date = new Date();
        const loginUser = {
          quantity: MapOfSelectedDataName,
          date1: date,
        };
        props.addItem(loginUser);
      }
      setTimeout(function () {
        props.history.push({
          pathname: "/",
          state: {
            mapModeHome: props.mapMode,
          },
        });
      }, 1000);
    }
  }, [imgLin]);
  const handleButtonChange = (e) => {
    setshow(true);
    setmodal(false);
  };

  const submitNow = (e) => {
    // this.setState({
    //   modal: this.state.modal,
    // });
    onSubmit(e);
    // setmodal(modal);
    setshow(false);
  };

  return (
    <>
      {props.isAuthenticated ? (
        <div>
          {show ? (
              <Tooltip title="Save" placement="top">
                <Button
                  className="saveBtn"
                  variant="contained"
                  color="secondary"
                  style={{
                    backgroundColor: "#f50057",
                  }}
                  size="small"
                  onClick={submitNow}
                >
                  <SaveIcon />
                </Button>
              </Tooltip>
          ) : null}
          <Modal isOpen={modal}>
            <ModalHeader toggle={toggle}>Add To Project List</ModalHeader>
            <ModalBody>
              <Form onSubmit={onSubmit}>
                <FormGroup>
                  <Label for="item">Project</Label>
                  <Input
                    className="mb-3"
                    type="text"
                    name="name"
                    id="item"
                    placeholder="Enter Project Name"
                    onChange={onChange}
                  />
                </FormGroup>

                <Button
                  // className="saveBtn"
                  variant="contained"
                  style={{
                    backgroundColor: "#CCFFE6",
                  }}
                  size="small"
                  onMouseEnter={handleButtonChange}
                >
                  touch to open map
                </Button>
              </Form>
            </ModalBody>
          </Modal>
          {show ? (
            <div>
              <MapApp
              property={property} 
              NameOfMapData={NameOfMapData}
              />
            </div>
          ) : null}
        </div>
      ) : null}
    </>
  );
}
const mapStateProps = (state) => ({
  item: console.log(state.item),
  isAuthenticated: state.auth.isAuthenticated,
  userId:state.auth.user
  
});

export default connect(mapStateProps, { addItem })(ItemModel);
