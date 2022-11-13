import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";

function App() {
  return (
    <div className=" bg-white ">
      <Navbar/>
      <Header/>
      <Services/>
      <Portfolio/>
    </div>
  );
}

export default App;
