import React, { Component } from 'react';
import AlbumButton from './AlbumButton.jsx'
import blondeLyrics from './lyrics/blonde.json'
import endlessLyrics from './lyrics/endless.json'
import nostalgiaUltraLyrics from './lyrics/nostalgiaUltra.json'
import channelOrangeLyrics from './lyrics/channelOrange.json'
import { StyleRoot } from 'radium'
class AlbumButtonRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonStates: ({
                nostalgiaUltra: false,
                channelOrange: false,
                endless: false,
                blonde: false
            })
        }
        this.albumButtonOnClick = this.albumButtonOnClick.bind(this)
        this.getrandomSong = this.getrandomSong.bind(this)

    }

    getrandomSong = (props) => {
        var keys = Object.keys(props.obj);
        return keys[[keys.length * Math.random() << 0]];
    };

    albumButtonOnClick = (props) => {
        this.setState(
            {
                buttonStates:
                {
                    nostalgiaUltra: props.name === "nostalgiaUltra" ? true : false,
                    channelOrange: props.name === "channelOrange" ? true : false,
                    endless: props.name === "Endless" ? true : false,
                    blonde: props.name === "Blonde" ? true : false
                }
            })

        let lyric = ""
        let songName = ""
        let albumObject = {}
        if (props.name === "nostalgiaUltra") {
            songName = this.getrandomSong({ obj: nostalgiaUltraLyrics })
            albumObject = nostalgiaUltraLyrics
        }
        else if (props.name === "channelOrange") {
            songName = this.getrandomSong({ obj: channelOrangeLyrics })
            albumObject = channelOrangeLyrics
        }
        else if (props.name === "Endless") {
            songName = this.getrandomSong({ obj: endlessLyrics })
            albumObject = endlessLyrics
        }
        else if (props.name === "Blonde") {
            songName = this.getrandomSong({ obj: blondeLyrics })
            albumObject = blondeLyrics
        }

        let songLyricArrayLength = albumObject[songName].length
        lyric = albumObject[songName][songLyricArrayLength * Math.random() << 0]
        this.props.lyricTextFunction(lyric)
        this.props.songTextFunction(songName)
    }

    render() {
        const rowStyle = {
            display: "flex", 
            justifyContent:"center", 
            paddingTop:"5%",
            paddingBottom:"5%",

            '@media screen and (max-width: 600px)': {
                display: "block",    
            }
        }
        return (
            <StyleRoot>
                <div style={rowStyle}>
                    <AlbumButton state={this.state.buttonStates.nostalgiaUltra} name="nostalgiaUltra" onClick={() => this.albumButtonOnClick({
                        name: "nostalgiaUltra"
                    })} />
                    <AlbumButton state={this.state.buttonStates.channelOrange} name="channelOrange" onClick={name => this.albumButtonOnClick({
                        name: "channelOrange"
                    })} />
                    <AlbumButton state={this.state.buttonStates.endless} name="Endless" onClick={name => this.albumButtonOnClick({
                        name: "Endless"
                    })} />
                    <AlbumButton state={this.state.buttonStates.blonde} name="Blonde" onClick={name => this.albumButtonOnClick({
                        name: "Blonde"
                    })} />
                </div>
            </StyleRoot>
        );
    }
}

export default AlbumButtonRow