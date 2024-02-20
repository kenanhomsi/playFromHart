import axios from 'axios'
import { useEffect, useState } from 'react';

// const PlayerClass= await 
const ListGames = (props) => {
    const [PlayerClasslist,setPlayerClasslist]=useState();
    useEffect(()=>{
      axios.get("https://www.playwith5.com/el3b-server/api/v1/playerclass/").then((response)=>{
        setPlayerClasslist(response.data);
      return response;
    }).catch((err)=>console.log(err));
    },[ ])
  const handelClickMobile=(event)=>{
    console.log(event.target.value);
    props.setPlayerClassSelecte(event.target.value)
  }
  const handelClick=(event)=>{
  //  console.log(event.target.id) 
   let oldaCtive=document.querySelector(`.ListGames_container .body  .active `);
   oldaCtive.className="Cplayer";
   event.target.className="Cplayer active";
   props.setPlayerClassSelecte(event.target.id)
  }
  return (
    <div className="ListGames_container">
        <div className="header">
            <div><h2>.  <span>قائمة الألعاب </span>  .</h2></div>
        </div>
        <div className="headerForMobile" dir="rtl">
            <div><h2>مين بيلعب البكج ؟</h2></div>
        </div>
        <div className="body">
            {
              PlayerClasslist && PlayerClasslist.map((ele,index)=>{
                let  classforplayer;
                if(index == 0){
                 classforplayer="Cplayer active"
                }else{
                 classforplayer="Cplayer"
                }
                return(
                  
                    // eslint-disable-next-line react/prop-types
                    <div className={classforplayer} id={ele.playerclass} key={ele._id} onClick={handelClick}>
                    {ele.playerclass}<span>{`>`}</span>
                    </div>
                  
                )

              })
            }

        </div>
        <div className="bodyForMobile">
          <select name="playerClassMobile"  className="playerClassMobile" onChange={(event)=>handelClickMobile(event)} id="">
            {
              PlayerClasslist && PlayerClasslist.map((ele)=>{
                return(
                  <option value={ele.playerclass} id={ele.playerclass} key={ele._id} >{ele.playerclass}</option>
                )
              })
            }
          </select>
        </div>
        
    </div>
  )
}

export default ListGames