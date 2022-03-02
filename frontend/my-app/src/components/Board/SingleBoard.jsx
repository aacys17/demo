import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Maindiv,
  Seconddiv,
  Section,
  Sidebar,
  Divimage,
  Button,
} from './SingleboardWrapper';
import { NavBar } from '../Navbar/navbar';

export const SingleBoard = () => {
  const [details, setDetails] = useState({});
  const { id } = useParams();

  async function fetchDetails() {
    const response = await axios.get('http://localhost:5000/task/' + id);

    if (response) {
      setDetails({ ...response.data });
    } else {
      setDetails(details);
    }
  }
  console.log(details);
  useEffect(() => {
    fetchDetails();
  }, [id]);
  return (
    <>
      <NavBar />
      <Maindiv>
        <Seconddiv>
          <Section>
            <Divimage src="/images/image.jpg"></Divimage>
          </Section>
          <Sidebar>
            <h1>{details.brand}</h1>
            <h3>Dress Description</h3>
            <p>Speed: {details.speed}mph</p>
            <p>Negotiable: {details.negotiable ? 'Yes' : 'No'}</p>
            <p>Serviced: {details.serviced ? 'Yes' : 'No'}</p>
            {/* <p>Price:{details.price}</p> */}
            <p>
             dfjdjfdjfhdjfhfd
            </p>
            <p></p>
            <ul>
              {/* <p>{details.price}</p> */}
              {/* <li>{details.price}</li>
            <li>{details.speed}</li>
            <li>{details.manufactured}</li>
            <li>{details.price}</li> */}
            </ul>
            
          </Sidebar>
          
        </Seconddiv>
        <Button>Add to wishlist</Button>
      </Maindiv>
    </>
  );
};

export default SingleBoard;