import './/App.css'
import Navbar from './/components//Navbar'
import ListGames from './/components//ListGames'
import Body from './/components//Body'
import WhoAreWe from './/components//Who_we'
import Footer from './/components//Footer'
import axios from 'axios'
import { useState } from 'react'

const PlayerClass= await axios.get("https://game-api-hex6.onrender.com/api/v1/playerclass/").then((response)=>{
    return response;
}).catch((err)=>console.log(err));
let PlayerClasslist =PlayerClass.data;

function App() {
  const [playerClassSelected,setPlayerClassSelected]=useState(PlayerClasslist[0].playerclass)
  const [OrderBtnState,setOrderBtnState]=useState('on');
  axios.get('https://game-api-hex6.onrender.com/api/v1/MainPage/?banner="main"')
  .then((res)=>{
    setOrderBtnState(res.data[0].BayBtn)})
  .catch((err)=>console.log(err));
  return (
    <>
    <div className='App'>
    <Navbar OrderBtnState={OrderBtnState} />
    <ListGames setPlayerClassSelecte={(value)=> setPlayerClassSelected(value)}/>
    <Body  playerClassSelected={playerClassSelected}/>
    <WhoAreWe />
    </div>
    <Footer OrderBtnState={OrderBtnState} />
    </>
  )
}

export default App
