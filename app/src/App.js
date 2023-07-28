import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [ready, setReady] = useState('NO')
  const [data, setData] = useState({})

  const axiosInstance = axios.create({

    credentials: 'include',
    withCredentials: true,
  });

  useEffect(() => {


    axiosInstance.get('https://app.backend.com/get',{ withCredentials: true })
      .then(function (response) {
        // handle success
        console.log(response);
        setData(response.data)

      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });



  }, [])


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>

        </p>
        <div>
          {JSON.stringify(data)}
        </div>
       
         APP 
      </header>
    </div>
  );
}

export default App;
