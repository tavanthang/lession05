import React, { Component } from 'react';

class TVT_Form2 extends Component {
    constructor(props){
        super(props);
        this.state={
            khoaHoc:"ReactJS"
        }
    }
handleChange=(ev)=>{
    this.setState({
        khoaHoc:ev.target.value
    })
}
handleSubmit=(event)=>{
    event.preventDefault();
    alert(this.state.khoaHoc)
}
    render(){
        return(
            <div>
                <form>
                    <label>khoa hoc</label>
                    <select value={this.state.khoaHoc} name="khoaHoc" onChange={this.handleChange}>
                        <option value='HTML'>HTML</option>
                        <option value='css'>css</option>
                        <option value='js'>js</option>
                        <option value='ReactJS'>ReactJS</option>
                    </select>
                    <button onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}
export default TVT_Form2;