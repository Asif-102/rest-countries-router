import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Countries = (props) => {


    let history = useHistory();

    function handleClick(countryName) {
        history.push(`/country/${countryName}`);
    }



    const { name, capital } = props.country;
    const countryStyle = {
        backgroundColor: "lightgray",
        width: "300px",
        height: "200px",
        padding: "10px",
        margin: "10px",
        float: "left"
    }
    return (
        <div style={countryStyle}>
            <div>
                <h3>Country Name: {name}</h3>
                <h4>Capital: {capital}</h4>
                <Link to={`/country/${name}`}>
                    <h5>See More ...</h5>
                </Link>
                <button type="button" onClick={() => handleClick(name)}>
                    Show More
                </button>
            </div>
        </div>
    );
};

export default Countries;