import React,{Component} from 'react';
import classes from './App.css';
import Clock from './Clock'
import {Form,FormControl, Button} from 'react-bootstrap';
class App extends Component{
    constructor(props){
        super();
        this.state={
            deadline:'december 25  2018',
            newDeadline:''
        }

    }

    changeDeadline(){
        this.setState({deadline:this.state.newDeadline});
    }

    render(){
        return(
            <div className={classes.App}>
                <div>Count down to {this.state.deadline}</div>
                <br/>
                <Clock deadline={this.state.deadline}/>
                <Form inline>
                    <FormControl className onChange={event=>this.setState({newDeadline:event.target.value})} placeholder='new date'/>
                    <Button onClick={()=>this.changeDeadline()}>Submit</Button>
                </Form>
            </div>
        )
    }
}

export default App;