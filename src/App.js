import BuyToday from "./components/BuyToday/BuyToday";
import CalCulatorTool from "./components/CalculatorTool/CalCulatorTool";
import CopyRight from "./components/CopyRight/CopyRight";
import HaveMoreQuestion from "./components/HaveMoreQuesstion/HaveMoreQuestion";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import Partners from "./components/Partners/Partners";

import Purchase from "./components/Purchase/Purchase";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Partners />
      <Purchase />
      <BuyToday />
      <CalCulatorTool />
      <HaveMoreQuestion />
      <CopyRight />
    </>
  );
}

export default App;
