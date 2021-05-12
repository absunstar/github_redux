import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import store from '../../redux/store';
import './index.css';
import { connect } from 'react-redux';

function SearchResult(props) {
  let list = [];

  if (props.list && props.list.map) {
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);
