import SingleGame from "./SingleGame"
import cardImg from '../assets/card.png'
import axios from 'axios'
// import {gamesFornewMerriedlist,gamesForFrendslist,gamesForChildrenlist} from '../data/data'
import { useEffect, useState } from "react"
const Body = ( props) => {
  const [stateNumber,setStateNumber]=useState(1)
  const [showALLgames,setshowALLgames]=useState('off');
  const [GamesList,setGamesList]=useState();
  let classSelected=props.playerClassSelected;

useEffect(()=>{
   axios.get(`https://game-api-hex6.onrender.com/api/v1/games/filtering/?name="${classSelected}"`).then((response)=>{
  // console.log(response.data.deletegame);
  setGamesList(response.data.deletegame)  
  return response;
  }).catch((err)=>console.log(err));
  },[classSelected])
// console.log(GamesList);
  
  const OnClickBtn=(event)=>{
    setStateNumber(event.target.id);
    const activebtn= document.querySelector('.Previous_and_next .btns .active');
    activebtn.className="";
    event.target.className="active";
  }
  const OnClickPrevise=()=>{
    setStateNumber((pre)=> pre -1);
    const activebtn= document.querySelector('.Previous_and_next .btns .active');
    activebtn.className="";
  
  }
  const OnClickNext=()=>{
    setStateNumber((pre)=> pre +1);
    const activebtn= document.querySelector('.Previous_and_next .btns .active');
    activebtn.className="";
 
  }
  return (
    <div >        
        {showALLgames=='off' &&
        <>
      {GamesList && <SingleGame GamesList={GamesList}  stateNumber={stateNumber}  />}
        <div className="Previous_and_next" dir="rtl">
        
        <div className="Previous" onClick={OnClickPrevise}> <span>{`<`}</span> اللعبة السابقة  </div>
          <div className="btns">
            {
              GamesList && GamesList.map((ele,index)=>{
                if(index ==0){
                  return(
                    <button className="active" id={index} onClick={OnClickBtn} key={index}>{index + 1}</button>      
                  )
                }else{
                  return(
                  <button id={index} onClick={OnClickBtn} key={index}>{index + 1}</button>      
                  )
                }
              })
            }
            {/* <button className="active" id="1" onClick={OnClickBtn}>1</button>
            <button id="2" onClick={OnClickBtn}>2</button>
            <button id="3" onClick={OnClickBtn}>3</button>
            <button id="4" onClick={OnClickBtn}>4</button>
            <button id="5" onClick={OnClickBtn}>5</button>
            <button id="6" onClick={OnClickBtn}>6</button> */}
          </div>
          <div className="next" onClick={OnClickNext}>اللعبة التالية <span>{`>`}</span></div>
          
        </div>
        </>}
        {
          showALLgames=='on'&&
          <div className="allGamesdiv">
            {
              GamesList && GamesList.map((elemnt,index)=>{
                return(
                  <h3 key={index}>
                      {elemnt.gameName}
                  </h3>
                )
              })
            }

          </div>
        }
        
        <div className="allGamesbtn">
          <button onClick={()=>setshowALLgames('on')}><img src={cardImg} alt="cardImg" />  جميع الألعاب</button>
        </div>
    </div>
  )
}

export default Body