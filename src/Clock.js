import React,{Component} from 'react'
import classes from './Clock.css';

class Clock extends Component{
    constructor(props){
        super();
        this.state={
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        }
    }

    componentWillMount(){
        this.getTimeUntil(this.props.deadline);
    }

    componentDidMount(){
        setInterval(()=>this.getTimeUntil(this.props.deadline),1);
    }

    leading0(num){
        if(num<10){
            return '0'+num;
        }
        return num;
    }

    getTimeUntil(deadline){
        const time= Date.parse(deadline) - Date.parse(new Date());
        const seconds=Math.floor((time/1000)%60);
        const minutes=Math.floor((time/(1000*60))%60);
        const hours=Math.floor((time/(1000*60*60))%24);
        const days=Math.floor((time/(1000*60*60*24)));
        this.setState({days:days+' days ',hours:hours +' hours ',minutes:this.leading0(minutes)+' minutes ',seconds:this.leading0(seconds)+' seconds'});
    }

    render(){
        return(
            <div>
                <div className={classes.clockDays}>{this.state.days}</div>
                <div className={classes.clockHours}>{this.state.hours}</div>
                <div className={classes.clockMinutes}>{this.state.minutes}</div>
                <div className={classes.clockSeconds}>{this.state.seconds}</div>
            </div>
        );
    }
}
export default Clock;