import React, { Component } from 'react'
import TVT_Form1 from './components/TVT_Form1'
import TVT_Form2 from './components/TVT_Form2'
import TVT_Form3 from './components/TVT_Form3'

export default class App extends Component {
  handleSubmit =(param)=>{
    console.log(param);
  }

  render() {
    return (
      <div>
        <h1>event-form-controlled Component</h1>
        <div>
          <TVT_Form1  />
          <TVT_Form2 />
          <TVT_Form3 onSubmit={this.handleSubmit}/>
        </div>
      </div>
    )
  }
}