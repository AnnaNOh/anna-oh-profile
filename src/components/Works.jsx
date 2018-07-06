import React, { Component } from 'react';
import '../stylesheets/Works.css';


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
        <div className="works-feature"> feature </div>
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
