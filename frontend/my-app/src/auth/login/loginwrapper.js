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
export const Loginform = styled(Form)`
  background: white;
  padding: 20px;
  width: 500px;
  height: 500px;
  margin-bottom: 1.5rem;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
`;

export const Heading = styled.div`

  h1 {
       display: flex;
  margin-bottom: 1rem;
  justify-content: left;
  align-items: center;
  }
  h2 {
  display: flex;
  margin-top: 2px;
  justify-content: left;
  line-height: 2.5rem;
  align-items: center;
  }
//   p {
//       font-size: 20px;
//       line-height: rem;
//   }
`;
 

export const Formgroup = styled.div`
  margin-left: 4.2rem;
  margin-top: 2rem;
  width: 10rem;
  line-height: 4.5rem;
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
  color: #fff;
  padding: 1rem;
  text-decoration: none;
  font-size: 1.2rem;
  &:hover {
    text-decoration: underline;
  }
`;
