import React from 'react';
import Baking from './menu/Baking'
import Barrel from './menu/Barrel'
import Chicken from './menu/Chicken'
import Dessert from './menu/Dessert'
import Drinks from './menu/Drinks'
import Hot from './menu/Hot'
import MyCardBag from './menu/MyCardBag'
import Select from './menu/Select'
import StapleFood from './menu/StapleFood'
import $ from 'jquery'

import './App.css';
import {BrowserRouter,Route,Link,Switch} from 'react-router-dom'
 
class Menu extends React.Component{
  constructor(){
    super();
    this.state={
      categorys:[]
    }
  }

  componentDidMount(){
    this.Categoryload();
  }
  Categoryload(){
    let url ="http://192.168.199.11:8585/category/findAll";
      $.get(url,({status,message,data})=>{
        alert(JSON.stringify(data))
        if(status===200){
          
          this.setState({
            categorys:data
          })
        }else{
          alert(message)
        }
      })
  }


  render(){
    let {categorys} =this.state;
    return (
      <div className="Menu">
      <BrowserRouter>
         <div className="nav">
           <ul className="ul_Menu">
            {
              categorys.map((item)=>{
                return (
                <li key={item.id} className="Hot"><Link to="/Hot"><img src={item.icon}/><div>{item.name}</div></Link></li>
                );
              })
            }
            
             {/* <li className="Select"><Link to="/Select"><img src={require("./imges/Select.png")}/><div>精选套餐</div></Link></li>
             <li className="Chicken"><Link to="/Chicken"><img src={require("./imges/Chicken.png")}/><div>吮指原味鸡</div></Link></li>
             <li className="Barrel"><Link to="/Barrel"><img src={require("./imges/Barrel.png")}/><div>桶</div></Link></li>
             <li className="StapleFood"><Link to="/StapleFood"><img src={require("./imges/StapleFood.png")}/><div>主食</div></Link></li>
             <li className="Dessert"><Link to="/Dessert"><img src={require("./imges/Dessert.png")}/><div>小食甜点</div></Link></li>
             <li className="Baking"><Link to="/Baking"><img src={require("./imges/Baking.png")}/><div>烘焙</div></Link></li>
             <li className="Drinks"><Link to="/Drinks"><img src={require("./imges/Drinks.png")}/><div>饮料</div></Link></li>
             <li className="MyCardBag"><Link to="/MyCardBag"><img src={require("./imges/MyCardBag.png")}/><div>我的卡包</div></Link></li> */}
           </ul>
         </div>
         <div className="content">
           <Switch>
             <Route path="/Hot" component={Hot}/>
             <Route path="/Select" component={Select}/>
             <Route path="/Chicken" component={Chicken}/>
             <Route path="/Barrel" component={Barrel}/>
             <Route path="/StapleFood" component={StapleFood}/>
             <Route path="/Dessert" component={Dessert}/>
             <Route path="/Baking" component={Baking}/>
             <Route path="/Drinks" component={Drinks}/>
             <Route path="/MyCardBag" component={MyCardBag}/>
           </Switch>
         </div>
 </BrowserRouter>
     </div>
    );
  }
}

export default Menu;
