import "../sass/App.scss";
import Card from "./Card";
import CitySelector from "./CitySelector";



const App = () => {
  return (
    <section className="container">
      <h1 className="title">Clima</h1>
      <div className="content">
        <Card />
        <CitySelector />
      </div>
    </section>
  );
};

export default App;
