import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Playground from './Components/Playground/Playground';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import NavBar from './Components/NavBar/NavBar';
import { PlaygroundContext } from './Contexts/Playground';
import { useEffect, useState } from 'react';
import Graph from './helpers/graph';
import {createGrid} from './helpers/grid';

import './App.css';

function App() {
  const [selectedTile, setSelectedTile] = useState({name: '', svg: '', category: '', connections: []});
  const [zoom, setZoom] = useState(1)
  const [vertical, setVertical] = useState(0)
  const [horizontal, setHorizontal] = useState(0)
  const [map, setMap] = useState(new Graph())
  const [loadedData, setLoadedData] = useState([])

  const [grid, setGrid] = useState([])


  const value = {
    selectedTile,
    setSelectedTile,
    zoom,
    setZoom,
    vertical,
    setVertical,
    horizontal,
    setHorizontal,
    map,
    setMap,
    grid,
    setGrid,
    loadedData,
    setLoadedData
  }

  useEffect(() => {
    const gridtest = createGrid(20,40, loadedData)
    setGrid(gridtest)
  },[loadedData])

  return (
    <div className="App">
      <PlaygroundContext.Provider value={value}>
        <Router>
          <NavBar />
          <Switch>
            <Route path="/playground">
              <Playground selectedTile={selectedTile} />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </PlaygroundContext.Provider>
    </div>
  );
}

export default App;
