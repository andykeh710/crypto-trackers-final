import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom';
import CoinDetailPage from './pages/CoinDetailPage';
import CoinSumPage from './pages/CoinSumPage';
import { useState } from 'react'
import Header from './components/Header'
import CreatePortfolio from './pages/CreatePortfolio'
import "./App.css"
import { WatchListContextProvider } from './context/watchlistContext';
// import AboutUs from './AboutUs'

const Welcome = ({ stickyRef }) => (
    <div className="welcome" ref={stickyRef}>
    </div>
);



const App = () => {
const [loggedUser, setLoggedUser] = useState("");
React.useEffect(() => {
  return () => {
    window.removeEventListener("scroll", () => handleScroll);
  };
}, []);
const [isSticky, setSticky] = React.useState(false);
const stickyRef = React.useRef(null);
const handleScroll = () => {
  window.pageYOffset > stickyRef.current.getBoundingClientRect().bottom
    ? setSticky(true)
    : setSticky(false);
};
const debounce = (func, wait = 0, immediate = true) => {
  let timeOut;
  return () => {
    let context = this
      // args = arguments;
    const later = () => {
      timeOut = null;
      if (!immediate) func.apply(context);
    };
    const callNow = immediate && !timeOut;
    clearTimeout(timeOut);
    timeOut = setTimeout(later, wait);
    if (callNow) func.apply(context);
  };
};
window.addEventListener("scroll", debounce(handleScroll));

  return (
    <div className="container">
      <WatchListContextProvider>
        <BrowserRouter>
          <Header setLoggedUser={setLoggedUser} loggedUser={loggedUser} sticky={isSticky}/>
          <React.Fragment>
          <Welcome stickyRef={stickyRef} />
          </React.Fragment>
          
          <div></div>
          <Route exact path="/" component={CoinSumPage} />
          <Route 
          exact path="/createPortfolio" 
          render={(props) => (
            <CreatePortfolio {...props} isAuthed={true} loggedUser={loggedUser}/>
          )} />
          <Route path="/coins/:id" component={CoinDetailPage} />
          {/* <AboutUs></AboutUs> */}
        </BrowserRouter>
      </WatchListContextProvider>
    </div>
  );
};

export default App;