import "../styles/App.scss";

import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
import { Route, Routes, Link } from "react-router";
import Landing from "./Pages/Landing";
import Create from "./Pages/Create";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<Landing />}></Route>
            <Route path="/create" element={<Create />}></Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
