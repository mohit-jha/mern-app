import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, CardImg } from "reactstrap";

import { CSSTransition, TransitionGroup } from "react-transition-group";
import { getItems, deleteItem, sortItem } from "../actions/itemActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import MapApp from "./ViewMap";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import Tooltip from "@material-ui/core/Tooltip";
import VisibilityIcon from "@material-ui/icons/Visibility";
import Box from "@material-ui/core/Box";

const styles = withStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

class ShopingList extends Component {
  constructor(props) {
    super(props);
    console.log(props, "props");
    this.state = {
      view: false,
      index: 1,
      viewId: "",
      css: true,
      imgView: true,
      items: this.props,
      sType: "",
      dType: "",
      mapFind: false,
      MapName: "",
      property: "st_code",
    };
  }

  static protoTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool,
  };
  componentDidMount() {
    if (this.props.isAuthenticated) {
      this.props.getItems(this.props.userId.id);
    }
    if (this.props.history.location.state) {
      this.setState({ css: this.props.history.location.state.mapModeHome });
    }
  }
  componentWillMount() {
    this.setState({ items: this.props.item.items });
  }
  onDeleteClick = (id) => {
    this.props.deleteItem(id);
  };

  handleClick = (id, quantity) => {
    console.log(quantity, "quantity");
    this.setState({ view: true });
    this.setState({ viewId: id });
    this.setState({ imgView: false });
    this.setState({ mapFind: true });
    console.log(this.state.mapFind, "mmmmmmmmmmmmaaaaaaaaaaaaaapppppppppp");

    // console.log("user", "resu");
    // this.props.history.push("/map-v");
    this.props.history.push({
      pathname: "/map-v",
      state: {
        mapName: quantity,
        viewId: id,
        mapFind: this.props.isAuthenticated,
        mapMode: this.state.css,
        property: this.state.property,
      },
    });

    // return <Redirect to="/map" />;
  };
  handleClickC = () => {
    this.setState({ view: false });
    this.setState({ imgView: true });
  };
  listView = () => {
    this.setState({ css: true });
  };
  gridView = () => {
    this.setState({ css: false });
  };

  openAddProjectPage = () => {
    this.props.history.push({
      pathname: "/map",
      state: {
        toggle: true,
      },
    });
  };

  render() {
    const { items } = this.props.item;
    const { classes } = this.props;

    return (
      <>
        {this.props.isAuthenticated ? (
          <div>
            {this.props.isAuthenticated ? (
              // <Tooltip title="View" placement="top">
              <div id="btnContainer">
                <Button
                  className="addItem"
                  variant="outlined"
                  color="primary"
                  size="medium"
                  onClick={this.openAddProjectPage}
                  style={{
                    fontWeight: "100",
                  }}
                >
                  Add Project
                </Button>
              </div>
            ) : (
              // </Tooltip>
              <h4 className="mb-3 ml-4">Please Login to manage project </h4>
            )}

            <div
              id="btnContainer"
              style={{ flexGrow: "2", marginBottom: "10px" }}
            >
              <div className="btnContainer">
                <button className="btn" onClick={this.listView}>
                  <i className="fa fa-bars"></i> List
                </button>
                <button className="btn active" onClick={this.gridView}>
                  <i className="fa fa-th-large"></i> Grid
                </button>
              </div>
            </div>
            <br />

            {this.state.css === false ? (
              <Grid
                container
                className={classes}
                style={{ flexGrow: "2" }}
                spacing={4}
              >
                <Grid item xs={12} className="mt-5">
                  <Grid container justify="center" spacing={4}>
                    {
                      // this.setState({items:items})
                    }

                    {items.map(({ _id, name, quantity, date, img }) => (
                      <Grid
                        key={_id}
                        timeout={500}
                        classNames="fade"
                        item
                        xs={4}
                      >
                        <Box boxShadow={9} style={{ maxWidth: "345px" }}>
                          <Card
                            className={classes}
                            style={{ maxWidth: "345px" }}
                          >
                            <CardActionArea>
                              <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="50%"
                                width="100%"
                                image={img}
                              />
                              <CardContent></CardContent>
                            </CardActionArea>
                            <CardActions>
                              <h5>{name}</h5>
                              <h6>{date}</h6>
                            </CardActions>
                            <CardActions>
                              {this.props.isAuthenticated &&
                              this.state.view == false ? (
                                <Tooltip title="View" placement="top">
                                  <Button
                                    className="btnViewGrid"
                                    variant="contained"
                                    color="secondary"
                                    size="small"
                                    style={{
                                      backgroundColor: "#6ed57e",
                                    }}
                                    onClick={this.handleClick.bind(
                                      this,
                                      _id,
                                      quantity
                                    )}
                                  >
                                    <VisibilityIcon />
                                  </Button>
                                </Tooltip>
                              ) : null}
                              {this.props.isAuthenticated ? (
                                <Tooltip title="Delete" placement="top">
                                  <Button
                                    variant="contained"
                                    color="secondary"
                                    className="btnDelGrid"
                                    style={{
                                      backgroundColor: "#f50057",
                                    }}
                                    size="small"
                                    onClick={this.onDeleteClick.bind(this, _id)}
                                  >
                                    <DeleteIcon />
                                  </Button>
                                </Tooltip>
                              ) : null}
                            </CardActions>
                          </Card>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            ) : (
              <Container className="col-9">
                <ListGroup>
                  <TransitionGroup className="shoping-list  ">
                    {
                      // this.setState({items:items})
                    }

                    {items.map(({ _id, name, quantity, date, img }) => (
                      <CSSTransition key={_id} timeout={500} classNames="fade">
                        <ListGroupItem className="mt-3">
                          <div className="d-flex row-cols-12">
                            <div className="imgList">
                              <CardImg
                                className="imgList"
                                top
                                width="25%"
                                src={img}
                                alt="Card image cap"
                              />
                            </div>
                            <div className="p-2 bd-highlight ml-5">{name}</div>
                            <div className="ml-auto p-2 bd-highlight viewDiv">
                              <div id="btnContainer">
                                {date}

                                {this.props.isAuthenticated &&
                                this.state.view == false ? (
                                  <div id="btnContaine">
                                    <Tooltip title="View" placement="top">
                                      <Button
                                        className="btnViewList"
                                        variant="contained"
                                        size="small"
                                        color="secondary"
                                        style={{
                                          backgroundColor: "#6ed57e",
                                        }}
                                        onClick={this.handleClick.bind(
                                          this,
                                          _id,
                                          quantity
                                        )}
                                      >
                                        <VisibilityIcon />
                                      </Button>
                                    </Tooltip>
                                    <Tooltip title="Delete" placement="top">
                                      <Button
                                        className="btnDelList"
                                        variant="contained"
                                        color="secondary"
                                        style={{
                                          backgroundColor: "#f50057",
                                        }}
                                        size="small"
                                        onClick={this.onDeleteClick.bind(
                                          this,
                                          _id
                                        )}
                                      >
                                        <DeleteIcon />
                                      </Button>
                                    </Tooltip>
                                  </div>
                                ) : this.props.isAuthenticated &&
                                  this.state.viewId == _id ? (
                                  <Button onClick={this.handleClickC}>
                                    close
                                  </Button>
                                ) : null}
                              </div>

                              {this.state.viewId === _id && this.state.view ? (
                                <MapApp
                                  mapName={quantity}
                                  viewId={this.state.viewId}
                                  mapFind={this.state.mapFind}
                                />
                              ) : null}
                            </div>
                          </div>
                        </ListGroupItem>
                      </CSSTransition>
                    ))}
                  </TransitionGroup>
                </ListGroup>
              </Container>
            )}
          </div>
        ) : (
          // </Tooltip>
          <h4 className="mb-3 ml-4">Please Login to manage project </h4>
        )}
      </>
    );
  }
}
const mapStateProps = (state) => ({
  item: state.item,
  isAuthenticated: state.auth.isAuthenticated,
  userId: state.auth.user,
});
export default connect(mapStateProps, { getItems, deleteItem })(ShopingList);
