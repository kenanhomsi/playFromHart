const SingleGame =  (props) => {

  let GameList=props.GamesList;
  let gameNumber=props.stateNumber;

  // console.log(GameList);
  // console.log(gameNumber);
 
  return (
    <>
    {/* GameList && */}
    { <div className="SingleGame_container">
      <div className="header">
          <div><h2>.  <span>{GameList[gameNumber -1].gameName}</span>  .</h2></div>
      </div>
      <div className="body">
          <div className="text">
                  <div className="brifeExpline" dir="rtl">
                  {GameList[gameNumber-1].briefExplian}
                  </div>
                  <div className="note" dir='rtl'>
                  ملاحظة : سامحين لك تسأل سؤال كان ودك تسأله بس منحرج ، حتى لو ماكان مكتوب بالأوراق ، أهم شيء لا يصيدك المنافس
                  </div>
          </div>
          <div className="video">
              {/* <iframe  src="https://www.youtube.com/embed/smK9TAEWhRg?si=ZSuq5J7RTUKO0QCQ&amp;controls=0" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe> */}
              <iframe  src={GameList[gameNumber-1].videoUrl} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
          </div> 
      </div>

    </div>}
    </>
  )
}

export default SingleGame