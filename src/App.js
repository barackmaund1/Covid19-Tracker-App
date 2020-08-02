import React from 'react';
import './App.css';
import Cards from './components/Cards/Cards'
import Charts from './components/Charts/Charts'
import CountryPicker from './components/CountryPicker/CountryPicker'
// import { Cards,Charts,CountryPicker} from './components'


function App() {
  return (
    <div className="container">
      <Cards/>
      <CountryPicker/>
      <Charts/>
    </div>
  );
}

export default App;
