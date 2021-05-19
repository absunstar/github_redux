import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import store from '../../redux/store';
import './index.css';
import { connect } from 'react-redux';

function FavoriteResult(props) {
  let list = [];

  if (props.fav_list && props.fav_list.map) {
    list = props.fav_list.map((fork) => {
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
          </tr>
        </thead>

        <tbody>{list}</tbody>
      </table>
    </div>
  );
}

const mapStateToProps = (state) => {
  if (state && state.list) {
    return {
      list: state.list,
      fav_list: state.fav_list,
    };
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    search: () => dispatch({ type: 'search_fork' }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteResult);

