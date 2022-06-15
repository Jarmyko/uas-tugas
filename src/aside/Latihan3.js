import logo from '../logo.svg';
import '../App.css';
import Navbar from '../components/Navbar';
import Aside from '../components/Aside';
import Footer from '../components/Footer';

function App() {
  function Buah(props) {
    return <h1>Buah {props.nameBuah}</h1>;
    }

  return (
    <>
    <Navbar />
    <Aside /> {/* Buat List Latihan */}

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="text-3xl font-bold italic">
          Components dan Props React
        </h1>

        <p class="min-h-auto w-96 bg-white text-xl font-light leading-relaxed text-black mt-6 mb-10 inline-block">
          <span> Hasil Components dan Props React <br /></span>
        <div className='mt-3 text-xl font-bold mb-2'>
          <Buah nameBuah="Alpukat" />
          <Buah nameBuah="Strawberry" />
          <Buah nameBuah="Mangga" />
        </div>
    </p>
        <pre class="line-numbers h-auto w-700px">
          <h1> Code Snippet Components dan Props</h1>
          <br/>
          function Buah(props) &#123;
            return &#60;h1&#62;Buah &#123;props.nameBuah&#125;&#60;/h1&#62;;
            &#125;
            <br />
            <br />
            &#60;div className='mt-3 text-xl font-bold mb-2'&#62;
            <br />
          &#60;Buah nameBuah="Alpukat" /&#62;
          <br />
          &#60;Buah nameBuah="Strawberry" /&#62;
          <br />
          &#60;Buah nameBuah="Mangga" /&#62;
          <br />
        &#60;/div&#62;
        </pre>
      </header>
    </div>
    <Footer />
    </>
  );
}

export default App;
