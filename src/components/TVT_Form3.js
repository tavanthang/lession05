import React, { Component } from 'react'

export default class TVT_Form3 extends Component {
    constructor(props){
        super(props);
        this.state={
            studemtName:'Ta Van Thang',
            age:20,
            course:'ReactJS'
        }
    }
handleChange=(ev)=>{
    let name=ev.target.name;
    let val =ev.target.value;
    this.setState({
        [name]:val
    })
}
handleSubmit=(ev)=>{
    ev.preventdefault();
    alert(this.state.studemtName+"\n"+ this.state.age+"\n"+ this.state.course)
    let obj ={
        studemtName:this.state.studemtName,
            age:this.state.age,
            course:this.state.course
    }
    this.props.onSubmit(obj)
}
  render() {
    return (
      <div>
        <form name="TVTForm">
            <div>
                <label>ho va ten</label>
                <input name='studentName' 
                 value={this.state.studemtName}
                 onChange={this.handleChange}/>
            </div>
            <div>
                <label>tuoi</label>
                <input name='age' 
                 value={this.state.age}
                 onChange={this.handleChange}/>
            </div>
            <div>
                <label>khoa hoc</label>
                    <select name="course" 
                        value={this.state.course}
                        onChange={this.handleChange}>
                        <option value='HTML'>HTML</option>
                        <option value='css'>css</option>
                        <option value='js'>js</option>
                        <option value='ReactJS'>ReactJS</option>
                    </select>
            </div>
            <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}
