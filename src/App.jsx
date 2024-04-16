import "./App.css";
import Navbar from "../src/components/shared/Navbar";
import Footer from "../src/components/shared/Footer";
import Filter from "../src/components/Filter";

function App() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Filter />
      <Footer />
    </main>
  );
}

export default App;
