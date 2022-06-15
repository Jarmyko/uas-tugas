import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Navbar />

    <div className="App">
      <header className="App-header">
        <h1 className="my-10 text-4xl font-bold italic">
         Selamat Datang Di Blog Catatan Latihan
        </h1>

        {/* Carousel */}
        <div id="carouselExampleCaptions" class="carousel slide relative justify-center h-auto w-4/5 mb-6" data-bs-ride="carousel">
  <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="0"
      class="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="2"
      aria-label="Slide 3"
    ></button>
  </div>
  <div class="carousel-inner relative w-full overflow-hidden">
    <div class="carousel-item active relative float-left w-full">
      <img
        src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
        class="block w-full"
        alt="..."
      />
      <div class="carousel-caption hidden md:block absolute text-center">
        <h5 class="text-xl">First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item relative float-left w-full">
      <img
        src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
        class="block w-full"
        alt="..."
      />
      <div class="carousel-caption hidden md:block absolute text-center">
        <h5 class="text-xl">Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item relative float-left w-full">
      <img
        src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
        class="block w-full"
        alt="..."
      />
      <div class="carousel-caption hidden md:block absolute text-center">
        <h5 class="text-xl">Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button
    class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="prev"
  >
    <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button
    class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="next"
  >
    <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
        </div>

        <p class="h-auto w-4/5 p-5 bg-gray-300 text-xl text-justify font-light leading-relaxed text-slate-700 mt-6 mb-10 inline-block rounded-md">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos cupiditate eos sunt officiis placeat unde quidem sequi culpa et. Facere laudantium ratione consectetur accusantium distinctio labore, incidunt, nam debitis quos, quod voluptatem molestiae praesentium ipsam eaque architecto deleniti asperiores. Cupiditate ex itaque omnis nemo reprehenderit animi nesciunt, soluta dolorem doloremque sint eum repellat laboriosam odit cum. Rerum illo voluptas velit minus ullam numquam veritatis amet eveniet at dolorum possimus debitis, nisi consectetur id! Molestiae pariatur nam hic sint facere in cumque, animi voluptatibus ab modi consequatur distinctio minima quod labore eligendi repellat a totam commodi quibusdam omnis, est blanditiis voluptas!

        </p>

      </header>

      
    </div>
    <Footer />
    </>
  );
}

export default App;
