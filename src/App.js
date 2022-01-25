import TravelData from "./data";
import Travel from "./Components/Travel";
import Navbar from "./Components/Navbar";
import "./App.scss";

export default function App() {
  const TravelsArr = TravelData.map((data) => (
    <Travel key={data.title} {...data} />
  ));
  return (
    <div>
      <Navbar />
      {TravelsArr}
    </div>
  );
}
