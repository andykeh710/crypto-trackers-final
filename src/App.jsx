import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom';
import CoinDetailPage from './pages/CoinDetailPage';
import CoinSumPage from './pages/CoinSumPage';
import Header from './components/Header'
import "./App.css"


const App = () => {
  return (
    <div> 
    <BrowserRouter>
    <Header/>
    <Route exact path="/" component={CoinSumPage}/>
    </BrowserRouter>

    </div>
  )
}

export default App