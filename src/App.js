import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HomePage } from "./pages/Home/HomePage";
import { HeaderPartial } from "./partials/HeaderPartial";
import { MinhasPastasPage } from "./pages/MinhasPastas/MinhasPastasPage";
import { Footer } from "./partials/Footer";

import { AppContext } from "./store/AppContext";

const initialState = {
  activePinId: null,
  mode: null,
  folders: [],
  type: null,
  pins: [],
};

function App() {
  return (
    <BrowserRouter>
      <div className="App bg-light">
        <AppContext initialState={initialState}>
          <HeaderPartial />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/minhas-pastas" element={<MinhasPastasPage />} />
          </Routes>
          <Footer />
        </AppContext>
      </div>
    </BrowserRouter>
  );
}

export default App;
