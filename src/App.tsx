import { ChangeEvent, FormEvent, useState } from "react";
import styled from "styled-components";

type TInputs = {
  firstname: string;
  lastname: string;
  emailaddress: string;
  password: string;
};

function App() {
  const [inputValues, setInputValues] = useState<TInputs>({
    firstname: "",
    lastname: "",
    emailaddress: "",
    password: "",
  });

  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [emailAddressError, setEmailAddressError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let globalError = false;

    if (!inputValues.firstname) {
      setFirstNameError(true);
      globalError = true;
    }

    if (!inputValues.lastname) {
      setLastNameError(true);
      globalError = true;
    }

    if (!emailRegex.test(inputValues.emailaddress)) {
      setEmailAddressError(true);
      globalError = true;
    }

    if (!inputValues.password) {
      setPasswordError(true);
      globalError = true;
    }

    if (!globalError) {
      setInputValues({
        firstname: "",
        lastname: "",
        emailaddress: "",
        password: "",
      });
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    name == "firstname" && setFirstNameError(false);
    name == "lastname" && setLastNameError(false);
    name == "emailaddress" && setEmailAddressError(false);
    name == "password" && setPasswordError(false);

    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };
  return (
    <>
      <Container>
        <InfoContainer>
          <h1 className="title">Learn to code by watching others</h1>
          <p>
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </p>
        </InfoContainer>
        <FormContainer>
          <button className="tryFreeBtn">
            Try it free 7 days <span>then $20/mo. thereafter</span>
          </button>
          <StyledForm error={false} onSubmit={handleSubmit}>
            <StyledInput
              name="firstname"
              placeholder="First Name"
              value={inputValues.firstname}
              onChange={handleChange}
            />

            <ErrorMessage error={firstNameError}>
              First Name cannot be empty
            </ErrorMessage>

            <StyledInput
              name="lastname"
              placeholder="Last Name"
              value={inputValues.lastname}
              onChange={handleChange}
            />

            <ErrorMessage error={lastNameError}>
              Last Name cannot be empty
            </ErrorMessage>

            <StyledInput
              name="emailaddress"
              placeholder="Email Address"
              value={inputValues.emailaddress}
              onChange={handleChange}
            />

            <ErrorMessage error={emailAddressError}>
              Looks like this is not an email
            </ErrorMessage>

            <StyledInput
              name="password"
              type="password"
              placeholder="Password"
              value={inputValues.password}
              onChange={handleChange}
            />

            <ErrorMessage error={passwordError}>
              Password cannot be empty
            </ErrorMessage>

            <button type="submit" className="claimBtn">
              CLAIM YOUR FREE TRIAL
            </button>
            <p className="termsServices">
              By clicking the button, you are agreeing to our{" "}
              <span>Terms and Services</span>
            </p>
          </StyledForm>
        </FormContainer>
      </Container>
    </>
  );
}

const ErrorMessage = styled.p<{ error?: boolean }>`
  font-size: 1.1rem;
  font-weight: 500;
  color: #ff7979;
  margin-left: auto;
  margin-top: -1rem;
  display: ${(props) => (props.error ? "block" : "none")};
  max-width: 54rem;
`;

const Container = styled.div`
  display: flex;
  gap: 5rem;
  margin: 2rem;

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3rem;
  max-width: 52.5rem;

  @media screen and (max-width: 900px) {
    text-align: center;
  }

  h1 {
    font-size: 5rem;
    font-weight: bold;
    line-height: 1.1;
    letter-spacing: -0.052rem;
    color: #fff;

    @media screen and (max-width: 1050px) {
      font-size: 4rem;
    }

    @media screen and (max-width: 400px) {
      font-size: 3rem;
      line-height: 1.3;
    }
  }

  p {
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 1.63;
    letter-spacing: normal;
    color: #fff;
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  .tryFreeBtn {
    height: 6rem;
    border-radius: 1rem;
    box-shadow: 0 8px 0 0 rgba(0, 0, 0, 0.15);
    background-color: #5e54a4;
    color: #fff;
    font-size: 1.5rem;
    font-weight: bold;

    span {
      font-size: 1.5rem;
      font-weight: 300;
    }

    @media screen and (max-width: 600px) {
      height: 10rem;
      font-size: 2.1rem;
      padding: 0 7rem;

      span {
        font-size: 2.1rem;
      }
    }

    @media screen and (max-width: 400px) {
      font-size: 1.6rem;
      padding: 0 4rem;

      span {
        font-size: 1.6rem;
      }
    }
  }
`;

const StyledForm = styled.form<{ error?: boolean }>`
  min-width: 54rem;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 1rem;
  box-shadow: 0 8px 0 0 rgba(0, 0, 0, 0.15);
  gap: ${(props) => (props.error ? "none" : "2rem")};

  @media screen and (max-width: 600px) {
    min-width: 0;
    max-width: 54rem;
    padding: 2rem;
  }

  .claimBtn {
    width: 100%;
    height: 5.6rem;
    border-radius: 0.5rem;
    box-shadow: inset 0 -4px 0 0 rgba(0, 0, 0, 0.09);
    background-color: #38cc8b;
    font-size: 1.5rem;
    font-weight: 600;
    color: #fff;
    cursor: pointer;

    &:hover {
      background-color: #77e2b3;
    }
  }

  .termsServices {
    font-size: 1.1rem;
    font-weight: 500;
    line-height: 2.36;
    color: #bab7d4;

    span {
      font-size: 1.1rem;
      line-height: 2.6rem;
      color: #ff7979;
    }

    @media screen and (max-width: 400px) {
      text-align: center;
    }
  }
`;

const StyledInput = styled.input`
  width: 100%;
  height: 5.6rem;
  border-radius: 0.5rem;
  border: solid 1px #5e54a4;
  background-color: #fff;
  padding: 1.5rem 3.5rem;
  font-size: 1.4rem;
  font-weight: 600;
  color: #3d3b48;

  @media screen and (max-width: 400px) {
    opacity: 0.5;
  }
`;

export default App;
