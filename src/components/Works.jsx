import React, { Component } from 'react';
import '../stylesheets/Works.css';

import laptopPNG from "../assets/photos/laptop.png";
import pg1 from "../assets/photos/Pixelgram1.png";
import pg2 from "../assets/photos/Pixelgram2.png";
import pg3 from "../assets/photos/Pixelgram3.png";
import ws1 from "../assets/photos/Wayside1.png";
import ws2 from "../assets/photos/Wayside2.png";
import ws3 from "../assets/photos/Wayside3.png";
import gw1 from "../assets/photos/GoWeather1.png";
import gw2 from "../assets/photos/GoWeather2.png";
import gw3 from "../assets/photos/GoWeather3.png";

let PROJ_PHOTOS = {};
PROJ_PHOTOS["pg"] = [pg1, pg2, pg3];
PROJ_PHOTOS["ws"] = [ws1, ws2, ws3];
PROJ_PHOTOS["gw"] = [gw1, gw2, gw3];

class Works extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  componentDidMount() {
  }

  handleClick() {
    let card1 = document.getElementsByClassName("card-1")[0];
    let card2 = document.getElementsByClassName("card-2")[0];
    let card3 = document.getElementsByClassName("card-3")[0];
    let cardButtons = document.getElementsByClassName("card-button");
    let chosenButton = document.getElementsByClassName("chosen-button")[0];
    card1.classList.add("card-3");
    card1.classList.remove("card-1");
    card2.classList.add("card-1");
    card2.classList.remove("card-2");
    card3.classList.add("card-2");
    card3.classList.remove("card-3");
    let chosenButtonI = 0;
    for (let i = 0; i < cardButtons.length; i++){
      if (chosenButton === cardButtons[i]){
        chosenButton.classList.remove("chosen-button");
        chosenButtonI = (i + 1) % 3;
      }
    }
    cardButtons[chosenButtonI].classList.add("chosen-button");
  }

  handleButtonClick(e) {
    let eventItemId = Number(e.target.id);
    let wayside = document.getElementsByClassName("wayside")[0];
    let gowea = document.getElementsByClassName("gowea")[0];
    let pixelg = document.getElementsByClassName("pixelg")[0];
    let cardButtons = document.getElementsByClassName("card-button");
    let chosenButton = document.getElementsByClassName("chosen-button")[0];

    if (eventItemId === 1) {
      if (chosenButton !== cardButtons[0]) {
        wayside.classList.add("card-1");
        wayside.classList.remove("card-2");
        wayside.classList.remove("card-3");
        gowea.classList.add("card-2");
        gowea.classList.remove("card-1");
        gowea.classList.remove("card-3");
        pixelg.classList.add("card-3");
        pixelg.classList.remove("card-1");
        pixelg.classList.remove("card-2");
        cardButtons[0].classList.add("chosen-button")
        cardButtons[1].classList.remove("chosen-button");
        cardButtons[2].classList.remove("chosen-button");
      };
    } else if (eventItemId === 2){
      if (chosenButton !== cardButtons[1]) {
        wayside.classList.add("card-3");
        wayside.classList.remove("card-1");
        wayside.classList.remove("card-2");
        gowea.classList.add("card-1");
        gowea.classList.remove("card-2");
        gowea.classList.remove("card-3");
        pixelg.classList.add("card-2");
        pixelg.classList.remove("card-1");
        pixelg.classList.remove("card-3");
        cardButtons[0].classList.remove("chosen-button");
        cardButtons[1].classList.add("chosen-button");
        cardButtons[2].classList.remove("chosen-button");
      }
    } else {
      if (chosenButton !== cardButtons[2]) {
        wayside.classList.add("card-2");
        wayside.classList.remove("card-1");
        wayside.classList.remove("card-3");
        gowea.classList.add("card-3");
        gowea.classList.remove("card-1");
        gowea.classList.remove("card-2");
        pixelg.classList.add("card-1");
        pixelg.classList.remove("card-3");
        pixelg.classList.remove("card-2");
        cardButtons[0].classList.remove("chosen-button");
        cardButtons[1].classList.remove("chosen-button");
        cardButtons[2].classList.add("chosen-button");
      }
    }
  }


  render() {
    return (
      <div className="works">
        <div className="works-feature">
          <img className="works-laptop" src={laptopPNG} alt="laptop" />
          <img className="works-project" src={PROJ_PHOTOS["pg"][0]} alt="pic1" />
        </div>
        <div className="works-cards">
          <div className="cards wayside card-3" onClick={this.handleClick}> WaySide </div>
          <div className="cards gowea card-2" onClick={this.handleClick}> GoWeather </div>
          <div className="cards pixelg card-1" onClick={this.handleClick} > Pixelgram </div>
          <div className="cards-button">
            <div id="1" className="card-button chosen-button" onClick={this.handleButtonClick}></div>
            <div id="2" className="card-button" onClick={this.handleButtonClick}></div>
            <div id="3" className="card-button" onClick={this.handleButtonClick}></div>
          </div>
        </div>
        <div className="works-des"> descrip </div>
      </div>
    );
  }
}

export default Works;
