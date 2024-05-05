import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import Footer from './components/footer';
import { About, Contact, Home, Signup, Login,Offers } from "./components/pages";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/offers" element={<Offers />} />

          <Route path="/login" element={<Login />} />

          <Route path="/Signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
