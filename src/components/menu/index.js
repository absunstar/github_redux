import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import store from '../../redux/store';
import './index.css';
import { connect } from 'react-redux';

function Menu(props) {
  return (
    <div className="menu">
        <Link to="/" className="link ">
          Home
        </Link>
        <Link to="/result" className="link ">
          Result
        </Link>
        <Link to="/favorites" className="link ">
          Favorites
        </Link>
    </div>
  );
}


export default Menu;
