import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Textfield } from './Textfield';
import Card from './components/Card'
import Market from './components/Market';

function App() {
  return (
    <div className="App">
    <Card title="Welcome" paragraph="How are you? Please enter your item to be searched below"/>
    <Market/>
    </div>
  );
}

export default App;
