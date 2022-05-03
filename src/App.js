import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import Help from './pages/Help';
import Driver from './pages/Driver';

function App() {
  const [headerActive, setHeaderActive] = useState(false);

  useEffect(() => {
    window.onscroll = function() {
      showHeader();
    };
  } , []);

  const showHeader = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      setHeaderActive(true);
    } else {
      setHeaderActive(false);
    }
  }

  return (
    <>
      <Header headerActive={ headerActive } />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/help' element={ <Help /> } />
        <Route path='/driver' element={ <Driver /> } />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
