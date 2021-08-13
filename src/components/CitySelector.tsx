const CitySelector = ({
  citys,
  currentCity,
  handleCurrentCity,
}: {
  citys: [];
  currentCity: string;
  handleCurrentCity: any;
}) => {
  return (
    <section className="citys">
      <ul>
        {citys.map((city: string) => (
          <li
            className={currentCity === city ? "city-selected" : ""}
            key={city}
            onClick={() => handleCurrentCity(city)}
          >
            {city}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CitySelector;
