import React, { Component } from 'react';
import AlbumButtonRow from './AlbumButtonRow.jsx'
import TwitterButton from './TwitterButton.jsx';
import BackgroundPage from './BackgroundPage'
class FrontPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            lyricText: '',
            songName: '',
        }
        
        this.changeLyricText = this.changeLyricText.bind(this)
        this.changeSongName = this.changeSongName.bind(this)
    }

    changeLyricText(text){
        this.setState(
        {
            lyricText: text
        })
    }

    changeSongName(text){
        this.setState(
        {
            songName: text
        })
    }

    

    render() {
        return (
            <div>
            

            <div style= {
                {justifyContent:"center", 
                paddingTop:"5vh", 
                minHeight:'100%',
                margin:"0", zIndex:"100"}}>
                <h1>What would Frank say?</h1>
                <AlbumButtonRow lyricTextFunction={this.changeLyricText} songTextFunction={this.changeSongName}/>
                <h1>{this.state.lyricText}</h1>
                <h2>{this.state.songName}</h2>
                <TwitterButton isLyricDisplayed={this.state.lyricText.length} lyricText={this.state.lyricText}/>
            </div>
            </div>
        );
    }
}

export default FrontPage;