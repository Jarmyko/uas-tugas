import logo from '../logo.svg';
import '../App.css';
import Navbar from '../components/Navbar';
import Aside from '../components/Aside';
import Footer from '../components/Footer';

function App() {
  return (
    <>
    <Navbar />
    <Aside /> {/* Buat List Latihan */}

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="text-3xl font-bold italic">
         List Latihan
        </h1>

        <p class="min-h-auto w-96 bg-white text-xl font-light leading-relaxed text-black mt-6 mb-10 inline-block">
           Berisi daftar latihan yang telah dikerjakan.
        </p>
      </header>

      
    </div>
    <Footer />
    </>
  );
}

export default App;
