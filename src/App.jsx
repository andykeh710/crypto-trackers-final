import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom';
import CoinDetailPage from './pages/CoinDetailPage';
import CoinSumPage from './pages/CoinSumPage';
import Header from './components/Header'
import "./App.css"
import { WatchListContextProvider } from './context/watchlistContext';


const App = () => {
  return (
    <div> 
      <WatchListContextProvider>
    <BrowserRouter>
    <Header/>
    <Route exact path="/" component={CoinSumPage}/>
    </BrowserRouter>
    </WatchListContextProvider>
    </div>
  )
}

export default App