import React from 'react';
import {Cards, Chart, Country} from './components';
import styles from './App.module';

class App extends React.Component {
  render() {
    return (
//insure css doesn't conflict with other css files
    <div className={styles.container}>
      <Cards />
      <Country />
      <Chart /> 
      </div>
    );
  }
}

export default App;
