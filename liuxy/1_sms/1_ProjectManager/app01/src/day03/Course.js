import React from 'react';
import $ from 'jquery';
import { Button, Table, Modal} from 'antd';

class Course extends React.Component {

  constructor(){
    super();
    this.state = {
      flag:false,
      teachers:[],
      courses:[],
      visible: false,
      form:{
        name:"",
        credit:"",
        description:"",
        teacherId:""
      }
    }
  }

  componentDidMount(){
    // 1. 加载教师信息
    this.loadTeachers();
    // 2. 加载课程信息
    this.loadCourses();
  }
  loadTeachers(){
    $.get("http://localhost:8888/teacher/findAll",({status,message,data})=>{
      if(status === 200){
        this.setState({
          "teachers":data,
          form:{...this.state.form,...{teacherId:data[0].id}}
        })
      } else {alert (message)}
    })
  }
  loadCourses(){
    $.get("http://localhost:8888/course/findAllWithTeacher",({status,message,data})=>{
      if(status === 200){
        // 将查询数据设置到state中
        this.setState({ "courses":data })
      } else {alert (message)}
    })
  }

  changeHandler = (event)=>{
    let name = event.target.name;
    let value = event.target.value;
    this.setState({
      form:{...this.state.form,...{[name]:value}}
    })
  }
  submitHandler = (event)=>{
    let url = "http://localhost:8888/course/saveOrUpdate"
    $.post(url,this.state.form,({message})=>{
      alert(message);
      //刷新
      this.loadCourses();
    })
    event.preventDefault();
  }

  toUpdate(id){
    // 1. 通过id查找课程信息
    // 2. 将返回结果设置到this.state.form中
    // state->form
    $.get("http://localhost:8888/course/findById?id="+id,({status,message,data})=>{
      if(status === 200){
        // 将查询数据设置到state中
        this.setState({ "form":data })
      } else {alert (message)}
    })
  }

  delStudent(id){
    
    let url = 'http://localhost:8888/course/deleteById?id='+id;
    $.get(url,({status,message})=>{
      if(status === 200){
        this.loadCourses();
      }else{
        alert(message);
      }
      
    })
  }
  handleCancel =()=>{
    this.setState({
      visible:false
    })
}

  toAdd=()=>{
    this.setState({
      flag:true,
      form:{
        name:"",
        credit:"",
        description:"",
        teacherId:""
      }
    })
  }


  render(){
    let {teachers,courses,form,flag} = this.state;
    let $form;
    if(flag){
      $form = (
        <form onSubmit={this.submitHandler}>
          课程名称
          <input type="text" name="name" value={form.name} onChange={this.changeHandler}/> <br/>
          课程学分
          <input type="text" name="credit" value={form.credit} onChange={this.changeHandler}/> <br/>
          课程简介
          <textarea name="description" value={form.description} onChange={this.changeHandler}></textarea> <br/>
          任课老师
          <select name="teacherId" value={form.teacherId} onChange={this.changeHandler}>
            {
              teachers.map((item)=>{
                return <option value={item.id} key={item.id} >{item.realname}</option>
              })
            }
          </select> <br/>
          <input type="submit" value="提交"/>
        </form>
      )
    } 
    let columns = [
      {
        title: '编号',
        dataIndex: 'id',
        key:'id'
      },
      {
        title: '课程名',
        dataIndex: 'name',
        key:'name'
      },
      {
        title: '课程介绍',
        dataIndex: 'description',
        key:'description'
      },
      {
        title: '学分',
        dataIndex: 'credit',
        key:'credit'
      },
      {
        title: '操作',
        key: 'action',
        render: (text, record) => (
          <span>
            <a href="">更新</a>
            <span>丨</span>
            <a href="">删除</a>
          </span>
        ),
      }
]
    return (
      <div>
        <h2>课程管理</h2>
        <Button type="primary" onClick={this.toAdd}>添加</Button>
        {/* 表单 */}
        {/* {JSON.stringify(form)} */}
        {$form}
        {/* 表格 */}
        <div className='course_table'>
        <Table rowKey={record => record.id} dataSource={this.state.courses} columns={columns} />;
        </div>
      </div>
    )
  }
}

export default Course;