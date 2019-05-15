import React from 'react'

class Clock extends React.Component{

    constructor(){
        console.log("__constructor__");
        super();
        this.state = {
            now: new Date().toLocaleString()
        }
        setInterval(()=>{
            this.setState({
                now:new Date().toLocaleString()
            })
        },1000)
    }

    render(){
        return(
            <div>
                当前时间：{this.state.now}
            </div>
        );
    }
}
export default Clock;