import { useEffect, useState } from "react";
import Card from "./Card";
import CitySelector from "./CitySelector";
import "../sass/App.scss";

const cityInitialState = localStorage.getItem("city") || "";
const tempUnitsInitialState = localStorage.getItem("tempUnits") || "°C";

const App = () => {
  const [citys, setCitys] = useState([] as any);
  const [currentCity, setCurrentCity] = useState(cityInitialState);
  const [currentTempC, setCurrentTempC] = useState("0");
  const [currrenTempUnits, setCurrrenTempUnits] = useState(
    tempUnitsInitialState
  );

  const handleCurrentCity = (city: string) => {
    setCurrentCity(city);
    localStorage.setItem("city", city);
  };

  const handleTemp = () =>
    setCurrrenTempUnits((u) => (u === "°C" ? "°F" : "°C"));

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
    <>
      <header>
        <section className="header-container">
          <h1>Clima</h1>
          <button className="btn-temp" onClick={handleTemp}>
            {currrenTempUnits}
          </button>
        </section>
      </header>
      <main className="container">
        <div className="content">
          <Card
            currentCity={currentCity}
            currentTempC={currentTempC}
            currentTempUnits={currrenTempUnits}
            setCurrentTempC={setCurrentTempC}
          />
          <CitySelector
            citys={citys}
            currentCity={currentCity}
            handleCurrentCity={handleCurrentCity}
          />
        </div>
      </main>
    </>
  );
};

export default App;
