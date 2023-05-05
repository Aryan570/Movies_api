import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import ShowList from './components/ShowList';
import ShowSummary from './components/ShowSummary';

function App() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    (async () => {
       await fetch("https://api.tvmaze.com/search/shows?q=all")
      .then(response => response.json())
      .then(data => setShows(data));
    })();
  },[]);
  // console.log(shows)
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<ShowList shows={shows} />}/>
          <Route path="/show/:id" element={<ShowSummary/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
