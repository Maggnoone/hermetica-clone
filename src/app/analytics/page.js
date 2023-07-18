import NavBar from "components/NavBar";
import { Montserrat } from "next/font/google";
import Footer from "../../../components/Footer";
import HeroAnalyticsSection from "../../../components/HeroAnalyticsSection";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "800"],
});

export default function Home() {
  return (
    <div className={montserrat.className}>
      <NavBar />
      <HeroAnalyticsSection />
      <Footer />
    </div>
  );
}
