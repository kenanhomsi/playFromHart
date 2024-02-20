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
          {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/smK9TAEWhRg?si=jxGpuCDbat0ogpJ6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/smK9TAEWhRg?si=jxGpuCDbat0ogpJ6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
              <iframe  src={GameList[gameNumber-1].videoUrl}  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div> 
      </div>

    </div>}
    </>
  )
}

export default SingleGame