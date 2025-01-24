import Achievements from "./Achievements";
import Grafick from "./Grafick";
import Investment from "./Investment";
import Maps from "./Maps";
import News from "./News";
import Welcome from "./Welcome";
const HomePage = () => {
  return (
    <>
    <Welcome/>
    <Achievements/> 
    <Investment/>
    <Grafick/>
    <News/>
    <Maps/>
    </>
  );
};

export default HomePage;