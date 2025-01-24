import Achievements from "./Achievements";
import GoldGrafick from "./GoldGrafick";
import Investment from "./Investment";
import News from "./News";
import SomGrafick from "./SomGrafick";
import Welcome from "./Welcome";
const HomePage = () => {
  return (
    <>
    <Welcome/>
    <Achievements/> 
    <Investment/>
    <GoldGrafick/>
    <SomGrafick/>
    <News/>
    </>
  );
};

export default HomePage;