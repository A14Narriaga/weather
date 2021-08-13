import { useEffect, useState } from "react";
import Card from "./Card";
import CitySelector from "./CitySelector";
import "../sass/App.scss";

const cityInitialState = localStorage.getItem("city") || "";

const App = () => {
  const [citys, setCitys] = useState([] as any);
  const [currentCity, setCurrentCity] = useState(cityInitialState);
  const [currentTempC, setCurrentTempC] = useState("0");

  const handleCurrentCity = (city: string) => {
    setCurrentCity(city);
    localStorage.setItem("city", city);
  };

  useEffect(() => {
    const getCitys = async () => {
      setCitys([]);
      const url = "https://appsmx.com.mx/api/test/ciudad.php";
      const response = await fetch(url);
      const json = await response.json();
      setCitys(json.data);
      if (currentCity === "") setCurrentCity(json.data[0]);
    };
    getCitys();
  }, [setCitys, setCurrentCity, currentCity]);

  return (
    <section className="container">
      <h1 className="title">Clima</h1>
      <div className="content">
        <Card
          currentCity={currentCity}
          currentTempC={currentTempC}
          setCurrentTempC={setCurrentTempC}
        />
        <CitySelector
          citys={citys}
          currentCity={currentCity}
          handleCurrentCity={handleCurrentCity}
        />
      </div>
    </section>
  );
};

export default App;
