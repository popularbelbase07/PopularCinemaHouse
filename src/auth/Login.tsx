import axios from "axios";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage, MDBCol, MDBContainer, MDBIcon, MDBRow
} from "mdb-react-ui-kit";
import { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { urlAccounts } from "../endpoints";
import logo from "../navBar/Oracle Cinema.gif";
import DisplayError from "../Utils/DisplayError";
import { authenticationResponse, userCredentials } from "./auth.models";
import AuthenticationContext from "./AuthenticationContext";
import AuthForm from "./AuthForm";
import { getClaims, saveToken } from "./handleJWT";

export default function Login() {
  const [errors, setErrors] = useState<string[]>([]);
  const { update } = useContext(AuthenticationContext);
  const history = useHistory();

  async function login(credentials: userCredentials) {
    try {
      setErrors([]);
      const response = await axios.post<authenticationResponse>(
        `${urlAccounts}/login`, credentials);
        
      //Passing Jwt Token     
      saveToken(response.data);
      //console.log(response.data);
      update(getClaims());
      history.push('/');
    } catch (error) {
      setErrors(errors);
    }
  }

  return (
    <MDBContainer className="my-5">
      <MDBCard>
        <MDBRow className="g-0">
          <MDBCol md="6">
            <MDBCardImage
              src={logo}
              alt="login form"
              className="rounded-start w-100"
            />
          </MDBCol>

          <MDBCol md="6">
            <MDBCardBody className="d-flex flex-column">
              <div className="d-flex flex-row mt-2">
                <MDBIcon
                  fas
                  icon="cubes fa-3x me-3"
                  style={{ color: "#ff6219" }}
                />
                <span className="h1 fw-bold mb-0">Login</span>
              </div>

              <h5
                className="fw-normal my-4 pb-3"
                style={{ letterSpacing: "1px" }}
              >
                Sign into your account
              </h5>
              <>
                <h3>Login</h3>
                <DisplayError errors={errors} />
                <AuthForm
                  model={{ email: '', password: ''}}
                  onSubmit={async (values) => await login(values)}
                  children= {"Login"}  />
              </>
              <Link className="small text-muted" to="#!" >
                Forgot password?
              </Link>
              <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                Don't have an account?{" "}
                <Link to={'/register'} style={{ color: "#393f81" }}>
                  Register here
                </Link>
              </p>

              <div className="d-flex flex-row justify-content-start">
                <Link to="#!" className="small text-muted me-1">
                  Terms of use.
                </Link>
                <Link to="#!" className="small text-muted">
                  Privacy policy
                </Link>
              </div>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
  );
}
