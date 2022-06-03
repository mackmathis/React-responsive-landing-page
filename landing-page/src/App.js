import React from "react";
import Logo from "./Components/Logo";
import Hero from "./Components/Hero";
import ModernUse from "./Components/ModernUse";
import Footer from "./Components/Footer";

class App extends React.Component {
  render() {
    return (
      <main>
        <Logo />
        <Hero />
        <ModernUse />
        <Footer />
      </main>
    );
  }
}

export default App;
