// import logo from './logo.svg';

// import './dice-1.png';
// import './dice-2.png';
// import './dice-3.png';
// import './dice-4.png';
// import './dice-5.png';
// import './dice-6.png';


import dice1 from './dice1.png';
import dice2 from './dice2.png';
import dice3 from './dice3.png';
import dice4 from './dice4.png';
import dice5 from './dice5.png';
import dice6 from './dice6.png';
import samson from './samson.png';

import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dice: 0,
    };
  }

  diceRoll = () => {
    let dice = Math.floor(Math.random() * 6 + 1)

    this.setState({
      dice: dice
    })

    this.updateImage()

  }

  updateImage = () => {
    let dice = this.state.dice;

    if (dice === 0) {
      return <><img src={samson} alt="samson"/></>;
    } else if (dice === 1) {
      return <><img src={dice1} alt="dice-1"/></>;
    } else if (dice === 2) {
      return <><img src={dice2} alt="dice-2"/></>;
    } else if (dice === 3) {
      return <><img src={dice3} alt="dice-3"/></>;
    } else if (dice === 4) {
      return <><img src={dice4} alt="dice-4"/></>;
    } else if (dice === 5) {
      return <><img src={dice5} alt="dice-5"/></>;
    } else if (dice === 6) {
      return <><img src={dice6} alt="dice-6"/></>;
    }
  }


  render() {
    return (
        <div className="App">
          <div>
            <header className="App-header">
              <p>
                <button type='button' onClick={() => this.diceRoll()}>
                  {this.updateImage()}
                </button>
              </p>
            </header>
          </div>
        </div>
    );
  };

}

export default App;
