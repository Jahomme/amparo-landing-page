import HomeContainer from "../../components/HomeContainer";
import About from "../../components/About";
import Header from "../../components/Header";
import Need from "../../components/Need";
import Team from "../../components/Team";
import Faq from "../../components/Faq";
import Expect from "../../components/Expect";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <>
      {" "}
      <Header />
      <HomeContainer />
      <About />
      <Need />
      <Team />
      <Faq />
      <Expect />
      <Contact />
      <Footer />
    </>
  );
}
