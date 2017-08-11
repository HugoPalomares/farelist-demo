import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FareList from './FareList';
import registerServiceWorker from './registerServiceWorker';

let baseUrl = 'https://openair.airtrfx.com/airfare-sputnik/fares';

ReactDOM.render(<FareList baseUrl={baseUrl} />, document.getElementById('root'));
registerServiceWorker();
