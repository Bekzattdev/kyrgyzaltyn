import Achievements from "./HomePages/Achievment/Achievements";
import GoldCompany from "./HomePages/Graficks/GoldGrafick";
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
    <GoldCompany/>
    <News/>
    <Maps/>
    </>
  );
};

export default HomePage;