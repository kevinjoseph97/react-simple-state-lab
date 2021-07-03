import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { pattern1 } from './data.js'
import Matrix from './Matrix.js'

// matrix is getting a value prop from patter1
ReactDOM.render(<Matrix values={pattern1} />, document.getElementById('root'));
