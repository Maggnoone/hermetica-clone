import NavBar from "components/NavBar";
import HeroVaultSection from "../../components/HeroVaultSection";
import { Montserrat } from "next/font/google";
import Footer from "../../components/Footer";
import DesplegableBars from "../../components/DesplegableBars";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "800"],
});

export default function Home() {
  return (
    <div className={montserrat.className}>
      <NavBar />
      <div>
        <HeroVaultSection />
      </div>
      <DesplegableBars />
      <Footer />
    </div>
  );
}
