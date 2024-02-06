import { useEffect } from "react";
import { ConfigRoues } from "./routers";
import AOS from "aos";

import "aos/dist/aos.css";
import "./App.scss";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return <ConfigRoues />;
};

export default App;
