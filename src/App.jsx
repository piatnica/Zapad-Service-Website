import "./App.css";
import Header from "./Components/Header/Header";
import Introduce from "./Components/Introduce/Introduce";
import About from "./Components/About/About";
import Service from "./Components/Service/Service";
import Advantages from "./Components/Advantages/Advantages";
import OrderInstructions from "./Components/OrderInstructions/OrderInstructions";
import Contacts from "./Components/Contacts/Contacts";
import Footer from "./Components/Footer/Footer";
import Maintenance from "./Components/Maintenance/Maintenance";
import { useEffect, useState } from "react";

function App() {
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 1200) {
      setShowWarning(true);
      document.body.style.overflow = "hidden";
    } else {
      setShowWarning(false);
      document.body.style.overflow = "visible";
    }
  }, []);

  return (
    <>
      {showWarning && <Maintenance />}
      <>
        <Header />
        <div className="background-image">
          <div className="covering-layer"></div>
        </div>
        <main style={{ position: "relative" }}>
          <Introduce />
          <Service /> {/* УСЛУГИ */}
          <About /> {/* О НАС */}
          <Advantages /> {/* Почему мы */}
          <OrderInstructions /> {/* Этапы работы */}
          <Contacts /> {/* Контакты */}
        </main>
        <Footer /> {/* Footer */}
      </>
    </>
  );
}

export default App;

// Gap мужду компонентами ~ 150px ~
// В warning page сделать надпись в угловых скобках [] coming soon
