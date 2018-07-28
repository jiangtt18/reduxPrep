import React from 'react';
import ReactDom from 'react-dom';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  let root = document.getElementById('content');
  let store = configureStore();
  ReactDom.render(<Root store = {store} />, root);

});
