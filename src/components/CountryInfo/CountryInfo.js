import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CountryInfoDetail from '../CountryInfoDetail/CountryInfoDetail';


const CountryInfo = () => {

    const{countryName} =useParams();
    const[country, setCountry] = useState([]);
    useEffect(()=>{
        const url = `https://restcountries.eu/rest/v2/name/${countryName}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setCountry(data))
    },[countryName])
    return (
        <div style={{margin:'10px',padding:'10px'}}>
            {
                country.map(info=><CountryInfoDetail info={info}></CountryInfoDetail>)
            }
        </div>
    );
};

export default CountryInfo;