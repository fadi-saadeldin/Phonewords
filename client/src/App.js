import React, { Component } from 'react';

import { Provider } from 'react-redux';
import store from './store';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';

import './App.css';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <div className="App">
            <Navbar />
            <div className="wrapper">
            <Landing />
            </div>
            <Footer />
          </div>
       
      </Provider>
    );
  }
}

export default App;
