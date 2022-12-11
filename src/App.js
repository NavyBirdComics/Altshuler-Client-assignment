import './App.css';
import Graph from './components/graph';
import { useState } from 'react';
import axios from "axios";
import Rate from './components/rate';

function App() {
  const [showData, setShowData] = useState(false); //variable to show or not show graph and 
  const [values, setValues] = useState([]); //values for pie chart
  const [rate, setRate] = useState(); //rate details from api

  function handleClick() { //on click function, will get data from api

    axios.get(`https://api.coingecko.com/api/v3/exchange_rates`)
      .then((res) => { // on response, set rate as data for ils
        console.log(res.data.rates.ils);
        setRate(res.data.rates.ils);

        let min = 1 //generate random numbers for pie chart and set them
        let max = 100
        let temp_values = [Math.floor(Math.random() * (max - min + 1)) + min,
        Math.floor(Math.random() * (max - min + 1)) + min,
        Math.floor(Math.random() * (max - min + 1)) + min]
        setValues(temp_values);

        setShowData(true); //show the data

        setTimeout(() => { //using settimeout, after 5 seconds, hide the data
          setShowData(false);
        }, 5000)
      })
  }

  return (
    <div className='body-container' >
      {showData && rate !== undefined ? //if data is set to show, and got rate from api, will show graph and rate components
        <span>
          <Graph values={values} />
          <Rate rate={rate} />
        </span>
        : ""}
      <button onClick={() => handleClick()} disabled={showData ? "disabled" : ""}>click me!</button> 
      {/* button to do handleClick function, will be disabled if data is showing */}
    </div>
  );
}

export default App;
