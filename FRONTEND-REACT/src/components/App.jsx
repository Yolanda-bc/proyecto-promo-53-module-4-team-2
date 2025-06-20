import "../styles/App.scss";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
import { Route, Routes, Link } from "react-router";
import Landing from "./Pages/Landing";
import Create from "./Pages/Create";
import DetailPages from "./Pages/DetailPages";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<Landing />}></Route>
            <Route path="/create" element={<Create />}></Route>
            <Route path="/DetailPages" element={<DetailPages />}></Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
