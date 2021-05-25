import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import store from '../../redux/store';
import './index.css';
import { connect } from 'react-redux';

function SearchResult(props) {
  let list = [];

  function addFav(fork) {
    if (fork.isFav) {
      return;
    }
    fork.isFav = true;

    props.list.forEach((element, i) => {
      if (element.id === fork.id) {
        props.list.splice(i, 1);
      }
    });
    props.fav_list.push(fork);
    render();
    alert(`${fork.full_name} Added To Favorite`)
  }

  function render() {
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
              <button className={fork.isFav ? 'hide' : ''}
                onClick={() => {
                  addFav(fork);
                }}
              >
                Like
              </button>
            </td>
          </tr>
        );
      });
    }
  }

  render();

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
