import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Country from '../Country/Country';

const CountryInfo = () => {
    const {countryName} = useParams();
    const [country, setCountry] = useState([]);
    useEffect(()=>{
        const url = `https://restcountries.eu/rest/v2/name/${countryName}`;
        fetch(url)
        .then(res => res.json())
        .then(data=> setCountry(data))
    },[])
    return (
        <div style={{margin:"10px"}}>
            {
                country.map(info=><Country info={info}></Country>)
            }
        </div>
    );
};

export default CountryInfo;