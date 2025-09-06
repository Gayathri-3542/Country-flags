import React, {useState, useEffect} from 'react';
import './FlagDisplay.css';

function FlagDisplay() {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCountries = async () => {
            try{
            const response = await fetch('https://xcountries-backend.azurewebsites.net/all'); 
            if(!response.ok){
                throw new Error(`HTTP error: ${response.status}`);
            }
            const data = await response.json();
                setCountries(data);
           } catch (err) {
                console.error(`Error fetching data: ${err.message}`);
                setError(err);
            }
            finally {
                setLoading(false);
            }
        };
        fetchCountries();
    }, []);

    if(loading){
        return <p>Loading countries...</p>
    }
    if (error){
        return <p className="error">Failed to load countries. Please try again later.</p>;
    }

    return (
        <div className='grid'>
            {countries.map((country, index)=> (
                <div key={index} className="card">
                    <img src={country.flag} alt={`${country.name} flag`}/>
                    <p>{country.name}</p>
                </div>
            ))}
            
        </div>
    );


}

export default FlagDisplay;