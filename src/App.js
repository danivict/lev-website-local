import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';

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
        <Route path='/' element={ <Home /> }/>
      </Routes>
    </>
  );
}

export default App;
