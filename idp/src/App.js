import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [ready, setReady] = useState('NO')

  const axiosInstance = axios.create({

    credentials: 'include',
    withCredentials: true,
  });

  useEffect(() => {


    axiosInstance.get('https://idp.backend.com/set',{ withCredentials: true })
      .then(function (response) {
        // handle success
        console.log(response);
        setReady('YES')
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
         IDP -  Cookie was set {ready}
        </p>
 
          <button onClick={() => { window.location.href = "https://www.app.com" }} title="Ok"  >Take me to APP </button>
          
      
      </header>
    </div>
  );
}

export default App;
