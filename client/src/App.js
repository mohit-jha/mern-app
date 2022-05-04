import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Appnavbar from "./component/AppNavBar";
import ShopingList from "./component/ShopingList";
import { Provider } from "react-redux";
import store from "./store";
import ModelItem from "./component/itemModel";
import { Container } from "reactstrap";
import { loadUser } from "./actions/authAction";
// import MapApp from './MapApp'
import Register from "./component/auth/RegisterModal";
import Login from './component/auth/LoginModal'
import Logout from './component/auth/Logout'
import ViewMap from './component/ViewMap'
import SaveMapView from './component/SaveViewMap'

export default class App extends Component {
  componenetDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    // console.log(dataOfCurrentMap,"dataOfCurrentMap");
    return (
      <BrowserRouter>
        <Provider store={store}>
          <div>
            <Appnavbar />
            <Route exact path="/" component={ShopingList} />
            <Route exact path="/Register" component={Register} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/Logout" component={Logout} />

            <Route exact path="/map" component={ModelItem} />
            <Route exact path="/map-v" component={ViewMap} />

            {/* <Route exact path='/map' component={Map} /> */}

            <Container>
              {/* <ModelItem /> */}
              {/* <ShopingList /> */}
            </Container>
          </div>
        </Provider>
      </BrowserRouter>
    );
  }
}
