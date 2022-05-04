import React, { Component } from "react";
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
import SaveMap from "./SaveMap";

function ItemModel(props) {

// class ItemModel extends Component {
    const [modal, setmodal] = useState(true)
    const [name, setname] = useState()
        const [dataName, setdataName] = useState()
        const [MapOfSelectedDataName, setMapOfSelectedDataName] = useState()
        const [viewId, setviewId] = useState()
        const [login, setlogin] = useState(props.isAuthenticated)
        const [show, setshow] = useState(false)

propTypes = {
    isAuthenticated: PropTypes.bool,
  };

  const toggle = () => {
    setmodal(!modal)
  };

  const onChange = (e) => {

    setname({ [e.target.name]: e.target.value });
    setdataName({ dataName: e.target.value });
  };

  const onSubmit = async (e) => {
    console.log("data");
    e.preventDefault();

    if (MapOfSelectedDataName) {
      const loginUser = {
        quantity: MapOfSelectedDataName,
        name: dataName,
      };
      props.addItem(loginUser);
      console.log(loginUser, "loginUser");
    } else {
      const date = new Date();
      const loginUser = {
        quantity: MapOfSelectedDataName,
        date1: date,
      };
      props.addItem(loginUser);
    }

    toggle();
    props.history.push("/");
  };
  const NameOfMapData = (e) => {
    setMapOfSelectedDataName( e );
    // console.log(e, "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
  };
  const MapUpdate = (e) => {
    console.log("lllllllllllllllllllllllllllllllllllllllllll");
    console.log(e, "last eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
  };

  const OnhandleClick = () => {
    console.log("clickeddddddddddddddddddddddddddddddd");
  };
  const userViewId = (e) => {
    setviewId( e );
  };

  const handleButtonChange = (e) => {
    console.log("hahahaahahhah");

    setshow(true );

    setmodal( false);
  };

  const submitNow = (e) => {
    // this.setState({
    //   modal: this.state.modal,
    // });
    const onSubmit(e);
    setmodal(modal);
    setshow( false );
  };
  const updateMapCheck = () => {
    console.log("updateMapCheck", "updateMapCheck");
  };


  return (
    <>
    

      {props.isAuthenticated ? (
        <div>
          <Link exact activeClassName="menu" to="/">
            {/* <button  className="btnOfSubmit">
                  submit
                </button> */}
            <Tooltip title="Save" placement="top">
              <Button
                className="saveBtn"
                variant="contained"
                color="secondary"
                style={{
                  backgroundColor: "#000000",
                }}
                size="small"
                onClick={submitNow}
              >
                <SaveIcon />
              </Button>
            </Tooltip>
          </Link>
          <Modal isOpen={state.modal}>
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

                <input
                  type="button"
                  onMouseEnter={handleButtonChange}
                  value="touch to open map"
                />
              </Form>
            </ModalBody>
          </Modal>
          {show ? (
            <div>
              <SaveMap
                MapUpdate={MapUpdate}
                datam={dataName}
                NameOfMapData={NameOfMapData}
                userViewId={userViewId}
                login={props.isAuthenticated}
                handleClick={OnhandleClick}
              />
            </div>
          ) : null}
        </div>
      ) : null}
    </>
  );
}
const mapStateProps = (state, own) => ({
  item: console.log(state.item),
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateProps, { addItem })(ItemModel);
