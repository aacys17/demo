import styled from 'styled-components';
import { Form } from 'formik';
import { Link } from 'react-router-dom';

export const Maindiv = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(135deg, #F4BD7C, #F57691);
`;
export const RegisterForm = styled(Form)`
  background: white;
  padding: 20px 30px;
  width: 500px;
  height: 500px;
  margin-bottom: 2rem;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
`;

export const FormGroup = styled.div`
  margin-top: 1.5rem;
  margin-left: 4rem;
  width: 10rem;
  line-height: 4.2rem;
`;
export const Heading = styled.div`
  display: flex;
  margin-left: 7.3rem;
  justify-content: center;
  align-items: center;
  h1 {
    margin-left: 1rem;
  }
`;
export const FieldControl = styled.div`
  width: 20rem;
`;
export const Btnsubmit = styled.button`
  width: 20rem;
  padding: 1em;
  background-color: #020000;
  // background-color: #4eb5f1;
  color: #fff;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  border-radius: 7px;
`;
export const Linking = styled(Link)`
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
