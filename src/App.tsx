import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import WeatherCard from './components/presentational/WeatherCard';
import {store} from './store/store';
import {Provider} from 'react-redux';
function App() {
  return (
    <Provider store = {store}>
    <Layout>
      <WeatherCard />
      </Layout>
      </Provider>
  );
}

export default App;
