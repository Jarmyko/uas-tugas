import logo from '../logo.svg';
import '../App.css';
import Navbar from '../components/Navbar';
import Aside from '../components/Aside';
import Footer from '../components/Footer';

function App() {
  let ucapan, waktuPagi;

  waktuPagi = true;

  if (waktuPagi) {
    ucapan = "Selamat Pagi!";
  }
  else {
    ucapan = "Selamat Sore!";
  }
  return (
    <>
    <Navbar />
    <Aside /> {/* Buat List Latihan */}

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="text-3xl font-bold italic">
         Kondisi IF JavaScript
        </h1>

        <p> 
          
        </p>

        <p class="min-h-auto w-96 bg-white text-xl font-light leading-relaxed text-black mt-6 mb-10 inline-block">
          Hasil IF --&#62; <span className='text-2xl font-bold'> {ucapan} </span> 
        </p>

      <pre class="line-numbers">

         <h1> Code Snippet IF</h1>
         <br/>
         waktuPagi = true;

            if (waktuPagi) &#123;
            <br />
              ucapan = "Selamat Pagi!";
            &#125;
            <br />
            else &#123;
            <br />
              ucapan = "Selamat Sore!";
            &#125;
      </pre>
      
      </header>

      
    </div>
    <Footer />
    </>
  );
}

export default App;
