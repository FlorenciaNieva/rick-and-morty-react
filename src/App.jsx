import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import CardsContainer from "./components/CardsContainer";
import Details from "./components/Details";
import ContainerFavorites from "./components/ContainerFavorites";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import FavoritesContextProvider from "./context/favoritesContext";

function App() {
  return (
    <BrowserRouter>
      <FavoritesContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<CardsContainer />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/status/:byStatus" element={<CardsContainer />} />
          <Route path="/favorites" element={<ContainerFavorites />}></Route>
          <Route path="/*" element={<h1>NOT FOUND</h1>} />
        </Routes>
      </FavoritesContextProvider>
    </BrowserRouter>
  );
}

export default App;
