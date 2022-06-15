import logo from '../logo.svg';
import '../App.css';
import Navbar from '../components/Navbar';
import Aside from '../components/Aside';
import Footer from '../components/Footer';

function App() {

  const cars = ["BMW ", " Volvo", " Saab", " Ford", " Fiat", " Audi"];

  let text = "";
  for (let i = 0; i < cars.length; i++) {
    text += cars[i] + "<br>";
  }

  return (
    <>
    <Navbar />
    <Aside /> {/* Buat List Latihan */}

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="text-3xl font-bold italic">
         Looping JavaScript
        </h1>

        <p class="min-h-auto w-96 bg-white text-xl font-light leading-relaxed text-black mt-6 mb-10 inline-block">
          Hasil Looping JavaScript --&#62; <span className="text-2xl font-bold"> {cars} </span>
        </p>

        <pre class="line-numbers h-auto w-700px">
          <h1> Code Snippet Looping</h1>
          <br/>
          const cars = ["BMW ", " Volvo", " Saab", " Ford", " Fiat", " Audi"];
          <br />
          <br />
          let text = "";
          for (let i = 0; i &#62; cars.length; i++) <br />
          &#123;
            text += cars[i] + "&#60;br /&#62;"; 
          &#125;
        </pre>

      </header>

    </div>
    <Footer />
    </>
  );
}

export default App;
