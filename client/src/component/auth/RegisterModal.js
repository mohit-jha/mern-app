import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  NavLink,
  Alert,
} from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { register } from "../../actions/authAction";
import { clearErrors } from "../../actions/errorAction";
import Box from "@material-ui/core/Box";

class RegisterMadal extends Component {
  state = {
    modal: false,
    name: "",
    email: "",
    password: "",
    msg: null,
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    register: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired,
  };

  componentDidUpdate(prevProps) {
    const { error } = this.props;
    if (error !== prevProps.error) {
      if (error.id === "REGISTER_FAIL") {
        this.setState({ msg: error.msg.msg });
      } else {
        this.setState({ msg: "null" });
      }
    }
    if (this.props.isAuthenticated === true) {
      console.log("user", "resu");
      this.props.history.push("/");

      // return <Redirect to="/map" />;
    }
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();

    const { name, email, password } = this.state;
    const newUser = {
      name,
      email,
      password,
    };

    ////Attemt to register
    this.props.register(newUser);
  };

  render() {
    return (
      <div >
        {/* <NavLink onClick={this.toggle} href='#'>
                    Register
                  </NavLink> */}
        {/* <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                  > */}
        {/* <ModalBody> */}
        {this.state.msg ? <Alert color="danger">{this.state.msg}</Alert> : null}
                  <Box  style={{width:'500px', height:"60vh",}} className='mx-auto py-5' boxShadow={5}>
          <Form className="col-8 mx-auto mt-5 h-100" onSubmit={this.onSubmit} >
            <FormGroup className="w-100 mx-auto h-100">
              {/* <Label for='name'>Name</Label> */}


              <Input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                onChange={this.onChange}
                className="mb-3"
                />

              {/* <Label for='email'>Email</Label> */}
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="mb-3"
                onChange={this.onChange}
                />
              {/* <Label for='password'>Password</Label> */}

              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="mb-3"
                onChange={this.onChange}
                />


              <Button color="dark" style={{ marginTop: "2rem" }} block>
                Register
              </Button>
            </FormGroup>
          </Form>
        </Box>
        {/* </ModalBody> */}

        {/* </Modal> */}
      </div>
    );
  }
}
const mapStateProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
});
export default connect(mapStateProps, { register, clearErrors })(RegisterMadal);
