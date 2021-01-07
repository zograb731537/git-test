import React from "react";

export default function CitiesList(props) {
    console.log("4");
    return (
    <ul>
      {props.cities.map((city, index) => (
        <li key={city.name} onClick={() => props.onSelectCity(index)}>
          {city.name}({city.description})
        </li>
      ))}
    </ul>
  );
}
