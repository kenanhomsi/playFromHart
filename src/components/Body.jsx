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
   axios.get(`https://www.playwith5.com/el3b-server/api/v1/games/filtering/?name="${classSelected}"`).then((response)=>{
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
        {
          stateNumber != 1 &&
          <div className="Previous" onClick={OnClickPrevise}> <span>{`<`}</span> اللعبة السابقة  </div>
        }
       
          {/* <div className="btns">
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
         
          </div> */}
          {
          stateNumber !=  6 &&
          <div className="next" onClick={OnClickNext}>اللعبة التالية <span>{`>`}</span></div>
        }
          
          
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
        
        {/* <div className="allGamesbtn">
          <button onClick={()=>setshowALLgames('on')}><img src={cardImg} alt="cardImg" />  جميع الألعاب</button>
        </div> */}
    </div>
  )
}

export default Body