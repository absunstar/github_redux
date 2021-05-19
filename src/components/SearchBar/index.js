import React from 'react';
import store from '../../redux/store';
import './index.css';
import { connect } from 'react-redux';


function SearchBar(props) {
  function trySearch() {
    let text = document.querySelector('input').value;
    if (text.indexOf('/:') === -1) {
      alert('Name Must Like owner/:repositoryName');
    } else {
      let arr = text.split('/:');
      props.search(arr[0], arr[1]);
    }
  }

  return (
    <div className="InputContainer">
      <input placeholder="Search Github Forks example ::  owner/:repositoryName" />
      <button onClick={trySearch}> Search </button>
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
    search: (owner, respo) => {
      dispatch({ type: 'search_fork', owner: owner, respo: respo });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
