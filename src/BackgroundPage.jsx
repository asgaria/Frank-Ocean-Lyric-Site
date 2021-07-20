import React, { Component } from 'react';
import { StyleRoot } from 'radium'

export class BackgroundPage extends Component {

  backgroundList = [
    "https://media0.giphy.com/media/gIpoeYNMCpDeE/giphy.gif",
    "https://media2.giphy.com/media/OCs69ZSSC4yoE/giphy.gif",
    "https://media1.giphy.com/media/Lytug8xU6Ae5i/giphy.gif",
    "https://media3.giphy.com/media/gn3ZzZZ1jwps4/giphy.gif",
    "https://media1.giphy.com/media/jCmVGeJu7tN4Y/giphy.gif",
    "https://media1.giphy.com/media/hl0Kk1UNmRfQk/giphy.gif",
    "https://media.giphy.com/media/Dk3ZN2jgww0Gk/giphy.gif",
    "https://media.giphy.com/media/wpZY5yxRZ0zkI/giphy.gif",
    "https://media.giphy.com/media/n8aCbpi0Ny7wA/giphy.gif",
    "https://media.giphy.com/media/YXzaivCzURdOU/giphy.gif",
    "https://media.giphy.com/media/cZepKV9Dgqmre/giphy.gif",
    "https://media.giphy.com/media/S7RDeGKVrGzzW/giphy.gif",
    "https://media.giphy.com/media/FxRpscZhTpQyI/giphy.gif",
    "https://media.giphy.com/media/r0Hmyx9xQA4WA/giphy.gif",
    "https://media2.giphy.com/media/ysHAImoZYdjRC/giphy.gif",
    "https://media.giphy.com/media/Kl2lxR9pXQaOc/giphy.gif",
    "https://media.giphy.com/media/wHeviuZQqTsxbzZ179/giphy.gif"
  ];

  constructor(props) {
    super(props);
    this.state = {
      bColor: "red"
    };
    this.changeBackground = this.changeBackground.bind(this);
  }

  changeBackground() {
    let newBackground = this.backgroundList[this.backgroundList.length * Math.random() << 0];
    this.setState(
      {
        bColor: newBackground
      }
    );
  }

  

  componentDidMount() {
    this.changeBackground()
    setInterval(this.changeBackground, 3000);
  }

backgroundPageStyle = ((bColor) => 
    ({
    "backgroundSize": "cover",
    left:'0',
    position:'fixed',
    top:'0',
    right:'0',
    opacity:'.7',
    height:"100%", zIndex: "-10", 
    filter: "blur(5px)", 
    backgroundImage: "url(" + bColor +
      ")",
    '@media screen and (max-width: 600px)': {
        visibility: "hidden"    }
    }))
    
  render() {
    return(
        <StyleRoot>
      <div 
        style={this.backgroundPageStyle(this.state.bColor)}>
      </div>
      </StyleRoot>
    )
  }
}

export default BackgroundPage;