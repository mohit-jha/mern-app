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
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/authAction";
import { clearErrors } from "../../actions/errorAction";
import Box from "@material-ui/core/Box";

class LoginModal extends Component {
  state = {
    modal: false,
    email: "",
    password: "",
    msg: null,
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired,
  };

  componentDidUpdate(prevProps) {
    const { error } = this.props;
    if (error !== prevProps.error) {
      if (error.id === "LOGIN_FAIL") {
          this.setState({ msg: error.msg.msg });
        }
        
        else {
            console.log('helllllpoooooo');
        this.setState({ msg: "false" });
      }
      
    }
    if (this.props.isAuthenticated === true) {
        console.log('user', "resu");
        this.props.history.push("/");
  
        return <Redirect to="/map" />;
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
    
    console.log('check',this.props.isAuthenticated,'check');
    const { email, password } = this.state;
    const user = {
      email,
      password,
    };
    /////attemt to login
    this.props.login(user);
    console.log(this.state.msg,'user');
    
  };

  render() {
    return (
      <div >
        {/* <NavLink onClick={this.toggle} href='#'>
                    Login
               </NavLink>
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                > */}
        {/* <ModalHeader toggle={this.toggle}>Login</ModalHeader> */}
        <Box  style={{width:'500px', height:"60vh",}} className='mx-auto pt-3' boxShadow={5}>


        <ModalBody className='col-8 mx-auto mt-5'  >
          {this.state.msg ? (
            <Alert color="danger">{this.state.msg}</Alert>
          ) : null}
          <Form onSubmit={this.onSubmit} className='my-5'>
            <FormGroup className='text-left'>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="mb-4"
                onChange={this.onChange}
              />
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="mb-4"
                onChange={this.onChange}
              />
                <Button color="dark" style={{ marginTop: "2rem" }} block>
                  Login
                </Button>
            </FormGroup>
          </Form>
        </ModalBody>

        {/* </Modal> */}
        </Box>

      </div>
    );
  }
}
const mapStateProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
});
export default connect(mapStateProps, { login, clearErrors })(LoginModal);
