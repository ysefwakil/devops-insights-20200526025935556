import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppHeader from './components/AppHeader';
import AppContainer from './containers/AppContainer';
import AppMap from './components/AppMap';

import './App.css';

function App() {
  return (

    <div className="App">
      <AppMap />
      <AppHeader />
      <AppContainer />
    </div>
  );
}

export default App;
