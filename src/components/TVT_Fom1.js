import React, { Component } from 'react'

export default class TVT_Form1 extends Component {
    constructor(props){
        super(props);
        this.state={
            studentName:"Ta Van Thang"
        }
    }
    // ham xu ly su kien
    handleChange=(ev)=>{
        //lay gia tri khi thay doi tren form
        let ten = ev.target.name;
        let gtri = ev.target.value;
        // cap nhap state
        this.setState({
            [ten]:gtri
            //studentName:ev.target.value
        })
    }
    
        handleSubmit =(ev)=>{
            ev.preventDefaul();
            //lay gia tri moi trong state
            alert(this.state.studentName)
    }
  render() {
    return (
      <div>
        <form onSubmit={this.handleChange}>
            <div>
                <label>ho va ten</label>
                <input name='studentName' value={this.state.studentName}
                 onChange={this.handleChange}/>
            </div>
            <button>Submit</button>
        </form>
      </div>
    );
  }
}
