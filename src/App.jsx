import React from 'react'
import { FirebaseDatabaseProvider } from "@react-firebase/database";
import {BrowserRouter, Route} from 'react-router-dom';
import CoinDetailPage from './pages/CoinDetailPage';
import CoinSumPage from './pages/CoinSumPage';
// import LoginPage from "./pages/LoginPage";
import Header from './components/Header'

import "./App.css"
import { WatchListContextProvider } from './context/watchlistContext';


const App = () => {
  return (
    <div className="container">
              {/* <FirebaseDatabaseProvider>
              <div>
                This is my app
                <SomeOtherComponent />
              </div>
              </FirebaseDatabaseProvider> */}
      <WatchListContextProvider>
        <BrowserRouter>
          <Header />
          <Route exact path="/" component={CoinSumPage} />

          <Route path="/coins/:id" component={CoinDetailPage} />
        </BrowserRouter>
      </WatchListContextProvider>
    </div>
  );
};

export default App;