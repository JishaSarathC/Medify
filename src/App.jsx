import {BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import SearchResults from "./Pages/SearchResults";
import MyBookingPage from "./Pages/MyBookingPage";
import "./App.css";
function App() {
 
  return (
    <div>
      
      <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<HomePage />} />
        <Route path ="/search" element = {<SearchResults />} />
        <Route path ="/my-bookings" element = {<MyBookingPage />} />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
