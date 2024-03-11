import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import ProfilePage from "./Pages/profile/ProfilePage";
import CartPage from "./Pages/CartPage";
import FavouratesPage from "./Pages/FavouratesPage";
import RegistrationPage from "./Pages/profile/RegistrationPage";
import LoginPage from "./Pages/profile/LoginPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<ProfilePage />} />

          <Route path="/favourates" element={<FavouratesPage />} />
          <Route path="/cart" element={<CartPage />} />

          <Route path="/searchbybrand/:id" element={<FavouratesPage />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
