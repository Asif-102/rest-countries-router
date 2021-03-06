import React from 'react';

const Country = (props) => {
    const {name,capital,region,population,area,flag} = props.info;
    return (
        <div>
            <h3>Name of Country: {name}</h3>
            <p>Capital: {capital}</p>
            <p>Region: {region}</p>
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <img src={flag} alt="" height="150px"/>
        </div>
    );
};

export default Country;