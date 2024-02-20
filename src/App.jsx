import './/App.css'
import Navbar from './/components//Navbar'
import ListGames from './/components//ListGames'
import Body from './/components//Body'
import WhoAreWe from './/components//Who_we'
import Footer from './/components//Footer'
import axios from 'axios'
import { useEffect, useState } from 'react'
 

const App=()=> {
  const [Classlist,setClasslist]=useState();
  const [playerClassSelected,setPlayerClassSelected]=useState();
  const [OrderBtnState,setOrderBtnState]=useState('on');
  useEffect(()=>{
    console.log('yess');  
    axios.get("https://www.playwith5.com/el3b-server/api/v1/playerclass/")
    .then((response)=>{
      console.log(response.data);
      let x=response.data;
      setClasslist(x);
      setPlayerClassSelected(x[0].playerclass);
    })
      .catch((err)=>console.log(err));
  
},[' '])


  console.log(Classlist)
  console.log(playerClassSelected);
  axios.get('https://www.playwith5.com/el3b-server/api/v1/MainPage/?banner="main"')
  .then((res)=>{
    setOrderBtnState(res.data[0].BayBtn)})
  .catch((err)=>console.log(err));
  return (
    <>
    <div className='App'>
    <Navbar OrderBtnState={OrderBtnState} />
    {playerClassSelected&&<>
      <ListGames setPlayerClassSelecte={(value)=> setPlayerClassSelected(value)}/>
    <Body  playerClassSelected={playerClassSelected}/>
    </>
    }
    {/* <WhoAreWe /> */}
    </div>
    {
      OrderBtnState && <Footer OrderBtnState={OrderBtnState} />
    }
    </>
  )
}

export default App
