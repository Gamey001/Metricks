import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Repos } from "./components/GithubAPI/Repos";
import { About } from "./components/Metricks/About/About";
import { Home } from "./components/Metricks/Home/Home";
import { NavBar } from "./components/Metricks/Generics/NavBar";
import { TopReposProvider } from "./context/topReposContext";

const App = () => {
  return (
    <BrowserRouter>
      <TopReposProvider>
        <div className="container-fluid app-wrapper p-0">
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/github" element={<Repos />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </div>
      </TopReposProvider>
    </BrowserRouter>
  );
};
export default App;
