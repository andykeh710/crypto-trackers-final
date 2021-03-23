import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom';
import CoinDetailPage from './pages/CoinDetailPage';
import CoinSumPage from './pages/CoinSumPage';
// import LoginPage from "./pages/LoginPage";
import { useState, useContext } from 'react'
import Header from './components/Header'
import CreatePortfolio from './pages/CreatePortfolio'
import "./App.css"
import { WatchListContextProvider } from './context/watchlistContext';
// import axios from 'axios';


// class App extends React.Component{
//   state = {loggedUser}
//   render(){
//     return <App loggedUser={loggedUser}/> 
//   }
// }
const App = () => {
  const [loggedUser, setLoggedUser] = useState("");
// function checkLoginStatus() {s
//     axios.get("http://localhost:3000/logged_in", {withCredentials: true})
//     .then(response => {
//       console.log("response from check - ", response)
//     })
// }
//   class Login extends Component {
// return {this.props.loggedUser}
//   }
console.log("WATCHLIST PROVIDER ----------------  ", loggedUser)
 
//const { loggedUser, setLoggedUser } = useContext(WatchListContext)
  //console.log("APP JS LOGGED USER 111111111111111---------------------",loggedUser)
  return (
    <div className="container">
      <WatchListContextProvider>
        <BrowserRouter>
          <Header setLoggedUser={setLoggedUser}/>
          <Route exact path="/" component={CoinSumPage} />
          <Route 
          exact path="/createPortfolio" 
          render={(props) => (
            <CreatePortfolio {...props} isAuthed={true} loggedUser={loggedUser}/>
          )} />
          {/* <CreatePortfolio loggedUser={loggedUser}/> */}
          <Route path="/coins/:id" component={CoinDetailPage} />
        </BrowserRouter>
      </WatchListContextProvider>
    </div>
  );
};

export default App;