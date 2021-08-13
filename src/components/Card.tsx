import { useEffect } from "react";

const Card = ({
  currentCity,
  currentTempC,
  currentTempUnits,
  setCurrentTempC,
}: {
  currentCity: string;
  currentTempC: string;
  currentTempUnits: string;
  setCurrentTempC: any;
}) => {
  useEffect(() => {
    const getTemperature = async () => {
      const url = "https://appsmx.com.mx/api/test/temperatura.php/";
      const response = await fetch(url + currentCity);
      const json = await response.json();
      setCurrentTempC(json.data);
    };
    getTemperature();
  }, [currentCity, setCurrentTempC]);

  return (
    <section className="card">
      <h3>{currentCity}</h3>
      <i className="fas fa-sun"></i>
      <p>Soleado</p>
      <h1>
        {(currentTempUnits === "°C" ? currentTempC : currentTempC + 32) +
          currentTempUnits}
      </h1>
    </section>
  );
};

export default Card;
