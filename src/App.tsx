import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div className="min-h-screen  bg-zinc-300 relative font-spartan">
      <NavBar />
      <Home />
      <About />
    </div>
  );
};

export default App;
