import About from "./components/About";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import Products from "./components/Products";
import Features from "./components/Features";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";

function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar />
      <Hero />
      <Products />
      <About />
      <Features />
      <Reviews />
      <Contact />
    </main>
  );
}

export default App;
