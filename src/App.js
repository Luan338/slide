import React from "react";
import { Slide } from "./Slide";

import imgLuan from './imgs/luan.jpg';
import imgLorena from './imgs/lorena.jpg';
import imgLeandro from './imgs/leandro.jpg';
import imgThaiz from './imgs/thaiz.jpg';


function App() {

    const slides = [
      {
        id: "slide1",
        text: "Luan",
        photo: imgLuan
      },
      {
        id: "slide2",
        text: "Lorena",
        photo: imgLorena
      },
      {
        id: "slide3",
        text: "Leandro",
        photo: imgLeandro
      },
      {
        id: "slide4",
        text: "Thaiz",
        photo: imgThaiz
      }
    ]

    return (
      <div>
        <Slide slides={slides}/>
      </div>
  );
}

export default App;
