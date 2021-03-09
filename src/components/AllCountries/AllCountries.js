import React, { useEffect, useState } from 'react';
import { Container, Row} from 'react-bootstrap';
import Countries from '../Countries/Countries'
const AllCountries = () => {
    const [allCountries,setAllCountries] = useState([]);
    useEffect(()=>{
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => setAllCountries(data))
    },[])
    return (
       <Container>
           <Row>
                {
                   allCountries.map(country=><Countries country={country}></Countries>)
               }
           </Row>
       </Container>
    );
};

export default AllCountries;