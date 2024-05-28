import { useState } from "react";
import "./App.css";
import styled from "styled-components";

function App() {
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
          <StyledForm>
            <StyledInput name="First Name" placeholder="First Name" />
            <StyledInput name="Last Name" placeholder="Last Name" />
            <StyledInput name="Email Address" placeholder="Email Address" />
            <StyledInput name="Password" placeholder="Password" />
            <button className="claimBtn">CLAIM YOUR FREE TRIAL</button>
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

const Container = styled.div`
  display: flex;
  gap: 5rem;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3rem;
  width: 52.5rem;

  h1 {
    font-size: 5rem;
    font-weight: bold;
    line-height: 1.1;
    letter-spacing: -0.052rem;
    color: #fff;
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
    width: 54rem;
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
  }
`;

const StyledForm = styled.form`
  padding: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  background-color: #fff;
  border-radius: 1rem;
  box-shadow: 0 8px 0 0 rgba(0, 0, 0, 0.15);

  .claimBtn {
    width: 100%;
    height: 5.6rem;
    border-radius: 0.5rem;
    box-shadow: inset 0 -4px 0 0 rgba(0, 0, 0, 0.09);
    background-color: #38cc8b;
    font-size: 1.5rem;
    font-weight: 600;
    color: #fff;
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
  }
`;

const StyledInput = styled.input`
  width: 46rem;
  height: 5.6rem;
  border-radius: 0.5rem;
  border: solid 1px #5e54a4;
  background-color: #fff;
  padding: 1.5rem 35rem 1.5rem 3.2rem;
  font-size: 1.4rem;
  font-weight: 600;
  color: #3d3b48;
`;

export default App;
