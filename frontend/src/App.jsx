/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Blogs from "pages/Blogs";
import Contact from "pages/Contact";
import Home from "pages/Home";
import Layout from "pages/Layout";
import NoPage from "pages/NoPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
