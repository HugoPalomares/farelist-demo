import React from 'react';
import ReactDOM from 'react-dom';
import FareList from './FareList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FareList />, div);
});
