import React, { Component } from 'react';

export class Home extends Component {
    static displayName = Home.name;

    /* constructor(props) {
      super(props);
      this.state = { forecasts: [], loading: true };
    }
  
    componentDidMount() {
      this.populateWeatherData();
    }
  
    static renderForecastsTable(forecasts) {
      return (
        <table className='table table-striped' aria-labelledby="tabelLabel">
          <thead>
            <tr>
              <th>Date</th>
              <th>Temp. (C)</th>
              <th>Temp. (F)</th>
              <th>Summary</th>
            </tr>
          </thead>
          <tbody>
            {forecasts.map(forecast =>
              <tr key={forecast.date}>
                <td>{forecast.date}</td>
                <td>{forecast.temperatureC}</td>
                <td>{forecast.temperatureF}</td>
                <td>{forecast.summary}</td>
              </tr>
            )}
          </tbody>
        </table>
      );
    }*/

    render() {
        /*let contents = this.state.loading
          ? <p><em>Loading...</em></p>
          : FetchData.renderForecastsTable(this.state.forecasts);*/

        return (
            <div>
                <h1 className="text-center">Todos</h1>
            </div>
        );
    }

    /*async populateWeatherData() {
      const response = await fetch('weatherforecast');
      const data = await response.json();
      this.setState({ forecasts: data, loading: false });
    }*/

}
