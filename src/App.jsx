import {  Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout"
import { Home, Buzzbee, Contact, CyberSec, ItService } from "./pages";
const App = () => (
  <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="buzzebee" element={<Buzzbee />} />
          <Route path="cyber" element={<CyberSec />} />
          <Route path="itservice" element={<ItService />} />
          <Route path="contact" element={<Contact />} />
  </Route>
  </Routes>
);

export default App;
