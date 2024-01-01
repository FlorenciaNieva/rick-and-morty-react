import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import CardsContainer from "./components/CardsContainer";
import Details from "./components/Details";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<CardsContainer />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/*" element={<h1>NOT FOUND</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
