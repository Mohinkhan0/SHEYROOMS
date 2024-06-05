import React, { useEffect, useState } from "react";
import axios from "axios";
import Room from "../components/Room";

function Homescreen() {
  const [rooms, setrooms] = useState([]);
  const [loading, setloading] = useState([]);
  const [error, seterror] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        setloading(true);
        const response = await axios.get("/api/rooms/getallrooms");
        const data = response.data; // Define 'data' variable here
        setrooms(data);
        setloading(false);
      } catch (error) {
        seterror(true);
        console.error("Error fetching data:", error);
        setloading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div class="container">
      <div class="row justify-content-center mt-5">
        {loading ? (
          <h1> Loading.......</h1>
        ) : error ? (
          <h1>Error</h1>
        ) : (
          rooms.map((room) => {
            return <div class="col-md-9 mt-3">
                  <Room room={room}/>
                </div>;
    
          })
        )}
      </div>
    </div>
  );
}

export default Homescreen;
