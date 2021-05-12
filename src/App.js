import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import store from './redux/store';
import './App.css';
import { connect } from 'react-redux';
import SearchBar from './components/SearchBar';
import SearchResult from './components/SearchResult';
import Favorites from './components/favorites';
import Menu from './components/menu';
function App(props) {

  // store.subscribe(() => {
  //   console.log(store)
  //   console.log(store.getState())
  //   return
  //   if (store.getState().action.indexOf('FetchData') !== -1) {
  //     console.log('subscribed for FetchData', store.getState());
  //   }
  // });

  return (
    <div className="App">
      <h1> GitHub Search </h1>

      <Router>
        <Menu />
        <Route exact path="/" component={SearchBar} />
        <Route path="/result" component={SearchResult} />
        <Route path="/favorites" component={Favorites} />
      </Router>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    list: state.list,
    fav_list: state.fav_list,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    search: () => dispatch({type : 'search_fork'}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
