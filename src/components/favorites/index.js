import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import store from '../../redux/store';
import './index.css';
import { connect } from 'react-redux';

function FavoriteResult(props) {
  const list = [];

  if (props.fav_list && props.list.map) {
    list = props.list.map((fork) => {
      return (
        <tr key={fork.id}>
          <td>
            <p> {fork.full_name} </p>
            <a href={fork.url} className="link " target="_blank">
              {fork.url}
            </a>
          </td>
          <td> {fork.owner.login} </td>
          <td> {fork.stargazers_count} </td>
          <td>
            <button> Like </button>
          </td>
        </tr>
      );
    });
  }

  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th> Full Name </th>
            <th> Owner </th>
            <th> Stars </th>
            <th> Actions </th>
          </tr>
        </thead>

        <tbody>{list}</tbody>
      </table>
    </div>
  );
}


export default FavoriteResult;
