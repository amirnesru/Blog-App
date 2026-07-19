import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Bookmarks from "./pages/Bookmarks";
import CreatePost from "./pages/CreatePost";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/bookmarks" element={<Bookmarks/>} />
        <Route path="/createpost" element={<CreatePost/>}/>

      </Routes>
    </>
  );
}
export default App;
