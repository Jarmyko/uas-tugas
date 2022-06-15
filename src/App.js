import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./Home'));
const Dashboard = lazy(() => import('./Home'));
const ListLatihan = lazy(() => import('./menu/ListLatihan'));
const About = lazy(() => import('./menu/About'));
const Latihan1 = lazy(() => import('./aside/Latihan1'));
const Latihan2 = lazy(() => import('./aside/Latihan2'));
const Latihan3 = lazy(() => import('./aside/Latihan3'));
const Latihan4 = lazy(() => import('./aside/Latihan4'));
const Latihan5 = lazy(() => import('./aside/Latihan5'));
// const Api2 = lazy(() => import('./aside/Api2'));

const App = () => (
<Router>
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
    <Route path="/Home" element={<Dashboard />} />
    <Route path="/" element={<Home />} />
    <Route path="/ListLatihan" element={<ListLatihan />} />
    <Route path="/About" element={<About />} />
    <Route path="/Latihan1" element={<Latihan1 />} />
    <Route path="/Latihan2" element={<Latihan2 />} />
    <Route path="/Latihan3" element={<Latihan3 />} />
    <Route path="/Latihan4" element={<Latihan4 />} />
    <Route path="/Latihan5" element={<Latihan5 />} />
    {/* <Route path="/Api2" element={<Api2 />} /> */}

    </Routes>
  </Suspense>
</Router>
) 

export default App;