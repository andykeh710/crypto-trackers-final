import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom';
import CoinDetailPage from './pages/CoinDetailPage';
import CoinSumPage from './pages/CoinSumPage';
// import LoginPage from "./pages/LoginPage";
import { useState } from 'react'
import Header from './components/Header'
import CreatePortfolio from './pages/CreatePortfolio'
import "./App.css"
import { WatchListContextProvider } from './context/watchlistContext';

const App = () => {
const [loggedUser, setLoggedUser] = useState("");
console.log("WATCHLIST PROVIDER ----------------  ", loggedUser)

  return (
    <div className="container">
      <WatchListContextProvider>
        <BrowserRouter>
          <Header setLoggedUser={setLoggedUser} loggedUser={loggedUser}/>
          <Route exact path="/" component={CoinSumPage} />
          <Route 
          exact path="/createPortfolio" 
          render={(props) => (
            <CreatePortfolio {...props} isAuthed={true} loggedUser={loggedUser}/>
          )} />
          <Route path="/coins/:id" component={CoinDetailPage} />
        </BrowserRouter>
      </WatchListContextProvider>
    </div>
  );
};

export default App;