import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Routes from './Routes';
import Navbar from './animations/BurgerMenu/Navbar';
import './index.css'
import Foooter from './Footer/Foooter';
// import Form from './components/Form';
import { Header } from "./components/header";
import { HomePage } from "./pages/home-page";
import { GamePage } from "./pages/game-page";
import { OrderPage } from "./pages/order-page";
import { Provider } from "react-redux";
import { store } from "./store";
import TodoList from './components/TodoList';
import './App.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes/>
      <TodoList/>
      {/* <Form/> */}
      <Provider store={ store }>
      <Router>
        <div className="App">
          <Header />
            <Switch>
              <Route exact path="/order">
                <OrderPage />
              </Route>
              <Route exact path="/app/:title">
                <GamePage />
              </Route>
              <Route exact path="/">
                <HomePage />
              </Route>
            </Switch>
        </div>
      </Router>
    </Provider>
      <Foooter/>
    </div>
  );
};

export default App;
