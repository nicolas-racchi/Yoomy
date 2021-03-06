import React from "react";
import { Link } from "react-router-dom";

// Redux
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../../actions/auth";

// Styled components
import {
  AuthCard,
  LoginForm,
  LoginButton,
  BackgroundImage,
} from "../../../styles/authStyles";
import { Container } from "../../../styles/globalStyles";

// Form Handling
import { Formik, Form, Field, ErrorMessage } from "formik";

const Login = ({ login }) => {
  return (
    <>
      <Container>
        <AuthCard>
          <BackgroundImage>
            <img
              src={require("../../../assets/images/login-image.jpg")}
              alt="login-hero"
            />
          </BackgroundImage>
          <LoginForm>
            <h2>Login</h2>

            <Formik
              initialValues={{ email: "", password: "" }}
              validate={(values) => {
                const errors = {};
                if (!values.email) {
                  errors.email = "Campo richiesto";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = "Indirizzo email non valido";
                }
                if (!values.password) {
                  errors.password = "Campo richiesto";
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                setSubmitting(false);
                login(values.email, values.password);
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <label>Email:</label>
                  <Field type="email" name="email" />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error"
                  />
                  <div style={{ marginTop: "30px" }}>
                    <label>Password:</label>
                  </div>
                  <Field type="password" name="password" />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="error"
                  />
                  <LoginButton
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    data-splitbee-event="User Login"
                  >
                    Login
                  </LoginButton>
                </Form>
              )}
            </Formik>
          </LoginForm>
          <p className="extra">
            Non hai un account? <Link to="/registrati">Registrati</Link>
          </p>
        </AuthCard>
      </Container>
    </>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { login })(Login);
