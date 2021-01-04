import React from 'react';
import './App.css';
import Cards from './components/Cards/Cards'
import Charts from './components/Charts/Charts'
import CountryPicker from './components/CountryPicker/CountryPicker'
// import { Cards,Charts,CountryPicker} from './components'
import coronaImage from './images/covid19.png';
import { fetchData } from './api';
import NewYear from './images/2021.jpeg';
class App extends React.Component{
  state ={
    data:{},
    country:'',
  }
  async componentDidMount(){
    const fetchedData = await fetchData();
    
    this.setState({ data:fetchedData });
  }
  handleCountryChange = async (country) =>{
    
    const fetchedData = await fetchData(country);
    this.setState({data:fetchedData,country:country});
    // fetch the data
    //set the state
  }
 render(){
  const { data,country }=this.state;
   return (
     <div className="container">
       <img className="app__image" src={coronaImage} alt="COVID-19" />
       <div className='container__app'>
         <h1>Maumba Alumni</h1>
         <img className="app__image" src={NewYear} />
       </div>
       <Cards data={data} />
       <CountryPicker handleCountryChange={this.handleCountryChange} />
       <Charts data={data} country={country} />
       <footer className="app_footer">
         Copyright &copy; 2020 All Rights Reserved by{" "}
         <strong>barack maundu 👍 </strong>
       </footer>
     </div>
   );
 }
}

export default App;
// function App() {
 
//   return (
//     <div className="container">
//       <Cards/>
//       <CountryPicker/>
//       <Charts/>
//     </div>
//   );
// }

// export default App;
