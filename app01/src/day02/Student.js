import React from 'react'

class Student extends React.Component{

    constructor(){
        super();
        this.state={
            student:[{},{},{}]
        }
    }

    render(){
        let {students}=this.state;
        return(
            <div className='student'>
                {/* 按钮 */}
                <div>
                    <button>加载数据</button>
                </div>
                {/* 表格 */}
                <table>
                    <thead>
                        <tr>
                            <th>编号</th>
                            <th>用户名</th>
                            <th>姓名</th>
                            <th>性别</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            students.map((item)=>{
                                return(
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Student;