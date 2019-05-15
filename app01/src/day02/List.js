import React from 'react';

class List extends React.Component {
    //构造函数 初始化
    constructor(props){
        super(props);
        //局部状态(仅在当前组件中有效)，动态改变ui，获取ui上数据状态变化。
        this.state = {
            arr : [1,2,3]
        }
        //每隔一秒改变arr
        setInterval(()=>{
            this.setState({
                //arr:[...this.state.arr,Math.random()]
            })
        },1000)
    }

    //渲染 初始化后渲染
    render(){
        //解构
        let {arr} = this.state;
        return (
            <div>
            <ul className='list'>
            {
                arr.map((item,index) => <li key={index}>{item}</li>)
            }
        </ul>
            </div>
        );
    }
}

export default List;