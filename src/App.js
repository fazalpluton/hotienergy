import { useState } from 'react';
import './App.css';
import Home from './components/Home';
import {SideBar,Header} from './components/Index';
import {BuyHes,TokenOverview,Payments,Stake,Calculator} from './screens/Index';
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
        <Route path="/coming-payments" element={<Payments/>}  />
        <Route path="/stake" element={<Stake/>}  />
        <Route path="/calculator" element={<Calculator/>}  />


        </Routes>
      </div>
      </Router>
    </div>
  );
}

export default App;
