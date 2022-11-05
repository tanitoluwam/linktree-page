
import "./App.css";
import { Profile } from "./pages/profile/Profile";
import { Footer } from "./components/footer/Footer";
import {routes, router, Routes, Route } from "react-router-dom"
import { Contact } from "./components/forms/contact/Contact";

function App() {
  return (
      <div className="App">
        <Routes>
          <Route index element={<Profile />}></Route>
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
  
  );
}

export default App;
