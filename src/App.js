import Home from "./components/Home";
import About from "./components/About";
import Header from "./components/Header";
import Need from "./components/Need";
import GlobalStyles from "./styles/GlobalStyles";
import Team from "./components/Team";
import Faq from "./components/Faq";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Need />
      <Team />
      <Faq />
      <GlobalStyles />
    </>
  );
}

export default App;
