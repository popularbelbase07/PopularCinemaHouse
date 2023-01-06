import axios from "axios";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage, MDBCol, MDBContainer, MDBIcon, MDBRow
} from "mdb-react-ui-kit";
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { urlAccounts } from "../endpoints";
import logo from "../navBar/Oracle Cinema.gif";
import DisplayError from "../Utils/DisplayError";
import { authenticationResponse, userCredentials } from "./auth.models";
import AuthenticationContext from "./AuthenticationContext";
import AuthForm from "./AuthForm";
import { getClaims, saveToken } from "./handleJWT";

export default function Registration() {


  const [errors, setErrors] = useState<string[]>([]);
  const { update } = useContext(AuthenticationContext);
  const history = useHistory();

  async function register(credentials: userCredentials) {
    try {
      setErrors([]);
      const response = await axios.post<authenticationResponse>(
        `${urlAccounts}/create`, credentials );
      // Passing JWT Token
      saveToken(response.data);
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
                <span className="h1 fw-bold mb-0">Registration</span>
              </div>

              <h5
                className="fw-normal my-4 pb-3"
                style={{ letterSpacing: "1px" }}
              >
                Please Register yourself first
              </h5>

              <>
                <DisplayError errors={errors} />
                <AuthForm
                  model={{ email: "", password: "" }}
                  children= {"Signup"}
                  onSubmit={async (values) => await register(values)}
                 
                />
              </>
              <div className="d-flex flex-row justify-content-start">
                <a href="#!" className="small text-muted me-1">
                  Terms of use.
                </a>
                <a href="#!" className="small text-muted">
                  Privacy policy
                </a>
              </div>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
  );
}
