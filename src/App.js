import React, {useState, useEffect} from "react";
import axios from "axios";
import NasaAPIContainer from "./Components/NasaAPIContainer";
import "./App.css";

function App() {
  const [nasaData, setNasaData] = useState(null);
  useEffect(() => {
    document.addEventListener('click', (e) => {test()});
    console.log(nasaData);
    return () => console.log('Cleanup dom click listener');
  },[nasaData])

  function test () {
    if(!nasaData) {
      setNasaData(
        {
          copyright: "Jimmy WestlakeColorado Mountain College",
          date: "2021-07-11",
          explanation: "Where's the Moon? Somewhere in this image, the Earth's Moon is hiding.  The entire Moon is visible, in its completely full phase, in plain sight. Even the photographer's keen eye couldn't find it even though he knew exactly where to look -- only the long exposure of his camera picked it up -- barely.  Although by now you might be congratulating yourself on finding it, why was it so difficult to see? For one reason, this photograph was taken during a total lunar eclipse, when the Earth's shadow made the Moon much dimmer than a normal full Moon. For another, the image, taken in Colorado, USA, was captured just before sunrise. With the Moon on the exact opposite side of the sky from the Sun, this meant that the Sun was just below the horizon, but still slightly illuminating the sky. Last, as the Moon was only about two degrees above the horizon, the large volume of air between the camera and the horizon scattered a lot of light away from the background Moon. Twelve minutes after this image was acquired in 2012, the Sun peeked over the horizon and the Moon set.",
          hdurl: "https://apod.nasa.gov/apod/image/2107/spotthemoon_westlake_2128.jpg",
          media_type: "image",
          service_version: "v1",
          title: "Find the Moon",
          url: "https://apod.nasa.gov/apod/image/2107/spotthemoon_westlake_960.jpg"
        })
      }
    }

  // useEffect(() => {
  //   axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
  //   .then ((response) => {
  //     setNasaData(response.data);
  //     console.log(response.data);
  //     return () => console.log('Cleanup API data upon unmounting.');
  //   })
  // }, []);
  

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      {
      !nasaData ? <h3>Loading...</h3> : <NasaAPIContainer nasaData={nasaData}/>
      }
    </div>
  );
}

export default App;
