import React, { useEffect, useState } from "react";

function CountryFlags() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,flags,cca3")
      .then((response) => response.json())
      .then((data) => {
        setCountries(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setCountries([]);
        setLoading(false);
      });
  }, []);

  const cardStyle = {
    width: "200px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    margin: "10px",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  };

  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
  };

  const imageStyle = {
    width: "100px",
    height: "100px",
  };

  return (
    <div style={containerStyle}>
      {loading ? (
        <p>Loading...</p>
      ) : countries.length > 0 ? (
        countries.map((country) => (
          <div key={country.cca3} style={cardStyle}>
            <img
              src={country.flags?.png}
              alt={`Flag of ${country.name?.common}`}
              style={imageStyle}
            />
            <h2>{country.name?.common}</h2>
          </div>
        ))
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}

export default CountryFlags;


// import React, { useEffect, useState } from "react";

// function CountryFlags() {
//   const [countries, setCountries] = useState([]);

//  useEffect(() => {
//     fetch("https://restcountries.com/v3.1/all?fields=name,flags,cca3")
//       .then((response) => response.json())
//       .then((data) => {
//         console.log("Fetched data:", data);
//         setCountries(Array.isArray(data) ? data : []);
//       })
//       .catch((error) => {
//         console.error("Error fetching data: ", error);
//         setCountries([]);
//       });
//   }, []);



//   const cardStyle = {
//     width: "200px",
//     border: "1px solid #ccc",
//     borderRadius: "10px",
//     margin: "10px",
//     padding: "10px",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//     textAlign: "center",
//   };

//   const containerStyle = {
//     display: "flex",
//     flexWrap: "wrap",
//     justifyContent: "center",
//     alignItems: "center",
//     height: "100vh",
//   };

//   const imageStyle = {
//     width: "100px",
//     height: "100px",
//   };

//   return (
//     <div style={containerStyle}>
//       {Array.isArray(countries) ? (
//         countries.map((country) => (
//           <div key={country.cca3} style={cardStyle}>
//             <img
//               src={country.flags?.png}
//               alt={`Flag of ${country.name?.common}`}
//               style={imageStyle}
//             />
//             <h2>{country.name?.common}</h2>
//           </div>
//         ))
//       ) : (
//         <p>No data available</p>
//       )}
//     </div>
//   );
// }

// export default CountryFlags;
