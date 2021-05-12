import { browserHistory } from 'react-router';
const INITIAL_STATE = {
  list: [],
  fav_list: [],
};

function fetchData(owner = 'octocat' , respo = 'hello-world') {
  fetch(`https://api.github.com/repos/${owner}/${respo}/forks`)
    .then((response) => response.json())
    .then((json) => reducer(INITIAL_STATE, { type: 'FetchData', data: json }))
    .catch((err) => reducer(INITIAL_STATE, { type: 'ERROR', msg: 'Unable to fetch data' }));
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'search_fork':
      fetchData(action.owner , action.respo);
      return state;
    case 'FetchData':
      state.list = action.data || [];
      document.querySelectorAll('.link')[1].click();
      return state;
    case 'ERROR':
      state.list = [];
      console.log(action.msg);
      return state;
    default:
      return state;
  }
};

export default reducer;
