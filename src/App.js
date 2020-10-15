import React from 'react';
import './App.css';
import SearchMovie from './searchMovies.js'

function App() {
  return (
    <>
    <table className="titleBar">
      <tbody>
        <tr>
          <td>
            <img className="icon" alt="app icon" width="50" src="green_app_icon.svg"/>
          </td>
          <td width="8"/>
          <td>
            <h1 className="title">Movies Search</h1>
          </td>
        </tr>
      </tbody>
    </table>

    <div className="container">
      <SearchMovie />
    </div>
    </>
  );
}

export default App;
