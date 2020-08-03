import React from 'react';
import './App.css';
import Cards from './components/Cards/Cards'
import Charts from './components/Charts/Charts'
import CountryPicker from './components/CountryPicker/CountryPicker'
// import { Cards,Charts,CountryPicker} from './components'
import { fetchData } from './api';

class App extends React.Component{
  state ={
    data:{},
  }
  async componentDidMount(){
    const fetchedData = await fetchData();
    console.log(fetchedData)
    this.setState({ data:fetchedData });
  }
 render(){
  const { data }=this.state;
   return(
     
     <div className='container'>
     <Cards data={data}/>
     <CountryPicker/>
     <Charts/>
     </div>
   )
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
