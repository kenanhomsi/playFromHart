import axios from 'axios'



const gamesForFrends= await axios.get(`https://game-api-hex6.onrender.com/api/v1/games/filtering/?name="عائلة واصدقاء"`).then((response)=>{
    return response;
}).catch((err)=>console.log(err));
export let gamesForFrendslist =gamesForFrends.data.deletegame;



const gamesForChildren= await axios.get(`https://game-api-hex6.onrender.com/api/v1/games/filtering/?name="اطفال"`).then((response)=>{
    return response;
}).catch((err)=>console.log(err));
export let gamesForChildrenlist =gamesForChildren.data.deletegame;
