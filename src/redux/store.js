import { createStore } from 'redux';
import searchGithub from './github/search';

const store = createStore(searchGithub);

export default store;
