import React, {useEffect, useState} from "react"
import './App.css';
import axios from "axios"

function App() {

  const [players, setPlayers] = useState([])

  useEffect(() => {
    fetchPlayers()
  }, [])

  const fetchPlayers = async () => {
    let data = await axios.get("http://localhost:5000")
    setPlayers(data.data)
  }

  console.log(players)
  
  return (
    <div className="App">
      {
        players.map(player => {
          return (
            <div>
              <img src={player.url} />
              <h3>{player.name}</h3>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
