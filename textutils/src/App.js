import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js';
import Textform from './components/Textform.js';
import About from './components/About.js';
import { useState } from 'react';
import Alert from './components/Alert.js';

// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   Link
// } from "react-router-dom";
function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState('null');

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'skyblue'

      showAlert("Success , dark  mode has been enable")
      document.title = 'textutils- dark mode'
      setInterval(() => {
        document.title = 'textutils is superb'
      }, 2000, Infinity);
      setInterval(() => {
        document.title = 'textutils is amazing'
      }, 1500, Infinity);
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Success,light mode has been enable")
      document.title = 'textutils- light mode'
    }
  }
  const togglepurple = () => {
    if (mode === 'light') {
      document.body.style.backgroundColor = 'purple'
    }
    else {
      document.body.style.backgroundColor = 'purple'
    }
  }
  const toggleyellow = () => {
    if (mode === 'light') {
      document.body.style.backgroundColor = 'yellow'
    }
    else {
      document.body.style.backgroundColor = 'yellow'
    }
  }
  const toggleorange = () => {
    if (mode === 'light') {
      document.body.style.backgroundColor = 'orange'
    }
    else {
      document.body.style.backgroundColor = 'orange'
    }
  }
  const togglegreen = () => {
    if (mode === 'light') {
      document.body.style.backgroundColor = 'lightgreen'
    }
    else {
      document.body.style.backgroundColor = 'lightgreen'
    }
  }


  setTimeout(() => {
    showAlert()
  }, 3000);
  return (

    <>
      {/* <Router> */}
        <Navbar title="Textutils" aboutText="text" mode={mode} toggleMode={toggleMode} togglepurple={togglepurple} toggleyellow={toggleyellow} toggleorange={toggleorange} togglegreen={togglegreen} />
        <Alert alert={alert} showAlert={showAlert} />
       {/* c:\Documents\react app <Routes> */}
          {/* <Route exact path="/about" element={} /> */}
          <div className="container my-3">
                <Textform heading="Enter good thoughts" text="text" mode={mode} showAlert={showAlert} />
              </div>
          <About />
          {/* <Route exact path="/" element={} />
        </Routes>
        </Router> */}
        </>

  );
}

export default App;
