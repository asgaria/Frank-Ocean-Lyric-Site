import React, { Component   } from 'react'

const style = {
    "margin": "0 auto",
    "border": "solid",
    borderColor: "#00aced",
    "backgroundColor": "#00aced",
    "borderRadius": "12px",
    "color": "white",
    "textTransform": "uppercase",
    "textAlign": "center",
    "fontSize": "1.5em",
    "lineHeight": "2em",
    "fontWeight": "bold",
    "cursor": "pointer",
    "WebkitTransitionDuration": "0.4s",
    "transitionDuration": "0.4s"
  }
const twitterButtonOnClick = (props) => {
        window.open("https://twitter.com/intent/tweet?text=" + props.lyricText);
}
function TwitterButton (props) {
        if (props.isLyricDisplayed){
            return (
            <button 
                style={style} 
                onClick={() => twitterButtonOnClick({lyricText:props.lyricText})}>
                <img src="./images/twitterlogo.png" alt="bird" style={{height:"1.7em", marginRight:"1vw", verticalAlign:"middle"}}></img>
                Subtweet</button>);
        }
        else{
            return(<div></div>)
        }
}

export default TwitterButton;