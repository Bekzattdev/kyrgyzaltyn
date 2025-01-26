import Achievements from "./HomePages/Achievment/Achievements";
import Grafick from "./HomePages/Graficks/Grafick";
import Investment from "./HomePages/Investment/Investment";
import Maps from "./HomePages/Maps/Maps";
import News from "./HomePages/News/News";
import Welcome from "./HomePages/Welcome/Welcome";

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