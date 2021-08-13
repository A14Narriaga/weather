import { useEffect } from "react";

const Card = ({
  currentCity,
  currentTempC,
  setCurrentTempC,
}: {
  currentCity: string;
  currentTempC: string;
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
      <h1>{currentTempC + "°C"}</h1>
    </section>
  );
};

export default Card;
