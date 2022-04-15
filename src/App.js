import { useState } from 'react';
import './App.css';
import Home from './components/Home';
import {SideBar,Header} from './components/Index';
import {BuyHes,TokenOverview} from './screens/Index';
import { useEagerConnect, useInactiveListener } from './hooks/useEagerConnect';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';


function App() {
  const [errorMessage, setErrorMessage] = useState();
  useEagerConnect(setErrorMessage);
  useInactiveListener();

  return (
    <div className="App main-body">
      {/* {
        errorMessage? <div style={{color:"red"}}>{errorMessage}</div>: null
      }
      <Header setErrorMessage={setErrorMessage}/>
      <Home /> */}
      <Router>
      <SideBar />
      <div className="main-section">
        <Header/>
        <Routes>
        <Route path="/" element={<BuyHes/>}  />
        <Route path="/token-overview" element={<TokenOverview/>}  />
        </Routes>
      </div>
      </Router>
    </div>
  );
}

export default App;
