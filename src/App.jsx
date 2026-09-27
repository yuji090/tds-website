import { useEffect } from "react";
import Home from "./pages/Home";

import igaming from "./assets/igaming.svg";
import ecomm from "./assets/ecomm.png";
import finn from "./assets/fin.jpg";
import travel from "./assets/travel.png";
import apps from "./assets/apps.jpg";

function App() {
  useEffect(() => {
    const images = [
      finn,
      igaming,
      ecomm,
      travel,
      apps,
      "/verticals/consumer.jpg",
    ];

    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return <Home />;
}

export default App;