import React, { Component } from 'react';
import Radium from 'radium'
import {StyleRoot} from 'radium'

class AlbumButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() { 
    
        const albumStyle = {
            position: "relative",
            flex: "25%",
            margin: "0 auto",
            backgroundColor: "transparent",
            borderRadius: "50%",
            height:"15vh",
            textTransform: "uppercase",
            textAlign: "center",
            fontSize: "1.3em",
            lineHeight: "2em",
            cursor: "pointer",
            transition: "transform .2s",
            border: this.props.state ? '5px solid white' : '5px solid orange',
            ":hover": {
                zIndex:"1",
                transform: "scale(1.5)"
              },
            '@media': {
                display: "none,"
            }
          }

        return (
            <StyleRoot>
            <div style={{paddingLeft:'1vw', paddingRight:'1vw'}}>
                <img src={("/images/" + this.props.name + ".jpg")} alt={this.props.name} 
                    style={albumStyle
                        } 
                    onClick={this.props.onClick}></img>
            </div> 
            </StyleRoot>
        );
    }
}
 
export default AlbumButton;