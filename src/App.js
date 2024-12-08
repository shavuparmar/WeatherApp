import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [City, setcity] = useState('');
  let [wdetails, setwdetails] = useState()
  let getdata = (event) => {
    setcity('');
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=751d66e130befad396405dc13796a57c&units=metric`)
      .then((res) => res.json())
      .then((finalres) => {
        if (finalres.cod == "404") {
          setwdetails(undefined) 
        } else {
          setwdetails(finalres)
        }
      })
    event.preventDefault();
  }
  return (<div className='Main'>

    <h1> હવામાન</h1>

    <form onSubmit={getdata}>
      <input className='intext' value={City} onChange={(e) => setcity(e.target.value)} placeholder='Enter City Name' type='text' />
      <button className='Searchbtn'>Search</button></form>
    <div className='Container'>
      {wdetails !== undefined
        ?
        <>

          <h4>{wdetails.name}</h4>
          <h3>{wdetails.main.temp}</h3>
          <img src={`https://openweathermap.org/img/w/${wdetails.weather[0].icon}.png`} ></img>
          <p>{wdetails.weather[0].description}</p>
        </>
        :
        "no Data Found"


      }



    </div>

  </div>









  )
}





export default App;
