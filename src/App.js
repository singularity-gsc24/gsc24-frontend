import React from "react";
import MapSection from "./components/map/Map";
import "./App.css";

import { useState, useEffect } from "react";

// const location = {
//   address: "Salmon",
//   lat: 37.42216,
//   lng: -122.08427,
// };
function App() {
    // Call Login API and save the token in the context

    const [token, setToken] = useState("");

    const [fishLocation, setFishLocation] = useState([]);

    useEffect(() => {
        fetch("login/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: "admin",
                password: "admin@1234",
            }),
        })
            .then((res) => res.json())
            .then((response) => {
                setToken(response.token);
            });
    }, []);

    useEffect(() => {
        fetch("fish-location?country=Canada", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Token ${token}`,
            },
        })
            .then((res) => res.json())
            .then((response) => {
                setFishLocation(response);
                console.log(response);
            });
    }, [token]);

    return (
        <div className="App">
            <MapSection location={fishLocation} zoomLevel={17} />
        </div>
    );
}

export default App;
