import React from 'react';
import styles from './App.module.css';
import { Cards, Chart, Country } from './components';
import { fetchData } from './api'


class App extends React.Component {

  state = {
    data: {},
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
    console.log(data)
  }

  render() {
    const { data } = this.state

    return (
      <div className={styles.container}>
        <Cards data={data} />
        <Country />
        <Chart />
      </div>
    );
  }
}

export default App;
