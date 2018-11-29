import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
      constructor(){
      super();
      this.state=
      {
        count: 0
      };

      this.btnClick= this.btnClick.bind(this);
    }
  btnClick(){
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return (

     /*<div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>*/
      /*<h2>Welcome to GGK!</h2>
      <img src= {logo} />*/
      //There is an errror if you try to put multiple tags inside render function
      //Render can only return a single parent tag!
      //To fix this, use a single parent tag <div></div> as shown below:
      /*<div>
       <h2>Welcome to GGK!</h2>
       <img src= {logo} />

      </div>
      //Indentation is important!
      //Comment under <div></div> gets printed on screen! */
      //The class names should start with uppercase only!
      /*<div>
        <Subcomponent1/>
        <Subcomponent2/>
      </div>
    );
  }
}
class Subcomponent1 extends React.Component
{
  render(){
    return(
    <div>
    <h1>Fucked up Life!</h1>
    </div>
    //<div> was not necessarily important because there's only one return!
    );
  }
}

class Subcomponent2 extends React.Component{
  render(){
    return(
    <div>
    <h2>The only solution:</h2>
    <p>Never give up!</p>
    </div>
    //Here <div></div> is important because its returning more than one things!
    );

  }
  
}*/
/*<div>
        <h1>{this.props.a}</h1>
        <h2>{this.props.b}</h2>
      </div>*/
      /*<div>
        <p>{this.props.children}</p>
        <button onClick={this.btnClick}>Click Here</button>
      </div>*/
      <div>
      <h1>Value: {this.state.count}</h1>
      <br/>
      <button onClick={this.btnClick}> Increment by 1</button>
      </div>

    );
  }
}

export default App;
